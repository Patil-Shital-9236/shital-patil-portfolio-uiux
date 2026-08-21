// Shital Patil Portfolio UI/UX Showcase Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.9)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  console.log("👑 Shital Patil's Portfolio UI/UX Showcase Loaded!");
});
