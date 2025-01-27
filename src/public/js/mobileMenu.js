'use strict';


function openModal() {

    const menuButton = document.querySelector('.ham4 ');
    const activePanel = document.querySelector('.header_modal--navigation');
    
    menuButton.classList.toggle('active');
    activePanel.classList.toggle('is-visible');
    
  }