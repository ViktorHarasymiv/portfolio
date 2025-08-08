const photoElement = document.querySelectorAll('.cell');

photoElement.forEach(cell => {
  cell.addEventListener('mousemove', () => {
    const randomIndex = Math.floor(Math.random() * photoElement.length);
    const randomCell = photoElement[randomIndex];
    randomCell.style.backgroundColor = 'transparent';
    randomCell.style.borderColor = 'transparent';
  });
});
