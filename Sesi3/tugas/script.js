const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('change', function() {
  if (this.checked) {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
});