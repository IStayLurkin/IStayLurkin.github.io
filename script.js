// ==========================================================================
// Theme Toggle & Preferences
// ==========================================================================
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'light') {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}

// Initial theme determination
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
applyTheme(initialTheme);

// Toggle click handler
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ==========================================================================
// Mobile Menu Toggle
// ==========================================================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ==========================================================================
// Dynamic Year
// ==========================================================================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
