// JAMES MACHADO HERNANDEZ

const numbers = [10, 20, 3, 40, 100];

console.log(numbers);

// Otra forma de visualización en tabla 
console.table(numbers);

// Crear un arreglo con el constructor 

const months = new Array("May", "january", "july", "june");

console.table(months);

const myArray = [" Hello", 42, true, false, null, { myName: "James", myJob: "Student" }, [3172293, 3147206]]

console.log(myArray);

// Consultar un elemento de arreglo 
console.log(typeof numbers[2]);
console.log(myArray[5]);

// JAMES MACHADO HERNANDEZ
// Metodo para conocer la longitud de un arreglo 
console.log("James tu arreglo tiene:" + numbers.length + "elementos");

// JAMES MACHADO HERNANDEZ 
// Un iterador con foEach 
const numbers2 = [10, 20, 30, 80, 100, 7, 8];
numbers2.forEach(function (number) {
    console.log(numbers);
})

months.forEach(function (month) {
    console.log(month);
})

myArray.forEach(function(elememt){
    console.log(elememt);
})
