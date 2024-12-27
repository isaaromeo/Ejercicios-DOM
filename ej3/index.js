// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul")
for(const country of countries){
    let li = document.createElement("li")
    li.textContent = country
    ul.appendChild(li)
}

document.body.appendChild(ul)
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const deleteElem = document.getElementsByClassName("fn-remove-me")
const deleteList = [... deleteElem]
deleteList.forEach(e => e.remove())

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divP = document.querySelector("[data-function = 'printHere']")

const ulP = document.createElement("ul")
for(const car of cars){
    let li = document.createElement("li")
    li.textContent = car
    ulP.appendChild(li)
}
divP.appendChild(ulP)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const imgs = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(const img of imgs){
    let divImg = document.createElement("div")
    let h4 = document.createElement("h4")
    let image = document.createElement("img")

    divImg.classList.add("divImg")

    h4.textContent = img.title
    image.src = img.imgUrl
    image.alt = "random image"

    divImg.appendChild(h4)
    divImg.appendChild(image)
    document.body.appendChild(divImg)

}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const button = document.createElement("button")
button.textContent = "Elimina la última foto"
document.body.appendChild(button)

button.addEventListener("click", () => {
    const deleteDiv = document.querySelectorAll(".divImg")
    divList = [...deleteDiv]
    divList[divList.length -1].remove()

})


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const imgDivs = document.querySelectorAll(".divImg")
const divList = [...imgDivs]

for(const div of divList){
    const button = document.createElement("button")
    button.textContent = "Eliminar foto"
    div.appendChild(button)

    button.addEventListener("click", () => {
    div.remove()

})
}
