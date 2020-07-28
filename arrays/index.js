// // //Si necesito una variable que almacene más de un
// // //valor

// // let a = [5, 4, 12 , 4, 234, 23,5, 23245, 2345645, 256345, 2345, 23457, 4, 5, 6, 7];
// // console.log(a);

// // let i = 0;
// // console.log("Longitud:", a.length);
// // while ( i < a.length ) {
// //     console.log(a[i]);
// //     i++;
// // }
// // console.log("-1", a[-1]);
// // console.log("a.length -1 (el último)", a[a.length - 1]);
// // //LIFO Last In First Out
// // console.log(a);
// // a.push(28, 3, 4, 5, 6);
// // console.log(a);
// // a.pop();
// // console.log(a);

// // //FIFO First In First Out
// // console.log(a);
// // a.unshift(7, 3, 4, 5, 6);
// // a.shift();
// // a.sort();
// // a.splice(3, 2)

// // /*
// //     Array METHODS

// //     Array.length
// //     Array.push(4, 5, 6)     //La nueva longitud del array
// //     Array.pop()             //Los elementos eliminados
// //     Array.unshift(4, 5, 6)  //Los elementos eliminados
// //     Array.shift()           //Los elementos eliminados
// //     Array.sort()            //El array ordenado
// //     Array.splice()          //Los elementos eliminados

// //     Array.map
// //     Array.filter
// //     Array.reduce
// // */

// // let a = [[4, 5], 5];
// // let array2 = a[0];
// // a[0].length

// // if () {

// // } else if () {
// // } else if () {

// // } else {

// // }

// let num1 = 2;
// let arr = [9, 9, 9, 9, 12345678900987654321, 9, 2];
// console.log(arr);
// let position = 4;
// console.log(arr[position]);

// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

// let suma = 0;
// for (let i = 0; i < arr.length; i++) {
// 	suma += arr[i];
// }
// let i = 0;
// while (i < arr.length) {
// 	suma += arr[i];
// 	i++;
// }
// console.log(suma);

// arr.push(5);
// console.log(arr);

// let listaDeLaCompra = [];
// let continuar = true;
// while (continuar) {
// 	let input = prompt("¿Qué elemento quiere añadir?");
// 	if (input === "Nada más") continuar = false;
// 	else listaDeLaCompra.push(input);
// 	console.log(listaDeLaCompra);
// }

// function imprimirListaDeLaCompra(listaDeLaCompra) {
// 	let i = 0;
// 	while (i < listaDeLaCompra.length) {
// 		//1.- Patatas
// 		//2.- Cebolla
// 		console.log(i + 1 + ".- " + listaDeLaCompra[i]);
// 		i++;
// 	}
// }
// imprimirListaDeLaCompra(["Patatas", "Manzanas", "Pimientos"]);
// // listaDeLaCompra.pop();
// // listaDeLaCompra.push("Pipas");
// // listaDeLaCompra.shift();
// // listaDeLaCompra.unshift("Manzanilla", "Té");
// listaDeLaCompra.splice(2, 3);
// imprimirListaDeLaCompra(listaDeLaCompra);

// /*
//     ARRAY METHODS
//         Array.length
//             LIFO
//                 Array.push
//                 Array.pop
//             FIFO
//                 Array.unshift
//                 Array.shift
//         Array.splice
// */
// let array = ["Pepón", "Margarita", "Susana", "Pedro"];

// //["Nombre: Pepón", "Nombre: Margarita",...]

// function transform(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push("Nombre: " + array[i]);
//     }
//     return result;
// }

// console.log(transform(array));

let notas = [10, 9, 5, 4, 6, 7, 8, 9, 10];

console.log(notas.map((nota, i) => {
    return ("La nota " + i + " es: " + nota);
}));


let notasAprobadas = notas.filter((nota, i) => {
    return nota >= 5;
});

console.log([10, 10, 10, 10, 2, 2, 2, 2, 10, 3, 4, 5, 6, 6, 6, 7, 8, 10, 8].filter((nota, id, notas) => {
    for (let i = id + 1; i < notas.length; i++) {
        if (nota === notas[i])
            return false;
    }
    return true;
}));

console.log([...new Set(notas)]);



["1", "7", "11"].map(console.log);

let strings = ["Hola", "Que", "Tal", "Estás"]
console.log(strings.reduce((acum, string, id) => {
    return `${acum} ${string} Prueba`;
}));

strings.forEach((string) => {
    console.log(`El string es: ${string}`);
})
let Persona = {
    "Name": "Blanca",
    "Surname": "Pérez"
}
for (let value of strings) {
    console.log(value);
}




`El string es: ${string}` === "El string es: " + string;

`${acum} ${string} Prueba` === acum + " " + string + " Prueba";