// //Programación Funcional
// //Programación Orientada a Objetos (POO) (OOP)

// /*
//     VEHÍCULOS
// */

// class Vehicle {
//     constructor(color, nSeats) {
//         this.color = color;
//         this.nSeats = nSeats;
//         this.started = false;
//     }

//     arrancar() {
//         /*
//             this.started === false -> Arranca
//             this.started === true -> No hace nada
//         */
//         if (!this.started) {
//             console.log("BRRRRUMMM");
//             this.started = true;
//         }
//     }

//     acelerar() {
//         if (this.started) {
//             console.log("FIIIIUUUMMMM");
//         } else {
//             console.log("No estoy arrancado");
//         }
//     }
// }

// /*
//     COCHE
// */
// class Coche extends Vehicle {
//     constructor(plate, color, nSeats) {
//         super(color, nSeats);
//         this.plate = plate;
//     }
// }

// let miCoche = new Coche("1234BCD", "Rojo", 9);
// console.log(miCoche);
// miCoche.color = "Azul";
// console.log("Arrancado?", miCoche.started);
// miCoche.acelerar();
// miCoche.arrancar();
// miCoche.acelerar();
// console.log("Arrancado?", miCoche.started);



// let tuCoche = new Coche("4589HJK", "Amarillo", 2);
// tuCoche.arrancar();
// console.log(tuCoche);





/*PROGRAMACIÓN ORIENTADO OBJETOS (POO) (OOP)*/

class Vehicle {
    constructor(color, nSeats, type, speedLimit) {
        this.color = color;
        this.nSeats = nSeats;
        this.type = type
        this.started = false;
        this.speed = 0;
        this.speedLimit = speedLimit;
    }

    arrancar() {
        if (!this.started) {
            console.log("BRRRUUMMM");
            this.started = true;
        }
    }

    acelerar() {
        if (this.started && this.speed < this.speedLimit) {
            console.log("FIUUUMMM");
            this.speed += 10;
        } else if (!this.started) {
            console.log("No me has arrancado");
        } else {
            console.log("El motor no da para más");
        }
    }
}

class Coche extends Vehicle {
    constructor(plate, color, nSeats, speedLimit) {
        super(color, nSeats, "Coche", speedLimit);
        this.plate = plate;
        this.revisions = [];
    }

    set Revision(status) {
        this.revisions.push(status);
    }

    get Revision() {
        return this.revisions.map((revision, id) => "La revisión " + id + " es: " + revision)
        // let result = [];
        // for (let i = 0; i < this.revisions.length; i++) {
        //     result.push("La revisión " + i + " es: " + this.revisions[i]);
        // }
        // return result;

    }
}

let miCoche = new Coche("1234BCD", "Rojo", 9, 10);
console.log(miCoche);
miCoche.acelerar()
miCoche.arrancar();
miCoche.acelerar();
miCoche.acelerar();
miCoche.arrancar();
miCoche.arrancar();
let tuCoche = new Coche("4567HJK", "Amarillo", 2);
console.log(tuCoche);
tuCoche.Revision = "Ok";
tuCoche.Revision = "Pasada";
tuCoche.Revision = "Todo Bien";
tuCoche.Revision = "Estado perfecto";
console.log(tuCoche.Revision);


let myVehicle = new Vehicle("Rojo", "200", "Avión", 200);
console.log(myVehicle);
myVehicle.arrancar();
myVehicle.acelerar();


let a = "Hola";
let b = new String("Hola");

console.log(a, b);

let num1 = 5;
let num2 = new Number(5);
console.log(num1, num2);