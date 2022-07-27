const inputLength = document.querySelector("#validation-input");
function blurInput(add, remove) { 
    inputLength.classList.add(add);
    inputLength.classList.remove(remove);
}

inputLength.addEventListener("blur", () => {
    if (inputLength.value.length === Number(inputLength.getAttribute("data-length"))) {
        blurInput("valid", "invalid");
    } else {
        blurInput("invalid", "valid");
    }
});


// const input = document.getElementById("validation-input");

// function onBlur(add, remove) {
//   input.classList.add(add);
//   input.classList.remove(remove);
// }
// input.addEventListener("blur", () => {
//   if (input.value.length === Number(input.dataset.length)) {
//     onBlur("valid", "invalid");
//   } else {
//     onBlur("invalid", "valid");
//   }
// });