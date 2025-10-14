const photo = document.querySelector('.intro--foto');

const body = document.querySelector('body');

const scrolledPhoto = () => {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    photo.style.transform = `translateX(-${scrollY.toFixed(1)}px)`;

    let value = scrollY / 100 / 7;

    if (scrollY === 0) {
      photo.style.opacity = '1';
      return;
    } else {
      photo.style.opacity = `${value.toFixed(1)}`;
    }
  });
};

scrolledPhoto();
