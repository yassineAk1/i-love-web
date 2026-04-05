const btn = document.getElementById('theme-toggle');
let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

btn.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  document.body.classList.toggle('light', !isDark);
  btn.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
});
