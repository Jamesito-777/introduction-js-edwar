// JAMES MACHADO HERNANDEZ
// Cuando se unen dos objetos o ideal es NO modificar ninguno de los dos objetos.

// const product = {
// productName: "Sensor de humedad",
// price: 300,
// available: true
// }
// Object.freeze(product);
// Objeto que almacena las medidas 
// const measurements = {
// weight: "1 kg",
// measurement: "10cm"
// }

// JAMES MACHADO HERNANDEZ
// Rest operator, vonsta de tres puntos (...)

// const newProduct = { ...product, ...measurements };

// console.log(product);
// console.log(newProduct);

// JAMES MACHADO HERNANDEZ

const motorcycle = {
    model: "2026",
    price: "23.000.000",
    available: true
}
// JAMES MACHADO HERNANDEZ
const car = {
    kilometros: "46 mil km",
    price: "32.000.000",
    available: false

}
// JAMES MACHADO HERNANEZ
const twoProduct = { ...car, ...motorcycle };

console.log(motorcycle);
console.log(twoProduct);