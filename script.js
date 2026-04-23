/* ============================================
   PORTFOLIO — script.js
   Interactions, animations, cursor, scroll
   ============================================ */

// ---------- CUSTOM CURSOR ----------
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
// ---------- THEME TOGGLE ----------
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor scale on hover
document.querySelectorAll('a, button, .project-card, .service-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
    cursor.style.borderColor = 'var(--accent-2)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.borderColor = 'var(--accent)';
  });
});

// ---------- NAV SCROLL EFFECT ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---------- MOBILE MENU ----------
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  hamburger.style.opacity = menuOpen ? '0.5' : '1';
});

function closeMobile() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  hamburger.style.opacity = '1';
}

// ---------- SCROLL FADE-IN ANIMATIONS ----------
const fadeEls = document.querySelectorAll(
  '.hero-badge, .hero-headline .line, .hero-sub, .hero-actions, .hero-stats, ' +
  '.section-tag, .section-title, .project-card, .service-item, ' +
  '.testimonial-card, .about-left > *, .about-right > *, .contact-method'
);

fadeEls.forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = (i % 5) * 0.08 + 's';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.12
});

fadeEls.forEach(el => observer.observe(el));

// ---------- PROJECT CARD ACCENT COLOR ----------
document.querySelectorAll('.project-card').forEach(card => {
  const color = card.getAttribute('data-color');
  if (color) card.style.setProperty('--card-accent', color);
});

// ---------- CONTACT FORM ----------
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = '✦ Message sent! I\'ll be in touch within 24 hours.';
  e.target.reset();
  setTimeout(() => { note.textContent = ''; }, 5000);
  // 👆 Replace with your real form handler (Formspree, EmailJS, etc.)
  // Example with Formspree:
  // fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(e.target) })
}

// ---------- SMOOTH SECTION REVEAL ON LOAD ----------
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  setTimeout(() => { document.body.style.opacity = '1'; }, 50);
});

// ---------- TICKER PAUSE ON HOVER ----------
const ticker = document.querySelector('.ticker');
if (ticker) {
  ticker.addEventListener('mouseenter', () => { ticker.style.animationPlayState = 'paused'; });
  ticker.addEventListener('mouseleave', () => { ticker.style.animationPlayState = 'running'; });
}
