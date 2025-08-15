const menuButton = document.querySelector('.ham4');
const activePanel = document.querySelector('.header_navigation');

function openModal() {
  activePanel.classList.toggle('is-visible');
  menuButton.classList.toggle('active');
}

document.querySelector('.ham4').addEventListener('click', openModal);
