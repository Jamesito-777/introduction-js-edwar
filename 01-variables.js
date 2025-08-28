// alert("Estoy en hello world")
// Convenciones para nombrar variables

// CamelCase
// UpperCamelCase => Se usa para nombrar las clases en JavaScript 
// loweCamelCase  => Se usa para nombrar las variables en JacvaScript 
// SCREAMING_SNAKE_CASE > Se usa para nombrar las variables constantes
// snake_case => Gerneralmente usado para nombrar variables en el lenguaje Phyton 
// caja-kebab => Se usa para nombrar archivos multimedia en JavaScript
// Caja-De-Tren => Variante del kebab-case 

// Ya NO se usa var para declarar las variables, actualmente se usa let
// En JavaScript no es obligatorio indicar el tipo de variable 
// JavaScript se puede o no usar el punto y coma al final de una sentencia
var producto = "sensor-1";
var producto2 = "sensor-2";

console.log(producto);
console.log(producto2);

// No se puede iniciar una variable con un guion medio 
// var -sensor = "sensor3";

// No se puede iniciar una variable con numeros
// var 1sensor = "sensor4";

// Si esta permitido iniciar una variable con guion al piso
var _sensor = "sensor5";
console.log(_sensor)

// crear una variable con las 3 formas distintas

// var sensor10 = "sensor de lluvia";
// const sensor10 = "sensor de lluvia";
let sensor10 = "sensor de lluvia";

console.log(sensor10);

// Ejemplo con var
// No me indica error por duplicidad de variables
// var sensor11 = "sensor de humedad";
// var sensor11 = "sensor de calor";
// console.log(sensor11)

// let no permite duplicidad al declarar variables
// let sensor12 = "sensor de velocidad";
// let sensor12 = "sensor de luz";

// // No muestra error por falta de inicializacion
// console.log(userName);
// var userName = "James";

// console.log(userName);
// let userName = "James";

// Usando la declaracion const no se puede cambiar su valor 
// const maxSize = 1024:
// maxSize = 2048;
//     console.log(maxSize);

