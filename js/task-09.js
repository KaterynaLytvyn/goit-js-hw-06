function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.body
const buttonElement = document.querySelector('.change-color')
const spanElement = document.querySelector('.color')

buttonElement.addEventListener("click", onClick)

function onClick() {
  bodyElement.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = bodyElement.style.backgroundColor;
}

