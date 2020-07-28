// Una linea
/*
    Varias lineas
    *
    *
    *
    *
*/

/*
    Una variable es un espacio de memoria reservado
    que puede almacenar uno o varios valores.
    Dicho valor es accedido mediante un nombre (nombre simbólico)
    Su valor puede cambiar
*/
var variableVAR = "Hola";   //No respeta el ámbito y siempre siguen creadas
let variableLET;            //Respeta el ámbito y de destruye después
variableLET = "Mundo";      //Las variables let y var se pueden modificar
variableLET = "Mi Mundo";
const PI = 3.14;            //Variables constantes (Se deben declarar inicializadas y son inalterables)

/*
    OPERADORES
    +
    -
    *
    /
    %
    ++
    --
    +=
    -=
    *=
    /=
    %=
*/

let num1 = 5;
let num2 = "2";

console.log("Suma num1 + num2", num1 + num2);
console.log("Resta num1 - num2", num1 - num2);
console.log("Multiplicación num1 * num2", num1 * num2);
console.log("División num1 / num2", num1 / num2);
console.log("Módulo num1 % num2", num1 % num2);

//
console.log(variableVAR, variableLET, num1);



/*
    Tipos de dato:
        - Números enteros (integers)
        - Cadenas de texto (strings)
        - Booleano (True/false)
        - Decimales (Float / Double)
*/

num1 = num1 + 1;
num1++; //Primero lee el valor y después suma 1
++num1; //Primero suma 1 y después lee el valor
num1--; //Primero lee el valor y después resta 1
--num1; //Primero resta 1 y después lee el valor
num1 += 5;  //Sumamos a num1 5
num1 -= 2;  //Restamos a num1 2
num1 *= 2;  //Multiplicamos a num1 2
num1 /= 2;  //Dividimos num1 entre 2
num1 %= 2;  //Obtenemos el módulo de la división entre num1 y 2

// num1 %= 2;
// num1 = num1 % 2

let num3 = 4;
console.log("num3", num3);
console.log("num3", ++num3);
console.log("num3", num3);

//CONDICIONALES
/*
    >
    <
    >=
    <=
    ==
    !=

    ESTRICTOS
    ===
    !==
*/

// 0 == "0" //TRUE
// 0 === "0" //FALSE

// 0 != "0" //FALSE
// 0 !== "0" //TRUE

let x = 30;
//Queremos que la x esté entre 10 y 20
//O que la valga 0

if ((x > 10 && x < 20) || x === 0) {
    console.log("Eureka");
} else if (x > 30) {
    console.log(":P");
} else if (x === 30) {
    let num1 = 5;
    let num2 = 3;
    console.log(num1 + num2);
} else {
    console.log(":(");
}


//Cuando no ponemos break, entra en los siguientes casos también
//Al encontrarse con un break, sale del switch
x  = 41
switch (x) {
    case 0: 
        console.log("Eureka");
        break;
    case 10: 
        console.log(":P");
    case 30:
        console.log(":(");
        break;
    case 40:
        console.log("Que tal estas?");
        break;
    default:
        console.log("No he encontrado tu opción");
}

//BUCLES

// do ... while     Primero ejecuta el código, después comprueba la condición de parada
// for              Un while con atajos
// while            Primero comprueba la condición de parada, después ejecuta el código
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

let finished = false;
do {
    // let input = prompt("Contraseña:")
    // if (input === "abrete sesamo")
        finished = true;
} while(!finished)
/*
    finished = false;
    !finished === true; //Lo contrario (Su negación)
*/

for (var iterator = 0; iterator < 10; iterator++) {
    console.log(iterator);
}

console.log(iterator);

console.log("Bienvenido a casa");


/*
//     FUNCIONES
//
//     Una función es un espacio de memoria reservado
//     que puede almacenar una serie de instrucciones.
//     Dichas instrucciones son ejecutadas mediante un nombre (nombre simbólico)
// */
function suma(num1, num2) {
    return (num1 + num2);
}

let continuar = true;
//false === false -> true
//!false -> true
//!true -> false
let input = parseInt(prompt("En que año naciste?"));
let edad = suma(2020, -input);
console.log(edad);

let num1 = parseInt(prompt("Introduzca número 1"));
let num2 = parseInt(prompt("Introduzca número 2"));
console.log(suma(num1, num2));
// while (continuar) {
//     suma();
//     let input = prompt("Diga S para continuar y N para finalizar");
//     if (input === "N")
//         continuar = false; // A partir de aquí no se continuaría el bucle
// }




function greet() {
    return("hello world");
}

function isDivisible(n, x, y) {
    return (n % x == 0 && n % y == 0);

    if (n % x == 0 && n % y == 0) {
        return true;
    } else {
        return false;
    }
}

isDivisible(2, 4, 5); //FALSE
isDivisible(2, 4, 6); //FALSE
isDivisible(8, 4, 2); //TRUE