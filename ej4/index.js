// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const button = document.createElement("button")
button.id = "btnToClick"
button.textContent = "Info evento click"
document.body.appendChild(button)

button.addEventListener("click", (e) => console.log(e))

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = document.querySelector(".focus")

focusInput.addEventListener("focus", () => console.log(focusInput.value))

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputElem = document.querySelector(".value")

inputElem.addEventListener("input", () => console.log(inputElem.value))