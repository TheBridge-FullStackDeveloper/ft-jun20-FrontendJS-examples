let nombres = ["Lina", "Ryan", "Marta", "Martín", "Bea", "Tafa"];
let edad = [20, 21, 22, 23, 24, 25];

console.log("Nombre: ", nombres[2], "Edad: ", edad[2]);

/*

    JSON
        JavaScript Object Notation

    Persona:
        Nombre
        Edad
        Altura
        Skills / Habilidades

*/

let persona = {
	nombre: "Martín",
	edad: 27,
	altura: 1.8,
	habilidades: ["Magics", "Paciencia", "huele mal"]
};
let propiedad = "altura";
console.log();
console.log(persona.nombre);
console.log(persona[propiedad]);
console.log(persona.habilidades[1]);

let personas = [
	{
		nombre: "Martín",
		edad: 27,
		altura: 1.8,
		habilidades: ["Magics", "Paciencia", "huele mal"]
	},
	{
		nombre: "Ryan",
		edad: 29,
		altura: 1.5,
		habilidades: ["Correr", "Inglés", "Comer"]
	}
];
console.log(personas[1].nombre);

console.log(personas[1].nombre);
console.log(personas[0].habilidades[2]);

/*
    Objeto Coche
        Propiedades:
            color
            matricula           plate
            numeroDeAsientos    numberOfSeats
            numeroDePuertas     numberOfDoors
            marca               brand
            caballosDeVapor     horsePower
            revisionesPasadas   previousInspections
            Arrancar
            Acelerar
            Frenar
*/
function arrancar(gasolina, llave, bateria) {
	if (gasolina && llave && bateria) console.log("BRRRRRUUUUM");
}

(gasolina, llave, bateria) => {
	if (gasolina && llave && bateria) console.log("BRRRRRUUUUM");
};

// function acelerar() {
//     console.log("A TODO GAASSS!");
// }

// let acelerar = () => {
//     console.log("A TODO GAASSS!");
// }

// function frenar() {
//     console.log("psssttt");
// }

// let frenar = () => {
//     console.log("psssstttt");
// }

let Coche = {
	plate: "1234BCD",
	numberOfSeats: 9,
	numberOfDoors: 5,
	brand: "Lamborghini",
	horsePower: 300,
	previousInspections: ["ITV 2010", 2010, 2011, 2012],
	start: (gasolina, llave, bateria) => {
		if (gasolina && llave && bateria) console.log("BRRRRRUUUUM");
	},
	accelerate: () => {
		console.log("A TODO GAASSS!");
	},
	brake: () => {
		console.log("psssstttt");
	}
};

Coche.start(true, true, true);
Coche.accelerate();
Coche.brake();

function saludar(nombre, birthYear) {
	let years = 2020 - birthYear;
	return () => {
		alert("Hola " + nombre + " tienes " + years + " años");
	};
}

let a = [
	[1, 2],
	[3, 4]
];

console.log(a[1][1]);

//saludar("Miguel Ángel", 2001)();

//CURRIFICACIÓN

function suma(x) {
	return y => {
		return x + y;
	};
}

console.log(suma(3)(4));

let clientes = [
	{
		"nombre": "Pepe",
		"apellido": "Pérez",
		"numCuenta": "ES54 2345678743",
		"saldo": 12345,
		"DNI": "012345678S"
	},
	{
		"nombre": "Pepa",
		"apellido": "Jiménez",
		"numCuenta": "ES54 3724590864823",
		"saldo": 10,
		"DNI": "001234567H"
	}
];

function enviarTransferencia(cuenta, receptor, dineroEnviado) {
	if (cuenta.saldo >= dineroEnviado) {
		cuenta.saldo -= dineroEnviado;
		receptor.saldo += dineroEnviado;
		return () => {
			alert("Operación realizada con éxito. Su nuevo saldo es: " + cuenta.saldo + "€");
		}
	}
	return () => {
		alert("No tienes fondos suficientes. Disculpa las molestias");
	}
}

//enviarTransferencia(clientes[1], clientes[0], 100)();




function operar(array, func) {
	// console.log(array);
	// console.log(func);
	// console.log(func(2));
	for (let i = 0; i < array.length; i++) {
		console.log(func(array[i]))
	}
}

operar([5, 2, 7], (num) => { return "El número es: " + num })








// let resultado = "";
// if (edad < 18)
// 	resultado = "No apto";
// else
// 	resultado = "Apto";

//OPERADOR TERNARIO

let miEdad = 26;
let resultado = (miEdad !== undefined ? miEdad : -1);
console.log(resultado);

let Persona = {
	"edad": 19
};

console.log(Persona ? Persona.edad : undefined);