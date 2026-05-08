/* ============================================================
   CHEMICAL GUYS BAHRAIN — MAIN JS
   ============================================================ */

'use strict';

/* ── DATA ────────────────────────────────────────────────── */
const PRICES = {
  S: { base:35, c6:40, c12:50, c24:65 },
  M: { base:45, c6:50, c12:60, c24:75 },
  L: { base:55, c6:60, c12:70, c24:85 }
};

const STRINGS = {
  ar: {
    nav_services:   'الخدمات',
    nav_pricing:    'الأسعار',
    nav_protection: 'الحماية',
    nav_work:       'أعمالنا',
    nav_visit:      'زيارة',
    nav_book:       'احجز الآن',
    lang_toggle:    'English',
    status_open:    'مفتوح الآن',
    status_break:   'استراحة · يفتح 3م',
    status_closed:  'مغلق · يفتح 8ص',
    hero_line1:     'مصممة',
    hero_line2:     'للبحرين',
    hero_line3:     'للطلاء.',
    hero_lede:      'الموزع الرسمي لـ Chemical Guys في البحرين. تلميع احترافي، طلاء سيراميك، حماية PPF، وعازل حراري في التبلي.',
    book_cta:       'ابدأ الحجز',
    prices_cta:     'شاهد الأسعار',
    tel_exp:        'سنوات الخبرة',
    tel_services:   'خدمات',
    tel_ceramic:    'ضمان سيراميك',
    tel_heat:       'عزل حراري',
    services_head:  'أربع خدمات. / محترفة.',
    svc1_title:     'باقة التلميع',
    svc1_blurb:     'غسيل عميق خارجي وداخلي، تنظيف بالبخار، تلميع 4 مراحل، شمع طبيعي، واستعادة المصابيح.',
    svc2_title:     'طلاء سيراميك',
    svc2_blurb:     'طبقة نانو سيراميك توفر حماية طويلة الأمد، لمعة فائقة، ومقاومة للخدوش والأوساخ.',
    svc3_title:     'حماية الطلاء PPF',
    svc3_blurb:     'فيلم حماية 8.5 ميل للسطح الكامل أو الواجهة الأمامية. شفاء ذاتي، مقاوم للصدمات، بشهادة فحص.',
    svc4_title:     'العازل الحراري',
    svc4_blurb:     'فيلم أمريكي يعزل 90% من الحرارة. سماكة 2 ملم، طبقتان، ضمان 5 سنوات، يشمل الزجاج الأمامي.',
    cfg_head:       'سعر / باقتك.',
    cfg_label:      'المجموع المُهيَّأ',
    cfg_size_label: 'حجم المركبة',
    cfg_tier_label: 'مستوى السيراميك',
    cfg_book:       'احجز هذه الباقة',
    cfg_wa:         'اسأل على واتساب',
    s_label:        'صغير',
    m_label:        'متوسط',
    l_label:        'كبير',
    s_eg:           'سيدان · هاتشباك',
    m_eg:           'SUV · كروس أوفر',
    l_eg:           '7 مقاعد · بيك أب',
    base_label:     'الباقة الأساسية',
    c6_label:       '+6 شهور سيراميك',
    c12_label:      '+سيراميك سنة',
    c24_label:      '+سيراميك سنتين',
    ppf_head:       'اسحب لترى / ما يوقفه PPF.',
    ppf_before:     'بدون PPF',
    ppf_after:      'مع PPF · 8.5 ميل',
    heat_head:      'فيلم أمريكي. / 90% عزل.',
    quote_text:     '"نعامل كل سيارة كأنها الوحيدة التي نسلّمها اليوم."',
    quote_attr:     '— الفريق في التبلي',
    gallery_head:   'عشرون سيارة. / بلا صور مخزون.',
    visit_head:     'التبلي. / مقابل وكالة تويوتا.',
    modal_step:     'الخطوة',
    modal_of:       'من',
    booking_title:  'حجز',
    step1_title:    'اختر الخدمة',
    step2_title:    'تفاصيل المركبة',
    step3_title:    'بياناتك والموعد',
    step4_title:    'تأكيد الحجز',
    btn_next:       'التالي →',
    btn_back:       '← رجوع',
    btn_send_wa:    'أرسل عبر واتساب →',
    deposit_title:  'سياسة الإيداع',
    deposit_text:   'مطلوب دفعة مقدمة لتأكيد الحجز. الدفعة المقدمة غير قابلة للاسترداد. يمكن التأجيل حتى يومين قبل الموعد.',
    field_name:     'الاسم الكامل',
    field_phone:    'رقم الهاتف',
    field_make:     'الماركة',
    field_model:    'الموديل',
    field_notes:    'ملاحظات (اختياري)',
    est_total:      'المجموع المقدّر',
  },
  en: {
    nav_services:   'Services',
    nav_pricing:    'Pricing',
    nav_protection: 'Protection',
    nav_work:       'Our Work',
    nav_visit:      'Visit',
    nav_book:       'Book Now',
    lang_toggle:    'العربية',
    status_open:    'Open Now',
    status_break:   'Break · Opens 3 PM',
    status_closed:  'Closed · Opens 8 AM',
    hero_line1:     'BUILT FOR',
    hero_line2:     'BAHRAIN',
    hero_line3:     'PAINT.',
    hero_lede:      'Official Chemical Guys distributor in Bahrain. Professional detailing, nano ceramic, PPF, and heat insulation film in Tubli.',
    book_cta:       'START A BOOKING →',
    prices_cta:     'SEE PRICES ↓',
    tel_exp:        'EXPERIENCE',
    tel_services:   'SERVICE LINES',
    tel_ceramic:    'CERAMIC WARRANTY',
    tel_heat:       'HEAT REJECTION',
    services_head:  'FOUR JOBS. / DONE PROPERLY.',
    svc1_title:     'DETAILING PACKAGE',
    svc1_blurb:     'Deep exterior + interior wash, steam clean, 4-stage polish, natural wax, engine bay, headlight restoration.',
    svc2_title:     'NANO CERAMIC',
    svc2_blurb:     'Professional-grade nano ceramic coating. Long-term protection, extreme gloss, hydrophobic, scratch-resistant surface.',
    svc3_title:     'PAINT PROTECTION',
    svc3_blurb:     '8.5 mil PPF for full or front section. Self-healing, impact and scratch resistant. Inspection certificate included.',
    svc4_title:     'HEAT INSULATION',
    svc4_blurb:     'American film. 90% heat rejection. 2mm thick, 2 layers, 5-year warranty. All sizes including front windshield.',
    cfg_head:       'CONFIGURE YOUR / PACKAGE.',
    cfg_label:      'CONFIGURED TOTAL',
    cfg_size_label: 'VEHICLE SIZE',
    cfg_tier_label: 'CERAMIC TIER',
    cfg_book:       'BOOK THIS PACKAGE →',
    cfg_wa:         'ASK ON WHATSAPP',
    s_label:        'SMALL',
    m_label:        'MEDIUM',
    l_label:        'LARGE',
    s_eg:           'Sedan · Hatchback',
    m_eg:           'SUV · Crossover',
    l_eg:           '7-Seater · Pickup',
    base_label:     'BASE PACKAGE',
    c6_label:       '+6 MO CERAMIC',
    c12_label:      '+1 YR CERAMIC',
    c24_label:      '+2 YR CERAMIC',
    ppf_head:       'DRAG TO SEE / WHAT PPF STOPS.',
    ppf_before:     'B · WITHOUT PPF',
    ppf_after:      'A · WITH PPF · 8.5 MIL',
    heat_head:      'AMERICAN FILM. / 90% REJECTION.',
    quote_text:     '"WE TREAT EVERY CAR LIKE THE ONLY ONE WE HAVE TO DELIVER TODAY."',
    quote_attr:     '— THE TEAM IN TUBLI',
    gallery_head:   'TWENTY CARS. / NO STOCK PHOTOS.',
    visit_head:     'TUBLI. / OPPOSITE TOYOTA PLAZA.',
    modal_step:     'STEP',
    modal_of:       'OF',
    booking_title:  'BOOKING',
    step1_title:    'SELECT SERVICE',
    step2_title:    'VEHICLE DETAILS',
    step3_title:    'YOUR DETAILS & DATE',
    step4_title:    'CONFIRM BOOKING',
    btn_next:       'NEXT →',
    btn_back:       '← BACK',
    btn_send_wa:    'SEND TO WHATSAPP →',
    deposit_title:  'DEPOSIT POLICY',
    deposit_text:   'A deposit is required to confirm your booking. Deposits are non-refundable. You may postpone up to 2 days before your appointment.',
    field_name:     'FULL NAME',
    field_phone:    'PHONE NUMBER',
    field_make:     'CAR MAKE',
    field_model:    'MODEL',
    field_notes:    'NOTES (OPTIONAL)',
    est_total:      'EST. TOTAL',
  }
};

/* ── STATE ───────────────────────────────────────────────── */
let currentLang = localStorage.getItem('cgbh-lang') || 'ar';
let cfgSize = 'M';
let cfgTier = 'base';
let bookingStep = 1;
let selectedService = null;
let selectedDate = null;
let selectedTime = null;
let bookingSize = 'M';
let bookingTier = 'base';

/* ── HELPERS ─────────────────────────────────────────────── */
function t(key) { return STRINGS[currentLang]?.[key] ?? key; }
function wa(msg) { return 'https://wa.me/97333934433?text=' + encodeURIComponent(msg); }

/* ── SHOP STATUS ─────────────────────────────────────────── */
function getShopStatus() {
  const now = new Date();
  const mins = now.getHours() * 60 + now.getMinutes();
  if (mins >= 480 && mins < 720)  return { state: 'open',   label: t('status_open') };
  if (mins >= 720 && mins < 900)  return { state: 'break',  label: t('status_break') };
  if (mins >= 900 && mins < 1260) return { state: 'open',   label: t('status_open') };
  return { state: 'closed', label: t('status_closed') };
}

function updateShopStatus() {
  const { state, label } = getShopStatus();
  document.querySelectorAll('.shop-status').forEach(el => {
    el.className = 'status-pill shop-status is-' + state;
    const txt = el.querySelector('.status-text');
    if (txt) txt.textContent = label;
  });
}

setInterval(updateShopStatus, 30000);

/* ── LANG TOGGLE ─────────────────────────────────────────── */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cgbh-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (STRINGS[lang]?.[key]) el.textContent = STRINGS[lang][key];
  });

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = t('lang_toggle');

  const mLangBtn = document.getElementById('mobile-lang-btn');
  if (mLangBtn) mLangBtn.textContent = t('lang_toggle');

  document.querySelectorAll('.marquee-track').forEach(track => {
    if (lang === 'ar') {
      track.style.animation = 'marq-rtl 38s linear infinite';
    } else {
      track.style.animation = 'marq 38s linear infinite';
    }
  });

  updateShopStatus();
  updateConfigurator();
}

/* ── PRICE CONFIGURATOR ──────────────────────────────────── */
function updateConfigurator() {
  const price = PRICES[cfgSize][cfgTier];
  const totalEl = document.getElementById('cfg-total-display');
  if (totalEl) {
    totalEl.textContent = price + ' BHD';
    totalEl.style.transform = 'scale(1.05)';
    setTimeout(() => { totalEl.style.transform = 'scale(1)'; }, 150);
  }

  const sizeRowEl = document.getElementById('cfg-size-row');
  const tierRowEl = document.getElementById('cfg-tier-row');
  const sizeLabels = { S: t('s_label'), M: t('m_label'), L: t('l_label') };
  const tierLabels = { base: t('base_label'), c6: t('c6_label'), c12: t('c12_label'), c24: t('c24_label') };
  if (sizeRowEl) sizeRowEl.textContent = sizeLabels[cfgSize];
  if (tierRowEl) tierRowEl.textContent = tierLabels[cfgTier];

  const waLink = document.getElementById('cfg-wa-link');
  if (waLink) {
    const msg = currentLang === 'ar'
      ? `مرحباً، أود حجز ${tierLabels[cfgTier]} لسيارة ${sizeLabels[cfgSize]}. السعر المقدر: ${price} BHD.`
      : `Hi, I'd like to book the ${tierLabels[cfgTier]} for a ${sizeLabels[cfgSize]} vehicle. Est. price: ${price} BHD.`;
    waLink.href = wa(msg);
  }

  const bookBtn = document.getElementById('cfg-book-btn');
  if (bookBtn) {
    bookBtn.onclick = () => openBookingModal(1, 'detailing');
  }

  document.querySelectorAll('[data-size-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sizeBtn === cfgSize);
  });
  document.querySelectorAll('[data-tier-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tierBtn === cfgTier);
    const priceEl = btn.querySelector('.toggle-price');
    if (priceEl) priceEl.textContent = PRICES[cfgSize][btn.dataset.tierBtn] + ' BHD';
  });
}

/* ── PPF SLIDER ──────────────────────────────────────────── */
function initPPFSlider() {
  const wrap = document.getElementById('ppf-slider');
  if (!wrap) return;
  const after = document.getElementById('ppf-after');
  const handle = document.getElementById('ppf-handle');
  let dragging = false;
  let pos = 50;

  function setPos(clientX) {
    const rect = wrap.getBoundingClientRect();
    pos = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    after.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    handle.style.left = pos + '%';
  }

  wrap.addEventListener('mousedown', e => { dragging = true; setPos(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  window.addEventListener('mouseup', () => { dragging = false; });

  wrap.addEventListener('touchstart', e => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
}

/* ── NAV SCROLL ──────────────────────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ── FLOATING DOCK ───────────────────────────────────────── */
function initFloatingDock() {
  const dock = document.getElementById('floating-dock');
  if (!dock) return;
  window.addEventListener('scroll', () => {
    dock.classList.toggle('visible', window.scrollY > 600);
  });
}

/* ── HAMBURGER ───────────────────────────────────────────── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const overlay = document.getElementById('mobile-nav');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  overlay.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── DATE PICKER ─────────────────────────────────────────── */
function buildDatePicker() {
  const container = document.getElementById('date-picker');
  if (!container) return;
  container.innerHTML = '';
  const days = currentLang === 'ar'
    ? ['أحد','إثن','ثلا','أرب','خمي','جمع','سبت']
    : ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const months = currentLang === 'ar'
    ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
    : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const btn = document.createElement('button');
    btn.className = 'date-btn';
    btn.type = 'button';
    btn.innerHTML = `<span class="day-name">${days[d.getDay()]}</span><span class="day-num">${d.getDate()}</span><span class="day-name">${months[d.getMonth()]}</span>`;
    const iso = d.toISOString().split('T')[0];
    btn.dataset.date = iso;
    btn.addEventListener('click', () => {
      selectedDate = iso;
      container.querySelectorAll('.date-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    container.appendChild(btn);
  }
}

/* ── BOOKING MODAL ───────────────────────────────────────── */
function openBookingModal(step = 1, serviceId = null) {
  bookingStep = step;
  if (serviceId) {
    selectedService = serviceId;
    document.querySelectorAll('.service-pick-card').forEach(c => {
      c.classList.toggle('selected', c.dataset.service === serviceId);
    });
  }
  const overlay = document.getElementById('booking-overlay');
  if (overlay) { overlay.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  buildDatePicker();
  renderBookingStep();
}

function closeBookingModal() {
  const overlay = document.getElementById('booking-overlay');
  if (overlay) { overlay.style.display = 'none'; document.body.style.overflow = ''; }
}

function renderBookingStep() {
  document.querySelectorAll('.modal-step').forEach((el, i) => {
    el.classList.toggle('active', i + 1 === bookingStep);
  });

  const stepLabel = document.getElementById('modal-step-label');
  const backBtn   = document.getElementById('modal-back');
  const nextBtn   = document.getElementById('modal-next');

  const stepTitles = [t('step1_title'), t('step2_title'), t('step3_title'), t('step4_title')];
  if (stepLabel) stepLabel.textContent = `${t('modal_step')} 0${bookingStep} ${t('modal_of')} 04 — ${stepTitles[bookingStep-1]}`;

  if (backBtn) backBtn.style.display = bookingStep === 1 ? 'none' : '';
  if (nextBtn) {
    if (bookingStep === 4) {
      nextBtn.textContent = t('btn_send_wa');
      nextBtn.onclick = sendToWhatsApp;
    } else {
      nextBtn.textContent = t('btn_next');
      nextBtn.onclick = advanceStep;
    }
  }

  if (bookingStep === 4) buildConfirmStep();
  updateModalPrice();
}

function advanceStep() {
  if (bookingStep === 1 && !selectedService) return;
  if (bookingStep < 4) { bookingStep++; renderBookingStep(); }
}

function retreatStep() {
  if (bookingStep > 1) { bookingStep--; renderBookingStep(); }
}

function updateModalPrice() {
  const priceEl = document.getElementById('modal-price-display');
  if (!priceEl) return;

  const servicePrices = { detailing: PRICES[bookingSize][bookingTier], ceramic: PRICES[bookingSize][bookingTier], ppf: 25, heat: 60 };
  if (selectedService && servicePrices[selectedService]) {
    priceEl.textContent = servicePrices[selectedService] + ' BHD';
  } else {
    priceEl.textContent = '— BHD';
  }
}

function buildConfirmStep() {
  const container = document.getElementById('confirm-rows');
  if (!container) return;
  const nameEl   = document.getElementById('book-name');
  const phoneEl  = document.getElementById('book-phone');
  const makeEl   = document.getElementById('book-make');
  const modelEl  = document.getElementById('book-model');
  const notesEl  = document.getElementById('book-notes');

  const svcNames = { detailing: t('svc1_title'), ceramic: t('svc2_title'), ppf: t('svc3_title'), heat: t('svc4_title') };
  const sizeNames = { S: t('s_label'), M: t('m_label'), L: t('l_label') };
  const tierNames = { base: t('base_label'), c6: t('c6_label'), c12: t('c12_label'), c24: t('c24_label') };

  const rows = [
    [t('nav_services'), svcNames[selectedService] || '—'],
    ['SIZE', sizeNames[bookingSize]],
    ['CERAMIC', tierNames[bookingTier]],
    [t('field_name'),  nameEl?.value  || '—'],
    [t('field_phone'), phoneEl?.value || '—'],
    [currentLang==='ar'?'المركبة':'VEHICLE', ((makeEl?.value||'') + ' ' + (modelEl?.value||'')).trim() || '—'],
    [currentLang==='ar'?'التاريخ':'DATE', selectedDate || '—'],
    [currentLang==='ar'?'الوقت':'TIME',  selectedTime || '—'],
    ...(notesEl?.value ? [[t('field_notes'), notesEl.value]] : []),
  ];

  container.innerHTML = rows.map(([k,v]) => `
    <div class="confirm-row">
      <span class="confirm-row-key">${k}</span>
      <span class="confirm-row-val">${v}</span>
    </div>`).join('');
}

function sendToWhatsApp() {
  const nameEl  = document.getElementById('book-name');
  const phoneEl = document.getElementById('book-phone');
  const makeEl  = document.getElementById('book-make');
  const modelEl = document.getElementById('book-model');
  const notesEl = document.getElementById('book-notes');

  const svcNames = { detailing: t('svc1_title'), ceramic: t('svc2_title'), ppf: t('svc3_title'), heat: t('svc4_title') };
  const sizeNames = { S: t('s_label'), M: t('m_label'), L: t('l_label') };
  const tierNames = { base: t('base_label'), c6: t('c6_label'), c12: t('c12_label'), c24: t('c24_label') };
  const servicePrices = { detailing: PRICES[bookingSize][bookingTier], ceramic: PRICES[bookingSize][bookingTier], ppf: 25, heat: 60 };

  let msg;
  if (currentLang === 'ar') {
    msg = `مرحباً، أود حجز موعد:\n\nالخدمة: ${svcNames[selectedService]}\nالمركبة: ${makeEl?.value||''} ${modelEl?.value||''}\nالحجم: ${sizeNames[bookingSize]}\nالسيراميك: ${tierNames[bookingTier]}\nالاسم: ${nameEl?.value||''}\nالهاتف: ${phoneEl?.value||''}\nالتاريخ: ${selectedDate||''}\nالوقت: ${selectedTime||''}\nالسعر المقدر: ${servicePrices[selectedService]||'—'} BHD\n${notesEl?.value ? 'ملاحظات: ' + notesEl.value : ''}`;
  } else {
    msg = `Hi, I'd like to book an appointment:\n\nService: ${svcNames[selectedService]}\nVehicle: ${makeEl?.value||''} ${modelEl?.value||''}\nSize: ${sizeNames[bookingSize]}\nCeramic: ${tierNames[bookingTier]}\nName: ${nameEl?.value||''}\nPhone: ${phoneEl?.value||''}\nDate: ${selectedDate||''}\nTime: ${selectedTime||''}\nEst. Price: ${servicePrices[selectedService]||'—'} BHD\n${notesEl?.value ? 'Notes: ' + notesEl.value : ''}`;
  }

  window.open(wa(msg), '_blank');
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Footer year */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Nav scroll */
  initNavScroll();

  /* Hamburger */
  initHamburger();

  /* Floating dock */
  initFloatingDock();

  /* Scroll reveal */
  initReveal();

  /* PPF slider */
  initPPFSlider();

  /* Shop status initial */
  updateShopStatus();

  /* Lang: apply stored preference */
  setLang(currentLang);

  /* Lang toggle buttons */
  document.getElementById('lang-btn')?.addEventListener('click', () => {
    setLang(currentLang === 'ar' ? 'en' : 'ar');
  });
  document.getElementById('mobile-lang-btn')?.addEventListener('click', () => {
    setLang(currentLang === 'ar' ? 'en' : 'ar');
  });

  /* Price configurator size buttons */
  document.querySelectorAll('[data-size-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      cfgSize = btn.dataset.sizeBtn;
      updateConfigurator();
    });
  });

  /* Price configurator tier buttons */
  document.querySelectorAll('[data-tier-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      cfgTier = btn.dataset.tierBtn;
      updateConfigurator();
    });
  });

  /* Initial configurator render */
  updateConfigurator();

  /* BOOK buttons */
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal(1, btn.dataset.service || null));
  });

  /* Modal close */
  document.getElementById('modal-close-btn')?.addEventListener('click', closeBookingModal);
  document.getElementById('booking-overlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeBookingModal();
  });

  /* Modal nav buttons */
  document.getElementById('modal-back')?.addEventListener('click', retreatStep);
  document.getElementById('modal-next')?.addEventListener('click', advanceStep);

  /* Service selection in modal */
  document.querySelectorAll('.service-pick-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedService = card.dataset.service;
      document.querySelectorAll('.service-pick-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      updateModalPrice();
    });
  });

  /* Booking size/tier in modal */
  document.querySelectorAll('[data-book-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      bookingSize = btn.dataset.bookSize;
      document.querySelectorAll('[data-book-size]').forEach(b => b.classList.toggle('active', b === btn));
      updateModalPrice();
    });
  });
  document.querySelectorAll('[data-book-tier]').forEach(btn => {
    btn.addEventListener('click', () => {
      bookingTier = btn.dataset.bookTier;
      document.querySelectorAll('[data-book-tier]').forEach(b => b.classList.toggle('active', b === btn));
      updateModalPrice();
    });
  });

  /* Time selection */
  document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedTime = btn.dataset.time;
      document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  /* Floating dock buttons */
  document.getElementById('dock-book-btn')?.addEventListener('click', () => openBookingModal());
  document.getElementById('dock-wa-btn')?.addEventListener('click', () => {
    const msg = currentLang === 'ar' ? 'مرحباً، أود الاستفسار عن خدماتكم' : "Hi, I'd like to inquire about your services";
    window.open(wa(msg), '_blank');
  });

  /* Service cards click → booking */
  document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openBookingModal(1, card.dataset.service));
  });
});
