const modeToggle = document.getElementById('modeToggle');

function DarkMode(event) {
  event.preventDefault();
  document.documentElement.classList.toggle('dark-theme');
}

modeToggle.addEventListener('click', DarkMode);
