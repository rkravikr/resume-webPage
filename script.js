// Simple fade-in animation for header
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header h1');
  if (header) {
    header.style.opacity = '0';
    header.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
      header.style.opacity = '1';
    }, 100);
  }
});
