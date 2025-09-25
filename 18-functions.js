// James Machado Hernandez
// ¿Qué es Hoisting?
// Es el comportamiento por defecto en el que el interprete "MUEVE" las declaraciones "de variables y funciones" a la parte superior de su ámbito (scope) y lo mueve antes de ejecutar el código.
// Esto significa que puedes usar una funcion o variable declarada antes de escribirla en el código

// Declaración de unna función 
// Como esta función esá declarada se puede llamar antes o déspues de su creación
function add (){
    console.log(10 + 10);
};

add();

// ==============================================

// La expresión de una fución
// La expresión de la función solo puede llamarse despues de su declaración.
const sumar2 = function(){
    console.log (3 + 3);
};

sumar2();

// ============================
// IIFE (Inmediately invoked Function Expression), esta función se llama a si misma.
// Son útiles para proteger las variables, para que no se mezclen con las variables de otros archivos. 
(function(){
    console.log("Esta es una función IIFE");
})();

// Una función IIFE con parámetros
(function(name){
    console.log(`Hello ${name}`);
})('James');

console.log(client);