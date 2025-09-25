// James Machado Hernandez
// Diferencia entre metodos y funciones
const num1 = 10;
const num2 = '20';

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

// Parsear es convertir un tipo de variable a otro tipo
console.log(num1);
console.log(parseInt(num2));

// Este metodo convirte de numero a String
console.log(num1.toString());
console.log(num1);

// ============================================
// Función: Bloque de código independiente que realiza una tarea.
function greet() {
    console.log('Hello')
};

greet();

// ============================================

const person = {
    userName: "James",
    greet: function () {
        console.log(`Hello, I´m ${this.userName}`);
    }
}
// El metodo es una función asociada a un objeto(Se llama a través de un punto (.))
person.greet(); //Metodo por que pertenece a person.
console.log(typeof person);

// Una función eviste por si sola por el contrario el metodo es una función dentro de un objeto.