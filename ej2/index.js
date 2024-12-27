// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const div1 = document.createElement("div");
document.body.appendChild(div1)



// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement("div");
const p = document.createElement("p")

divP.appendChild(p)
document.body.appendChild(divP)


// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

const div6 = document.createElement("div");

for(i=0; i < 6; i++){
    let text = document.createTextNode(`p número ${i}`)
    let p = document.createElement("p")
    p.appendChild(text)
    div6.appendChild(p)

}

// padre.insertBefore(div6, e);
document.body.appendChild(div6);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const p1 = document.createElement("p")
const text = document.createTextNode("Soy dinámico!")
p1.appendChild(text)
document.body.appendChild(p1)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here")
h2.textContent = "Wubba Lubba dub dub"

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul")

for(const app of apps){
    const li = document.createElement("li")
    const text = document.createTextNode(app)
    li.appendChild(text)
    ul.appendChild(li)
}

document.body.appendChild(ul)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const deleteElem = document.querySelectorAll(".fn-remove-me")
removeList = [...deleteElem]
removeList.map(e => e.remove())



// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const divM = document.querySelector("div")
divM.insertAdjacentHTML("afterend", "<p>Voy en medio!</p>");
// const padre = divM.parentNode
// document.padre.insertBefore(pMedio, divM);


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const divD = document.querySelectorAll("div.fn-insert-here")
divD.forEach(div => div.innerHTML ="<p>Voy dentro!</p>")