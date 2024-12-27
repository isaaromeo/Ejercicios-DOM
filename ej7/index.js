// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div 
// de html con el atributo data-function="printHere".

//Bonus: cuando se haga hover sobre un elemento de la lista aparecerá la imagen asociada al place

const places = [
    { name:"Gondor", img: "https://thetolkien.forum/wiki-asset/?pid=383&d=1587990587&x=756"},
    { name: "Mordor", img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/ROTK_eye_of_sauron-Cropped.jpg?q=50&fit=crop&w=825&dpr=1.5"},
    { name: "Rivendel", img: "https://images5.alphacoders.com/614/thumb-1920-614690.jpg"},
    { name: "La Comarca", img: "https://indigomusic.com/wp-content/uploads/2024/08/unnamed-76-1024x576.png"},
    { name: "Nümenor", img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/Rings-of-Power-Ep-3-arrival-in-Numenor.jpg?q=50&fit=crop&w=825&dpr=1.5"}
]
const div = document.querySelector("[data-function='printHere']")

const ul = document.createElement("ul")

for(const place of places){

    const li = document.createElement("li")
    li.textContent = place.name

    const img = document.createElement("img")
    img.src = place.img
    img.alt = place.name
    img.classList.add("no-show")

    li.addEventListener("mouseover", () => img.classList.toggle("no-show"))

    ul.appendChild(li)
    ul.appendChild(img)


}

div.appendChild(ul)
