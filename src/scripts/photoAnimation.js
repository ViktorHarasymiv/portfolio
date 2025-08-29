const photo = document.querySelector('.intro--foto');

const body = document.querySelector('body');

const scrolledPhoto = () => {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    photo.style.transform = `translateX(-${scrollY.toFixed(1)}px`;

    let value = scrollY / 100 / 8;

    if (value.toFixed(1) !== 0) {
      photo.style.opacity = `${value.toFixed(1)}`;
      if (value.toFixed(1) == 0) {
        photo.style.opacity = '1';
      }
    }
  });
};

scrolledPhoto();
