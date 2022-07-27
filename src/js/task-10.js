function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const { boxes, number, create, destroy } = {
  boxes: document.querySelector("#boxes"),
  number: document.querySelector(`[type="number"]`),
  create: document.querySelector(`[data-create]`),
 destroy: document.querySelector(`[data-destroy]`),
}
function destroyEl() { 

}
