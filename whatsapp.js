// ── WHATSAPP CONFIG FOR PACKAGES AND NAVIGATION (UPDATED NUMBER) ──
const TARGET_WA_NUMBER = '16624785739'; 

function redirectGeneralWhatsAppInquiry(message) {
  window.open('https://wa.me/' + TARGET_WA_NUMBER + '?text=' + encodeURIComponent(message), '_blank');
}

// ── ACCOMMODATION / SERVICE PACKAGES LISTENER ──
document.querySelectorAll('.btn-pkg').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const pkgName = this.dataset.package;
    const basePrice = this.dataset.price;
    const associatedSelectId = this.dataset.selectId;
    
    const dropdown = document.getElementById(associatedSelectId);
    const quantity = dropdown ? dropdown.value : 1;
    const totalCost = Number(basePrice) * Number(quantity);

    const msg =
      '🏆 *WORLD CUP 2026 LUXURY PACKAGE REQ*\n' +
      '────────────────────\n' +
      '📦 *PACKAGE PROFILE:* ' + pkgName + ' Accommodation\n' +
      '🔢 *TOTAL GUESTS:* ' + quantity + ' Traveler(s)\n' +
      '💰 *TOTAL VALUATION:* $' + totalCost.toLocaleString() + ' USD\n' +
      '────────────────────\n\n' +
      'Hi, I want to book this hospitality/hotel option setup. Please advise on booking slots and confirmation steps.';
    
    redirectGeneralWhatsAppInquiry(msg);
  });
});

// ── GENERAL NAVIGATION BUTTONS ──
const navBuyBtn = document.getElementById('navBuyBtn');
if (navBuyBtn) {
  navBuyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    redirectGeneralWhatsAppInquiry('🎟️ *WORLD CUP 2026 GENERAL PRE-ORDER REQ*\n\nHello, I am checking your listing index and would love to acquire official category seat allocations. Kindly drop more information.');
  });
}

const mobileNavBuyBtn = document.getElementById('mobileNavBuyBtn');
if (mobileNavBuyBtn) {
  mobileNavBuyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    redirectGeneralWhatsAppInquiry('🎟️ *WORLD CUP 2026 GENERAL PRE-ORDER REQ*\n\nHello, I am checking your listing index and would love to acquire official category seat allocations. Kindly drop more information.');
  });
}

// ── MARKETING BANNER LINK ──
const ctaBtn = document.getElementById('ctaWhatsapp');
if (ctaBtn) {
  ctaBtn.addEventListener('click', function (e) {
    e.preventDefault();
    redirectGeneralWhatsAppInquiry('🔥 *WORLD CUP 2026 SPECIAL DEAL RESERVATION*\n\nHello! I saw your featured banner layout online and want to reserve promo match tickets. Let me know which sections are open.');
  });
}

// ── FOOTER LINK ──
const footerWA = document.getElementById('footerWhatsapp');
if (footerWA) {
  footerWA.addEventListener('click', function (e) {
    e.preventDefault();
    redirectGeneralWhatsAppInquiry('👋 Hi, I need support with my ticket selection. Please guide me through checkout.');
  });
}

// ── FLOATING OVERLAY ICON ──
const floatBtn = document.getElementById('floatWA');
if (floatBtn) {
  floatBtn.addEventListener('click', function (e) {
    e.preventDefault();
    redirectGeneralWhatsAppInquiry('👋 Hello, I am currently on your checkout catalog. I need instant support regarding live match passes details.');
  });
}

// ── RESPONSIVE NAVIGATION MOBILE HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });
}

// ── NAVBAR SOLID INTERFACES ON VIEWPORT SCROLL ──
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10,13,18,0.98)';
    } else {
      navbar.style.background = 'rgba(10,13,18,0.92)';
    }
  }
});
