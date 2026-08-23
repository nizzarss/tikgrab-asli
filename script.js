
// TikGrab 2.9 — UI polish helpers
function announceStatus(message) {
    const status = document.getElementById('downloadStatus');
    if (status) status.textContent = message;
}

function setSubmitBusy(isBusy) {
    const btn = document.getElementById('btnSubmit');
    const input = document.getElementById('tiktokUrl');
    if (btn) {
        btn.disabled = isBusy;
        btn.setAttribute('aria-busy', String(isBusy));
        btn.classList.toggle('opacity-80', isBusy);
        btn.classList.toggle('cursor-wait', isBusy);
    }
    if (input) input.disabled = isBusy;
}


const HISTORY_KEY = "tikgrab_history_v1";

document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    renderHistory();
});

function applySavedTheme() {
    const saved = localStorage.getItem("tikgrab_theme");
    const dark = saved === "dark";
    document.documentElement.classList.toggle("dark", dark);
    updateThemeIcon(dark);
}

function toggleDarkMode() {
    const dark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("tikgrab_theme", dark ? "dark" : "light");
    updateThemeIcon(dark);
    showToast(dark ? "Dark mode aktif." : "Light mode aktif.", "info");
}

function updateThemeIcon(dark) {
    const icon = document.getElementById("themeIcon");
    if (!icon) return;
    icon.className = dark ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    } catch {
        return [];
    }
}

function saveToHistory(video) {
    const author = video.author || {};
    const item = {
        id: video.id || video.video_id || crypto.randomUUID?.() || String(Date.now()),
        title: video.title || "TikTok Video",
        cover: video.cover || video.origin_cover || "",
        author: author.unique_id || author.uniqueId || author.nickname || "creator",
        url: video.share_url || video.web_url || input.value.trim(),
        time: Date.now()
    };

    let history = getHistory().filter(x => x.url !== item.url);
    history.unshift(item);
    history = history.slice(0, 6);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById("historyList");
    const empty = document.getElementById("historyEmpty");
    if (!list || !empty) return;

    const history = getHistory();
    list.innerHTML = "";

    empty.classList.toggle("hidden", history.length > 0);

    history.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "history-card bg-slate-50 border border-slate-200 rounded-2xl p-3 flex gap-3 items-center";
        const cover = item.cover
            ? `<img src="${escapeHtml(item.cover)}" class="w-16 h-20 rounded-xl object-cover bg-slate-200 shrink-0" alt="">`
            : `<div class="w-16 h-20 rounded-xl bg-slate-200 flex items-center justify-center shrink-0 text-slate-400"><i class="fa-brands fa-tiktok text-xl"></i></div>`;

        card.innerHTML = `
            ${cover}
            <div class="min-w-0 flex-grow">
                <p class="font-semibold text-sm text-slate-900 line-clamp-2">${escapeHtml(item.title)}</p>
                <p class="mt-1 text-xs text-slate-500 truncate">@${escapeHtml(item.author)}</p>
                <button type="button" class="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700">Gunakan Link</button>
            </div>
        `;

        card.querySelector("button").addEventListener("click", () => {
            input.value = item.url || "";
            window.scrollTo({top:0, behavior:"smooth"});
            input.focus();
            showToast("Link riwayat dimasukkan.", "success");
        });

        list.appendChild(card);
    });
}

function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
    showToast("Riwayat berhasil dihapus.", "success");
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
}

const API_URL = "https://www.tikwm.com/api/";
const API_TIMEOUT_MS = 20000;
let isProcessing = false;
let isDownloading = false;

const form = document.getElementById("downloadForm");
const input = document.getElementById("tiktokUrl");
const submitButton = document.getElementById("btnSubmit");
const loadingState = document.getElementById("loadingState");
const resultSection = document.getElementById("resultSection");
const errorAlert = document.getElementById("errorAlert");
const errorMessage = document.getElementById("errorMessage");

const resThumbnail = document.getElementById("resThumbnail");
const resVideo = document.getElementById("resVideo");
const previewPlayHint = document.getElementById("previewPlayHint");
const previewStatus = document.getElementById("previewStatus");
const thumbnailFallback = document.getElementById("thumbnailFallback");
const resDuration = document.getElementById("resDuration");
const resAvatar = document.getElementById("resAvatar");
const resAuthor = document.getElementById("resAuthor");
const resAuthorName = document.getElementById("resAuthorName");
const resTitle = document.getElementById("resTitle");
const resLikes = document.getElementById("resLikes");
const resComments = document.getElementById("resComments");
const resShares = document.getElementById("resShares");

let currentVideo = null;

form.addEventListener("submit", handleDownloadSubmit);

async function handleDownloadSubmit(event) {
    event.preventDefault();
    if (isProcessing) return;

    const url = input.value.trim();
    hideError();
    resultSection.classList.add("hidden");

    if (!validateTikTokUrl(url)) {
        showError("Masukkan tautan TikTok yang valid. Contoh: https://www.tiktok.com/@user/video/...");
        input.focus();
        return;
    }

    isProcessing = true;
    setLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
        const response = await fetch(`${API_URL}?url=${encodeURIComponent(url)}`, {
            method: "GET",
            signal: controller.signal,
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP_${response.status}`);
        }

        const data = await response.json();
        console.log("TikGrab API response:", data);

        if (!data || data.code !== 0 || !data.data) {
            const message = String(data?.msg || "").toLowerCase();
            if (message.includes("not found") || message.includes("tidak ditemukan")) {
                throw new Error("VIDEO_NOT_FOUND");
            }
            throw new Error("VIDEO_UNAVAILABLE");
        }

        currentVideo = data.data;
        populateResult(currentVideo);
        saveToHistory(currentVideo);

        resultSection.classList.remove("hidden");
        resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
        showToast("Video berhasil diproses.", "success");
    } catch (error) {
        console.error("TikGrab error:", error);

        if (error?.name === "AbortError") {
            showError("Proses terlalu lama. Coba lagi beberapa saat lagi.");
            showToast("Waktu proses habis.", "error");
        } else if (error?.message === "VIDEO_NOT_FOUND") {
            showError("Video tidak ditemukan atau link sudah tidak tersedia.");
            showToast("Video tidak ditemukan.", "error");
        } else if (error?.message === "VIDEO_UNAVAILABLE") {
            showError("Video belum dapat diproses. Coba link TikTok lain.");
            showToast("Video tidak tersedia.", "error");
        } else if (error?.message?.startsWith("HTTP_")) {
            showError("Layanan sedang bermasalah. Coba lagi beberapa saat lagi.");
            showToast("Layanan sedang bermasalah.", "error");
        } else {
            showError("Gagal terhubung ke layanan. Periksa koneksi internet lalu coba lagi.");
            showToast("Gagal memproses video.", "error");
        }
    } finally {
        clearTimeout(timeoutId);
        isProcessing = false;
        setLoading(false); setSubmitBusy(false);
    }
}

function validateTikTokUrl(url) {
    if (!url || typeof url !== "string") return false;
    const value = url.trim();
    if (value.length > 2048) return false;

    try {
        const parsed = new URL(value);
        if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return false;

        const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
        const allowed = host === "tiktok.com" || host.endsWith(".tiktok.com");
        if (!allowed) return false;

        // Accept normal TikTok video links and TikTok short/share links.
        return host === "tiktok.com" || host.endsWith(".tiktok.com");
    } catch {
        return false;
    }
}


function setupVideoPreview(video) {
    if (!resVideo) return;
    const previewUrl = video.play || video.hdplay || "";

    resVideo.pause();
    resVideo.removeAttribute("src");
    resVideo.load();
    resVideo.classList.add("hidden");
    resVideo.poster = video.cover || video.origin_cover || "";
    if (resThumbnail) resThumbnail.classList.remove("hidden");
    if (previewPlayHint) previewPlayHint.classList.remove("hidden");

    if (!previewUrl) {
        if (previewStatus) previewStatus.innerHTML = '<i class="fa-solid fa-image mr-1"></i>Thumbnail preview';
        return;
    }

    resVideo.src = previewUrl;
    resVideo.onloadedmetadata = () => {
        resVideo.classList.remove("hidden");
        if (resThumbnail) resThumbnail.classList.add("hidden");
        if (previewPlayHint) previewPlayHint.classList.add("hidden");
        if (previewStatus) previewStatus.innerHTML = '<i class="fa-solid fa-circle-check mr-1 text-emerald-500"></i>Video siap diputar';
    };
    resVideo.onerror = () => {
        resVideo.classList.add("hidden");
        if (resThumbnail) resThumbnail.classList.remove("hidden");
        if (previewPlayHint) previewPlayHint.classList.remove("hidden");
        if (previewStatus) previewStatus.innerHTML = '<i class="fa-solid fa-image mr-1"></i>Preview video tidak tersedia';
    };
}

function populateResult(video) {
    const author = video.author || {};
    setupVideoPreview(video);

    const thumbnail = video.cover || video.origin_cover || video.ai_dynamic_cover || "";
    if (thumbnail) {
        thumbnailFallback.classList.add("hidden");
        thumbnailFallback.classList.remove("flex");
        resThumbnail.classList.remove("hidden");
        resThumbnail.src = thumbnail;
        resThumbnail.onerror = () => {
            resThumbnail.classList.add("hidden");
            thumbnailFallback.classList.remove("hidden");
            thumbnailFallback.classList.add("flex");
        };
    } else {
        resThumbnail.classList.add("hidden");
        thumbnailFallback.classList.remove("hidden");
        thumbnailFallback.classList.add("flex");
    }

    const avatar = author.avatar || author.avatar_thumb || "";
    if (avatar) resAvatar.src = avatar;
    else resAvatar.removeAttribute("src");

    const username = author.unique_id || author.uniqueId || "";
    const nickname = author.nickname || "TikTok Creator";

    resAuthor.textContent = username ? `@${username}` : nickname;
    resAuthorName.textContent = nickname;
    resTitle.textContent = video.title || "TikTok Video";
    resDuration.textContent = formatDuration(video.duration);
    resLikes.textContent = formatNumber(video.digg_count);
    resComments.textContent = formatNumber(video.comment_count);
    resShares.textContent = formatNumber(video.share_count);
}

function downloadMedia(type, label) {
    if (isDownloading) {
        showToast("Tunggu proses download sebelumnya selesai.", "info");
        return;
    }

    if (!currentVideo) {
        showToast("Proses video terlebih dahulu.", "error");
        return;
    }

    let url = "";
    if (type === "mp4-nwm") url = currentVideo.play || "";
    if (type === "mp4-hd") url = currentVideo.hdplay || currentVideo.play || "";
    if (type === "mp3") url = currentVideo.music || "";

    if (!url || !/^https?:\/\//i.test(url)) {
        showToast(`${label} tidak tersedia untuk video ini.`, "error");
        return;
    }

    isDownloading = true;
    setDownloadStatus(25, `Menyiapkan ${label}...`);
    showToast(`Menyiapkan ${label}...`, "info");

    try {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `Buka ${label}`);
        document.body.appendChild(link);
        link.click();
        link.remove();

        setDownloadStatus(100, "Link download siap dibuka");
        showToast(`${label} siap dibuka.`, "success");
    } catch (error) {
        console.error("Download error:", error);
        setDownloadStatus(0, "Download gagal");
        showToast("Download tidak dapat dibuka. Coba lagi.", "error");
    } finally {
        setTimeout(() => { isDownloading = false; }, 1000);
    }
}


async function pasteAndDownload() {
    try {
        let text = "";

        if (navigator.clipboard?.readText) {
            text = (await navigator.clipboard.readText()).trim();
        }

        if (!text) {
            input.focus();
            showToast("Clipboard kosong. Tempel link TikTok terlebih dahulu.", "error");
            return;
        }

        input.value = text;
        hideError();

        if (!validateTikTokUrl(text)) {
            showError("Isi clipboard bukan tautan TikTok yang valid.");
            input.focus();
            return;
        }

        showToast("Link ditemukan. Memproses video...", "info");

        // Jalankan alur download yang sama dengan tombol Download biasa.
        await handleDownloadSubmit({ preventDefault: () => {} });
    } catch (error) {
        console.error("Paste & Download error:", error);
        input.focus();
        showToast("Clipboard tidak dapat diakses. Gunakan tombol Tempel lalu Download.", "error");
    }
}

async function handlePaste() {
    try {
        if (navigator.clipboard?.readText) {
            const text = await navigator.clipboard.readText();
            if (text) {
                input.value = text.trim();
                hideError();
                showToast("Tautan berhasil ditempel.", "success");
                return;
            }
        }
        input.focus();
        showToast("Tekan Ctrl+V untuk menempelkan link.", "info");
    } catch {
        input.focus();
        showToast("Clipboard tidak dapat diakses. Gunakan Ctrl+V.", "info");
    }
}

function copySampleLink() {
    input.value = "https://www.tiktok.com/";
    input.focus();
    showToast("Contoh format link dimasukkan. Ganti dengan link video TikTok.", "info");
}

function resetDownloader() {
    form.reset();
    currentVideo = null;
    if (resVideo) {
        resVideo.pause();
        resVideo.removeAttribute("src");
        resVideo.load();
        resVideo.classList.add("hidden");
    }
    if (resThumbnail) resThumbnail.classList.remove("hidden");
    resultSection.classList.add("hidden");
    loadingState.classList.add("hidden");
    hideError();
    window.scrollTo({top:0, behavior:"smooth"});
}

function setLoading(isLoading) {
    if (isLoading) {
        loadingState.classList.remove("hidden");
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
        submitButton.innerHTML = '<i class="fa-solid fa-spinner spin"></i><span>Memproses...</span>';
        loadingState.scrollIntoView({behavior:"smooth", block:"center"});
    } else {
        loadingState.classList.add("hidden");
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
        submitButton.innerHTML = '<i class="fa-solid fa-download"></i><span>Download</span>';
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorAlert.classList.remove("hidden");
}

function hideError() {
    errorAlert.classList.add("hidden");
    errorMessage.textContent = "";
}

function toggleFaq(index) {
    const answer = document.getElementById(`faqAnswer-${index}`);
    const icon = document.getElementById(`faqIcon-${index}`);
    if (!answer || !icon) return;

    const wasHidden = answer.classList.contains("hidden");

    for (let i=1;i<=4;i++) {
        const a=document.getElementById(`faqAnswer-${i}`);
        const ic=document.getElementById(`faqIcon-${i}`);
        if(a) a.classList.add("hidden");
        if(ic) ic.style.transform="rotate(0deg)";
    }

    if(wasHidden) {
        answer.classList.remove("hidden");
        icon.style.transform="rotate(180deg)";
    }
}

function showToast(message, type="info") {
    const container=document.getElementById("toastContainer");
    const toast=document.createElement("div");

    let icon="fa-solid fa-circle-info";
    let classes="bg-slate-900 text-white";

    if(type==="success"){
        icon="fa-solid fa-circle-check";
        classes="bg-emerald-700 text-white";
    } else if(type==="error"){
        icon="fa-solid fa-circle-exclamation";
        classes="bg-red-700 text-white";
    }

    toast.className=`toast-in ${classes} p-4 rounded-xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-medium`;
    toast.innerHTML=`<i class="${icon} shrink-0"></i><span class="flex-grow"></span><button type="button" class="opacity-70 hover:opacity-100"><i class="fa-solid fa-xmark"></i></button>`;
    toast.querySelector("span").textContent=message;
    toast.querySelector("button").addEventListener("click",()=>toast.remove());
    container.appendChild(toast);

    setTimeout(()=>{if(toast.isConnected) toast.remove();},4500);
}

function formatDuration(seconds) {
    const total=Number(seconds);
    if(!Number.isFinite(total)||total<=0) return "00:00";
    return `${String(Math.floor(total/60)).padStart(2,"0")}:${String(Math.floor(total%60)).padStart(2,"0")}`;
}

function formatNumber(value) {
    const n=Number(value);
    if(!Number.isFinite(n)) return "0";
    if(n>=1000000) return `${(n/1000000).toFixed(1).replace(".0","")}M`;
    if(n>=1000) return `${(n/1000).toFixed(1).replace(".0","")}K`;
    return String(n);
}
