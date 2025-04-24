function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector('.change-color');
const spanElem = document.querySelector('.color');
btnElem.addEventListener('click', handleBtnClick);
function handleBtnClick(e) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanElem.textContent = randomColor;
}
