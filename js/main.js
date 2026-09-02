// ============================================================
// সাইটের তথ্য এডমিন প্যানেল থেকে বদলানো যায় (/admin)।
// ডিফল্ট ভাষা: English। "বাংলা / English" বাটনে ক্লিক করে বদলানো যায়।
// ============================================================
const CONFIG = {
  name: "আপনার নাম",
  name_en: "Your Name",
  tagline: "",
  tagline_en: "",
  bio: "",
  bio_en: "",
  profileImage: "/images/uploads/profile-placeholder.svg",
  favicon: "/favicon.svg",
  logo: "/favicon.svg",
  splashLogo: "",
  phone: "",
  email: "",
  location: "",
  whatsappNumber: "8801XXXXXXXXX",
  whatsappMessage: "হাই, আমি আপনার পোর্টফোলিও দেখলাম। একটা কাজ নিয়ে কথা বলতে চাই।",
  whatsappMessage_en: "Hi, I saw your portfolio and would like to discuss a project.",
  yearsExperience: "",
  yearsExperience_en: "",
  projectsDone: "",
  projectsDone_en: "",
  happyClients: "",
  happyClients_en: "",
  googleDriveUrl: "",
  googleDriveLabel: "Google Drive এ দেখুন",
  googleDriveLabel_en: "View on Google Drive",
  facebookUrl: "",
  instagramUrl: "",
};

const TRANSLATIONS = {
  bn: {
    navWork: "কাজ", navPricing: "মূল্য", navWhyHire: "কেন আমাকে", navAbout: "সম্পর্কে", navContact: "যোগাযোগ", navWhatsApp: "WhatsApp এ মেসেজ করুন", navFacebook: "ফেসবুক", navInstagram: "ইনস্টাগ্রাম",
    videoEyebrow: "ভিডিও", videoTitle: "ভিডিও শোকেস", videoText: "থাম্বনেইলে বা Watch Now এ ক্লিক করলে ভিডিওটি খুলবে।", watchNow: "এখনই দেখুন",
    eyebrowHero: "ফ্রিলান্স ভিজ্যুয়াল ডিজাইনার", heroPrefix: "আমি", heroTitle: "ব্র্যান্ডের ভিজ্যুয়াল আইডেন্টিটি বানাই",
    heroWhatsApp: "WhatsApp এ কথা বলুন", heroViewWork: "কাজ দেখুন ↓",
    servicesEyebrow: "সার্ভিস ক্যাটাগরি", servicesTitle: "যে ধরনের কাজ করি", servicesText: "নিচের যেকোনো ক্যাটাগরিতে ক্লিক করলে সেই ধরনের কাজ দেখতে পাবেন।",
    portfolioEyebrow: "পোর্টফোলিও", portfolioTitle: "সাম্প্রতিক কাজ",
    bestworkEyebrow: "ফিচার্ড", bestworkTitle: "সেরা কাজ", bestworkText: "যেকোনো ছবিতে ক্লিক করে বড় করে দেখুন — টেনে সরিয়ে আরও দেখুন।",
    whyhireEyebrow: "কেন আমাকে বেছে নেবেন", whyhireTitle: "কেন আমাকে হায়ার করবেন", skillsTitle: "দক্ষতা ও টুলস",
    pricingEyebrow: "মূল্য তালিকা", pricingTitle: "প্যাকেজসমূহ", pricingText: "আপনার প্রজেক্টের জন্য একটা প্যাকেজ বেছে নিন — অথবা কাস্টম কোটের জন্য মেসেজ করুন।", pricingChoose: "এটা বেছে নিন", pricingPopular: "সবচেয়ে জনপ্রিয়",
    aboutEyebrow: "পরিচিতি",
    yearsLabel: "বছরের অভিজ্ঞতা", projectsLabel: "সম্পন্ন প্রজেক্ট", clientsLabel: "সন্তুষ্ট ক্লায়েন্ট",
    aboutText: "কোনো প্রজেক্ট নিয়ে কথা বলতে চাইলে সরাসরি WhatsApp এ মেসেজ পাঠান — সাধারণত কয়েক ঘণ্টার মধ্যে রিপ্লাই পাবেন।",
    contactTitle: "নতুন প্রজেক্ট নিয়ে কথা বলতে চান?", contactWhatsApp: "WhatsApp এ মেসেজ করুন", contactEmail: "ইমেইল করুন",
    footerRights: "সর্বস্বত্ব সংরক্ষিত।", metaDescription: "গ্রাফিক ডিজাইন পোর্টফোলিও — WhatsApp এ সরাসরি যোগাযোগ করুন।", waAria: "WhatsApp এ মেসেজ করুন", allWork: "সব কাজ", count: "টি কাজ",
    loadingLabel: "লোড হচ্ছে",
    empty: "এই ক্যাটাগরিতে এখনো কোনো কাজ যোগ করা হয়নি। এডমিন প্যানেল (/admin) থেকে যোগ করুন।"
  },
  en: {
    navWork: "Work", navPricing: "Pricing", navWhyHire: "Why Me", navAbout: "About", navContact: "Contact", navWhatsApp: "Message on WhatsApp", navFacebook: "Facebook", navInstagram: "Instagram",
    videoEyebrow: "VIDEO", videoTitle: "Video Showcase", videoText: "Click any thumbnail or Watch Now to open the video.", watchNow: "Watch Now",
    eyebrowHero: "FREELANCE VISUAL DESIGNER", heroPrefix: "I'm", heroTitle: "I build visual identities for brands",
    heroWhatsApp: "Talk on WhatsApp", heroViewWork: "View my work ↓",
    servicesEyebrow: "SERVICE CATEGORIES", servicesTitle: "What I do", servicesText: "Click any category below to view that type of work.",
    portfolioEyebrow: "PORTFOLIO", portfolioTitle: "Recent work",
    bestworkEyebrow: "FEATURED", bestworkTitle: "Best Work", bestworkText: "Click any image to view it full size — drag sideways to browse more.",
    whyhireEyebrow: "WHY CHOOSE ME", whyhireTitle: "Why Hire Me", skillsTitle: "Skills & Tools",
    pricingEyebrow: "PRICING", pricingTitle: "Packages", pricingText: "Pick a package that fits your project — or message me for a custom quote.", pricingChoose: "Choose this", pricingPopular: "Most Popular",
    aboutEyebrow: "ABOUT ME",
    yearsLabel: "Years of experience", projectsLabel: "Completed projects", clientsLabel: "Happy clients",
    aboutText: "Want to discuss a project? Send me a message on WhatsApp — I usually reply within a few hours.",
    contactTitle: "Want to discuss a new project?", contactWhatsApp: "Message on WhatsApp", contactEmail: "Email me",
    footerRights: "All rights reserved.", metaDescription: "Graphic design portfolio. Contact me directly on WhatsApp.", waAria: "Message on WhatsApp", allWork: "All work", count: "works",
    loadingLabel: "LOADING",
    empty: "No work has been added to this category yet. Add it from the admin panel (/admin)."
  }
};

let currentLang = localStorage.getItem("portfolio-language") || "en";
if (!TRANSLATIONS[currentLang]) currentLang = "en";

let CATEGORIES = [];
let allItems = [];
let bestWorkItems = [];
let videoItems = [];
let promoItems = [];
let pricingItems = [];
let activeCategory = "all";

async function loadSettings() {
  try {
    const res = await fetch("content/settings.json", { cache: "no-store" });
    const data = await res.json();
    Object.assign(CONFIG, data);
  } catch (err) {
    console.error("সাইট তথ্য লোড করতে সমস্যা হয়েছে:", err);
  }
}

async function loadCategories() {
  try {
    const res = await fetch("content/categories.json", { cache: "no-store" });
    const data = await res.json();
    CATEGORIES = Array.isArray(data.items) ? data.items : [];
  } catch (err) {
    console.error("ক্যাটাগরি লোড করতে সমস্যা হয়েছে:", err);
    CATEGORIES = [];
  }
}

function normalizeId(id) {
  return (id || "").toString().trim().toLowerCase();
}

function t(key) { return TRANSLATIONS[currentLang][key] || TRANSLATIONS.bn[key] || key; }
function pick(item, key) {
  if (currentLang === "en") return item[`${key}_en`] || item[key] || "";
  return item[key] || item[`${key}_en`] || "";
}
function configPick(key) {
  if (currentLang === "en") return CONFIG[`${key}_en`] || CONFIG[key] || "";
  return CONFIG[key] || CONFIG[`${key}_en`] || "";
}

function buildWhatsappLink() {
  const message = currentLang === "en" ? (CONFIG.whatsappMessage_en || CONFIG.whatsappMessage) : CONFIG.whatsappMessage;
  const number = (CONFIG.whatsappNumber || "").replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message || "")}`;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "en" ? "en" : "bn";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (attr && key) el.setAttribute(attr, t(key));
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === currentLang));
}

function applyStaticInfo() {
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = configPick("name")));
  document.querySelectorAll("[data-tagline]").forEach((el) => (el.textContent = configPick("tagline")));
  document.querySelectorAll("[data-bio]").forEach((el) => (el.textContent = configPick("bio")));
  document.querySelectorAll("[data-years]").forEach((el) => (el.textContent = configPick("yearsExperience")));
  document.querySelectorAll("[data-projects]").forEach((el) => (el.textContent = configPick("projectsDone")));
  document.querySelectorAll("[data-clients]").forEach((el) => (el.textContent = configPick("happyClients")));
  document.querySelectorAll("[data-profile-img]").forEach((el) => { el.src = CONFIG.profileImage; el.alt = configPick("name"); });

  const titleEl = document.getElementById("pageTitle");
  if (titleEl) titleEl.textContent = currentLang === "en" ? `${configPick("name")} — Graphic Design Portfolio` : `${configPick("name")} — গ্রাফিক ডিজাইন পোর্টফোলিও`;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.content = t("metaDescription");
  const iconEl = document.getElementById("faviconLink");
  if (iconEl && CONFIG.favicon) iconEl.href = CONFIG.favicon;

  // Navbar logo এবং Splash (loading screen) logo এখন আলাদা —
  // একটা বদলালে আরেকটাতে প্রভাব পড়বে না। Splash Logo খালি থাকলে
  // Navbar Logo (আর তাও না থাকলে favicon) fallback হিসেবে ব্যবহার হয়।
  const navLogoEl = document.getElementById("navLogo");
  if (navLogoEl) navLogoEl.src = CONFIG.logo || CONFIG.favicon;
  const splashLogoEl = document.getElementById("splashLogo");
  if (splashLogoEl) splashLogoEl.src = CONFIG.splashLogo || CONFIG.logo || CONFIG.favicon;

  document.querySelectorAll("[data-phone]").forEach((el) => {
    if (!CONFIG.phone) { el.closest(".contact-pill")?.remove(); return; }
    el.textContent = CONFIG.phone;
    if (el.tagName === "A") el.href = `tel:${CONFIG.phone.replace(/\s/g, "")}`;
  });
  document.querySelectorAll("[data-location]").forEach((el) => {
    if (!CONFIG.location) { el.closest(".contact-pill")?.remove(); return; }
    el.textContent = CONFIG.location;
  });
  document.querySelectorAll("[data-email]").forEach((el) => { el.textContent = CONFIG.email; el.href = `mailto:${CONFIG.email}`; });
  document.querySelectorAll("[data-wa-link]").forEach((el) => { el.href = buildWhatsappLink(); });

  document.querySelectorAll("[data-gdrive-link]").forEach((el) => {
    if (!CONFIG.googleDriveUrl) { el.style.display = "none"; return; }
    el.style.display = "";
    el.href = CONFIG.googleDriveUrl;
    el.textContent = configPick("googleDriveLabel");
  });

  document.querySelectorAll("[data-fb-link]").forEach((el) => {
    if (!CONFIG.facebookUrl) { el.style.display = "none"; return; }
    el.style.display = "";
    el.href = CONFIG.facebookUrl;
  });

  document.querySelectorAll("[data-instagram-link]").forEach((el) => {
    if (!CONFIG.instagramUrl) { el.style.display = "none"; return; }
    el.style.display = "";
    el.href = CONFIG.instagramUrl;
  });
}

function categoryLabel(cat) { return pick(cat, "label"); }

async function loadPortfolio() {
  try {
    const res = await fetch("content/portfolio.json", { cache: "no-store" });
    const data = await res.json();
    allItems = Array.isArray(data.items) ? data.items : [];
  } catch (err) {
    console.error("পোর্টফোলিও ডেটা লোড করতে সমস্যা হয়েছে:", err);
    allItems = [];
  }
  renderBoard(); renderFilterBar(); renderGrid();
}

function renderBoard() {
  const board = document.getElementById("board");
  if (!board) return;
  board.innerHTML = CATEGORIES.map((cat, i) => {
    const count = allItems.filter((it) => normalizeId(it.category) === normalizeId(cat.id)).length;
    return `<div class="sticker" tabindex="0" role="button" data-cat="${cat.id}"><span class="num">${String(i + 1).padStart(2, "0")}</span><div><h3>${categoryLabel(cat)}</h3><div class="count">${count} ${t("count")}</div></div></div>`;
  }).join("");
  board.querySelectorAll(".sticker").forEach((el) => {
    const activate = () => { activeCategory = el.dataset.cat; renderFilterBar(); renderGrid(); document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" }); };
    el.addEventListener("click", activate);
    el.addEventListener("keypress", (e) => { if (e.key === "Enter" || e.key === " ") activate(); });
  });
}

function renderFilterBar() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;
  const chips = [{ id: "all", label: t("allWork") }, ...CATEGORIES.map(c => ({ id: c.id, label: categoryLabel(c) }))];
  bar.innerHTML = chips.map(c => `<button class="chip ${activeCategory === c.id ? "active" : ""}" data-cat="${c.id}">${c.label}</button>`).join("");
  bar.querySelectorAll(".chip").forEach((btn) => btn.addEventListener("click", () => { activeCategory = btn.dataset.cat; renderFilterBar(); renderGrid(); }));
}

function renderGrid() {
  const grid = document.getElementById("grid");
  if (!grid) return;

  const items = activeCategory === "all"
    ? allItems
    : allItems.filter(
        (it) =>
          normalizeId(it.category) === normalizeId(activeCategory)
      );

  if (items.length === 0) {
    grid.innerHTML = `<div class="empty-state">${t("empty")}</div>`;
    return;
  }

  grid.innerHTML = items
    .map((it) => {
      const title = pick(it, "title");
      const description = pick(it, "description");

      const cat =
        CATEGORIES.find(
          (c) =>
            normalizeId(c.id) === normalizeId(it.category)
        ) || {
          label: it.category,
          label_en: it.category
        };

      const gallery = Array.isArray(it.gallery)
        ? it.gallery
        : [];

      const allImages = [
        it.image,
        ...gallery
      ].filter(Boolean);

      return `
        <div class="work-card"
             data-gallery='${JSON.stringify(allImages).replace(/'/g, "&#39;")}'
             data-title="${title.replace(/"/g, "&quot;")}">

          <div class="work-thumb">
            <img
              src="${it.image}"
              alt="${title}"
              loading="lazy"
            >
          </div>

          <div class="work-body">
            <div class="work-tag">${categoryLabel(cat)}</div>
            <div class="work-title">${title}</div>

            ${
              description
                ? `<div class="work-desc">${description}</div>`
                : ""
            }

            ${
              allImages.length > 1
                ? `<div class="work-gallery-count">
                    ${allImages.length} images
                  </div>`
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");

  grid.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => {
      try {
        const images = JSON.parse(
          card.dataset.gallery || "[]"
        );

        if (images.length > 0) {
          openLightbox(
            images,
            0,
            card.dataset.title || ""
          );
        }
      } catch (err) {
        console.error("Gallery load error:", err);
      }
    });
  });
}
async function loadBestWork() {
  try {
    const res = await fetch("content/bestwork.json", { cache: "no-store" });
    const data = await res.json();
    bestWorkItems = Array.isArray(data.items) ? data.items : [];
  } catch (err) {
    console.error("'সেরা কাজ' ডেটা লোড করতে সমস্যা হয়েছে:", err);
    bestWorkItems = [];
  }
  renderBestWork();
}

function renderBestWork() {
  const track = document.getElementById("bestworkTrack");
  if (!track) return;
  if (bestWorkItems.length === 0) { track.innerHTML = ""; return; }
  // seamless loop এর জন্য লিস্টটা দুইবার বসানো হয়
  const doubled = bestWorkItems.concat(bestWorkItems);
  track.innerHTML = doubled.map((it) => {
    const title = pick(it, "title");
    return `
      <div class="bestwork-item" data-image="${it.image}" data-title="${title.replace(/"/g, "&quot;")}">
        <img src="${it.image}" alt="${title}" loading="lazy" draggable="false">
        ${title ? `<div class="bestwork-caption">${title}</div>` : ""}
      </div>`;
  }).join("");
}

async function loadVideoShowcase() {
  try {
    const res = await fetch("content/videoshowcase.json", { cache: "no-store" });
    const data = await res.json();
    videoItems = Array.isArray(data.videos) ? data.videos : [];
    promoItems = Array.isArray(data.promoImages) ? data.promoImages : [];
  } catch (err) {
    console.error("ভিডিও শোকেস ডেটা লোড করতে সমস্যা হয়েছে:", err);
    videoItems = [];
    promoItems = [];
  }
  renderVideoShowcase();
}

function renderVideoShowcase() {
  const track = document.getElementById("videoTrack");
  if (!track) return;

  const combined = [
    ...videoItems.map((it) => ({ ...it, __type: "video" })),
    ...promoItems.map((it) => ({ ...it, __type: "promo" })),
  ];

  if (combined.length === 0) {
    track.innerHTML = "";
    return;
  }

  // seamless loop এর জন্য লিস্টটা দুইবার বসানো হয়, বেস্ট ওয়ার্কের মতোই
  const doubled = combined.concat(combined);
  track.innerHTML = doubled.map((it) => {
    const title = pick(it, "title");

    if (it.__type === "video") {
      const href = it.videoUrl || "#";
      return `
        <a class="video-item" href="${href}" target="_blank" rel="noopener" data-video-url="${(it.videoUrl || "").replace(/"/g, "&quot;")}">
          <div class="video-thumb-wrap">
            <img src="${it.thumbnail}" alt="${title}" loading="lazy" draggable="false">
            <div class="video-play-icon"><span>&#9658;</span></div>
          </div>
          <div class="video-watchnow">${t("watchNow")}</div>
        </a>`;
    }

    // প্রোমোশনাল ছবি — লিংক দেওয়া থাকলে ক্লিকে সেই লিংক খুলবে, নাহলে শুধু ছবি
    const tag = it.link ? "a" : "div";
    const attrs = it.link ? `href="${it.link}" target="_blank" rel="noopener"` : "";
    return `
      <${tag} class="video-item promo-item" ${attrs}>
        <div class="video-thumb-wrap">
          <img src="${it.image}" alt="${title}" loading="lazy" draggable="false">
        </div>
      </${tag}>`;
  }).join("");
}

// লাইটবক্স এখন একাধিক ছবি (গ্যালারি) সাপোর্ট করে —
// একটা ছবি থাকলে Next/Prev বাটন ও কাউন্টার লুকানো থাকবে,
// একাধিক থাকলে ব্যবহারকারী তীর চিহ্নে ক্লিক করে বা কীবোর্ড
// অ্যারো কী দিয়ে সব ছবি ব্রাউজ করতে পারবে।
let lightboxImages = [];
let lightboxIndex = 0;
let lightboxTitle = "";

function renderLightboxImage() {
  const img = document.getElementById("lightboxImg");
  const counter = document.getElementById("lightboxCounter");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  if (!img) return;

  img.src = lightboxImages[lightboxIndex] || "";
  img.alt = lightboxTitle || "";

  const multi = lightboxImages.length > 1;
  if (prevBtn) prevBtn.classList.toggle("hidden", !multi);
  if (nextBtn) nextBtn.classList.toggle("hidden", !multi);
  if (counter) {
    counter.style.display = multi ? "" : "none";
    counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  }
}

function openLightbox(images, startIndex, title) {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lightboxImages = Array.isArray(images) ? images : [images];
  lightboxIndex = startIndex || 0;
  lightboxTitle = title || "";
  renderLightboxImage();
  lb.classList.add("show");
}
function showPrevImage() {
  if (lightboxImages.length < 2) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  renderLightboxImage();
}
function showNextImage() {
  if (lightboxImages.length < 2) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  renderLightboxImage();
}
function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("show");
}

function setupBestWorkTrack() {
  const track = document.getElementById("bestworkTrack");
  if (!track) return;

  let isDown = false;
  let moved = false;
  let startX = 0;
  let scrollStart = 0;
  let autoPaused = false;
  let resumeTimer = null;

  track.addEventListener("pointerdown", (e) => {
    isDown = true;
    moved = false;
    startX = e.clientX;
    scrollStart = track.scrollLeft;
    autoPaused = true;
    clearTimeout(resumeTimer);
    track.classList.add("dragging");
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) moved = true;
    track.scrollLeft = scrollStart - dx;
  });

  function endDrag() {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("dragging");
    resumeTimer = setTimeout(() => { autoPaused = false; }, 1200);
  }
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointerleave", () => { if (isDown) endDrag(); });

  track.addEventListener("mouseenter", () => { autoPaused = true; });
  track.addEventListener("mouseleave", () => { if (!isDown) autoPaused = false; });

  track.addEventListener("click", (e) => {
    if (moved) { moved = false; return; }
    const item = e.target.closest(".bestwork-item");
    if (item) openLightbox([item.dataset.image], 0, item.dataset.title);
  });

  function autoScrollStep() {
    if (!autoPaused && track.scrollWidth > track.clientWidth) {
      track.scrollLeft += 0.6;
      const half = track.scrollWidth / 2;
      if (track.scrollLeft >= half) track.scrollLeft -= half;
    }
    requestAnimationFrame(autoScrollStep);
  }
  requestAnimationFrame(autoScrollStep);
}

function setupVideoTrack() {
  const track = document.getElementById("videoTrack");
  if (!track) return;

  let isDown = false;
  let moved = false;
  let startX = 0;
  let scrollStart = 0;
  let autoPaused = false;
  let resumeTimer = null;

  track.addEventListener("pointerdown", (e) => {
    isDown = true;
    moved = false;
    startX = e.clientX;
    scrollStart = track.scrollLeft;
    autoPaused = true;
    clearTimeout(resumeTimer);
    track.classList.add("dragging");
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) moved = true;
    track.scrollLeft = scrollStart - dx;
  });

  function endDrag() {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("dragging");
    resumeTimer = setTimeout(() => { autoPaused = false; }, 1200);
  }
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointerleave", () => { if (isDown) endDrag(); });

  track.addEventListener("mouseenter", () => { autoPaused = true; });
  track.addEventListener("mouseleave", () => { if (!isDown) autoPaused = false; });

  // ড্র্যাগ করে সরানোর সময় যাতে ভুলবশত ভিডিও লিংকে ক্লিক না হয়ে যায়
  track.addEventListener("click", (e) => {
    if (moved) { moved = false; e.preventDefault(); return; }
    const item = e.target.closest(".video-item");
    if (item && !item.getAttribute("href")) e.preventDefault();
  });

  function autoScrollStep() {
    if (!autoPaused && track.scrollWidth > track.clientWidth) {
      track.scrollLeft += 0.6;
      const half = track.scrollWidth / 2;
      if (track.scrollLeft >= half) track.scrollLeft -= half;
    }
    requestAnimationFrame(autoScrollStep);
  }
  requestAnimationFrame(autoScrollStep);
}

async function loadPricing() {
  try {
    const res = await fetch("content/pricing.json", { cache: "no-store" });
    const data = await res.json();
    pricingItems = Array.isArray(data.items) ? data.items : [];
  } catch (err) {
    console.error("প্রাইসিং ডেটা লোড করতে সমস্যা হয়েছে:", err);
    pricingItems = [];
  }
  renderPricing();
}

function renderPricing() {
  const items = pricingItems;
  const grid = document.getElementById("pricingGrid");
  if (!grid) return;
  grid.innerHTML = items.map((p) => {
    const features = currentLang === "en" ? (p.features_en || p.features || []) : (p.features || p.features_en || []);
    return `
      <div class="pricing-card ${p.highlighted ? "highlighted" : ""}">
        ${p.highlighted ? `<div class="pricing-badge">${t("pricingPopular")}</div>` : ""}
        <div class="pricing-name">${pick(p, "name")}</div>
        <div class="pricing-price">${pick(p, "price")}</div>
        ${pick(p, "period") ? `<div class="pricing-period">${pick(p, "period")}</div>` : ""}
        <ul class="pricing-features">${features.map((f) => `<li>${f}</li>`).join("")}</ul>
        <a class="pricing-cta" data-wa-link href="#" target="_blank" rel="noopener">${t("pricingChoose")}</a>
      </div>`;
  }).join("");
  // নতুন করে বসানো WhatsApp বাটনগুলোতেও লিংক বসাতে হবে
  grid.querySelectorAll("[data-wa-link]").forEach((el) => { el.href = buildWhatsappLink(); });
}

async function loadWhyHire() {
  let reasons = [];
  let skills = [];
  try {
    const res = await fetch("content/whyhire.json", { cache: "no-store" });
    const data = await res.json();
    reasons = Array.isArray(data.reasons) ? data.reasons : [];
    skills = Array.isArray(data.skills) ? data.skills : [];
  } catch (err) {
    console.error("'কেন হায়ার করবেন' ডেটা লোড করতে সমস্যা হয়েছে:", err);
  }
  renderWhyHire(reasons, skills);
}

function renderWhyHire(reasons, skills) {
  const grid = document.getElementById("whyhireGrid");
  if (grid) {
    grid.innerHTML = reasons.map((r) => `
      <div class="whyhire-card">
        <h3>${pick(r, "title")}</h3>
        <p>${pick(r, "description")}</p>
      </div>`).join("");
  }
  const skillsList = document.getElementById("skillsList");
  if (skillsList) {
    skillsList.innerHTML = skills.map((s) => `<span class="skill-tag">${s}</span>`).join("");
  }
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("portfolio-language", lang);
  applyTranslations();
  applyStaticInfo();
  renderBoard(); renderFilterBar(); renderGrid();
  loadWhyHire();
  renderBestWork();
  renderVideoShowcase();
  renderPricing();
}

function hideSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  splash.classList.add("hide");
  setTimeout(() => splash.remove(), 600);
}

function animateSplashPercent(duration) {
  return new Promise((resolve) => {
    const el = document.getElementById("splashPercent");
    const fill = document.getElementById("splashLineFill");
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (el) el.textContent = "100%";
      if (fill) fill.style.width = "100%";
      resolve();
      return;
    }
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      el.textContent = pct + "%";
      if (fill) fill.style.width = pct + "%";
      if (elapsed < duration) requestAnimationFrame(tick);
      else resolve();
    }
    requestAnimationFrame(tick);
  });
}

function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function openMenu() {
    links.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.contains("open");
    if (isOpen) closeMenu(); else openMenu();
  });

  // মেনুর যেকোনো লিংকে ক্লিক করলে মেনু বন্ধ হয়ে যাবে
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  // বড় স্ক্রিনে রিসাইজ করলে মেনু অটো বন্ধ হয়ে যাবে
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const safetyTimeout = setTimeout(hideSplash, 4000);
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
  setupBestWorkTrack();
  setupVideoTrack();
  setupMobileNav();
  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", (e) => { e.stopPropagation(); showPrevImage(); });
  document.getElementById("lightboxNext")?.addEventListener("click", (e) => { e.stopPropagation(); showNextImage(); });
  document.getElementById("lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrevImage();
    if (e.key === "ArrowRight") showNextImage();
  });

  const percentDone = animateSplashPercent(1800);
  await loadSettings();
  applyTranslations();
  applyStaticInfo();
  await loadCategories();
  await loadPortfolio();
  await loadBestWork();
  await loadVideoShowcase();
  await loadPricing();
  await loadWhyHire();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  await percentDone;
  clearTimeout(safetyTimeout);
  hideSplash();
});
