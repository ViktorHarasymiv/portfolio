'use strict';


function openModal() {

    const menuButton = document.querySelector('.ham4 ');
    const activePanel = document.querySelector('.header_navigation');
    
    activePanel.classList.toggle('is-visible');
    menuButton.classList.toggle('active');
    
  }