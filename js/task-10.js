function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const { boxes, number, create, destroy } = {
  boxes: document.querySelector("#boxes"),
  number: document.querySelector(`[type="number"]`),
  create: document.querySelector(`[data-create]`),
  destroy: document.querySelector(`[data-destroy]`),
};
function destroyEl() { 
boxes.innerHTML = ""
}
function createBoxes(amount) { 
  let array = [];
  destroyEl()

  for (let i = 0; i < amount; i += 1) { 
    if (amount > Number(number.max)) { 
      return alert (`Введено значення ${amount} більше значення $ {Number(number.max)} `)
    }
    const element = document.createElement("div");
    element.style.background = getRandomHexColor();
    element.style.width = 30 + i * 10 + "px";
    element.style.height = 30 + i * 10 + "px";
    array.push(element);
  }
  boxes.append(...array);
}
create.addEventListener("click", () => createBoxes(Number(number.value)));
destroy.addEventListener("click", destroyEl);