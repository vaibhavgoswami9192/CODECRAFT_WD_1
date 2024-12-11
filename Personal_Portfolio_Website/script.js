document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Set the default theme based on saved preference
  const savedTheme = localStorage.getItem('theme') || 'light-mode';
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';

  // Toggle the theme on button click
  themeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
          body.classList.replace('dark-mode', 'light-mode');
          localStorage.setItem('theme', 'light-mode'); // Save preference
          themeToggle.textContent = '🌙';
      } else {
          body.classList.replace('light-mode', 'dark-mode');
          localStorage.setItem('theme', 'dark-mode'); // Save preference
          themeToggle.textContent = '☀️';
      }
  });
});
