const refs = {
  body:document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
}

function chanceRandomColor () {
  const currentColor = getRandomHexColor();
  refs.color.textContent = currentColor;
  refs.body.style.background = currentColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.changeColorBtn.addEventListener("click", chanceRandomColor);

