const inputLength = document.querySelector("#validation-input");
function blurInput(add, remove) { 
    inputLength.classList.add(add);
    inputLength.classList.remove(remove);
}

inputLength.addEventListener("blur", () => {
    if (inputLength.value.length != Number(inputLength.getAttribute("data-length"))) {
        blurInput("invalid", "valid");
    } else {
        blurInput("valid", "invalid");
    }
});