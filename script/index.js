const btn = document.getElementById('theme-toggle');
const root = document.documentElement;

let dark = matchMedia('(prefers-color-scheme: dark)').matches;

if (dark) {
  btn.textContent = '☀️ Light mode';
} else {
  btn.textContent = '🌙 Dark mode';
}

btn.addEventListener('click', function () {
  dark = !dark;

  if (dark) {
    root.style.colorScheme = 'dark';
    btn.textContent = '☀️ Light mode';
  } else {
    root.style.colorScheme = 'light';
    btn.textContent = '🌙 Dark mode';
  }
});
