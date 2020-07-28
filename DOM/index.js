/*
    DOM 
        Document Object Model
*/

let title = document.getElementById("title");
title.innerText = "<img src='' alt='Hola'>";
title.innerHTML = "<img src='' alt='Hola'>";
title.style.color = "red";

let rojo = document.getElementsByClassName("rojo");
for (let i = 0; i < rojo.length; i++) {
    rojo[i].style.color = "red";
    rojo[i].innerText = "soy rojo, " + i;
}
console.log(rojo);
/*
    innerText       Modifica el texto de una etiqueta
*/


let paragraph = document.createElement("p");
paragraph.innerText = "Nací en JS";
title.appendChild(paragraph);



let input = prompt("Cuantos años tienes?");
let age = document.createElement("p");
age.innerText = "Tu edad es: " + input;
title.appendChild(age);



/*
        EVENTOS
*/

let clickDiv = document.getElementById("click");

// clickDiv.onclick = (event) => {
//     console.log(event.target);
//     event.target.style.color = "pink";
//     window.open("https://google.com");
//     console.log(event);
// }

let pepe = document.getElementById("form");

pepe.onkeyup = (event) => {
    console.log("El usuario ha pulsado: ", event.key);
    console.log("El valor del input es: ", event.target.value);
}



/*
    BOM
        Browser Object Model
*/