// James Machado Hernandez
// More methodes for arrays
const months = new Array("May", "january", "july", "june")

// Este no tiene constructor 
const shoppingCart = [
    { productName: 'Smart TV 60', price: 900 },
    { productName: 'Smart TV 50', price: 700 },
    { productName: 'Tablet', price: 500 },
    { productName: 'Sound-bar', price: 900 },
    { productName: 'Google assistand', price: 600 },
    { productName: 'Sound-bar', price: 400 },
    { productName: 'Play Station', price: 800 },
    { productName: 'Wii', price: 450 },
    { productName: 'Mouse', price: 50 },
]
// Recorre el arrgelo con un forEach para que muestre todos los elementos 
// En este caso month es un parametro 
months.forEach(function (month) {
    console.log(month)
});

// Verificar si un mes  existe con forEach
months.forEach(function (month1) {
    if (month1 == 'July') {
        console.log("The month of june exist in the array")
    } else {
        console.log("Doesn't exist")
    }
});

// Buscar un arreglo si algo exste si existe devuelve un true si no un false
const result = months.includes("July");
console.log(result);

// ==============================
// En JS Includes no funciona bien con los objetos 
const result2 = shoppingCart.includes("Tablet")
console.log(result2);

const num = 5 == 5;
console.log('igualación doble' + num);
const num2 = 5 == '5';
console.log('igualación doble' + num2);

// Con igualación triple verifica si es el mismo valor y tipo
const num3 = 5 === '5';
console.log('igulación triple' + num3);
// ===============================
// En conslusión para un arreglo plano se usa includes y para un arreglo de objeto se usa some.
// const result5 = shoppingCart.some(function (product) {
// return product.productName === 'Tablet'
// })
// console.log(result5);

// Hace lo mismo que el codigo anteriorpero mas corto con Arrow Function.
let result5 = shoppingCart.some(product => product.productName === "Play Station");
console.log(result5);

// =============================
// Metodo reduce
// Sumar todos los precios del carrito de compras.
// result5 = shoppingCart.reduce(function (total, product) {
    // return total + product.price
// }, 0)

console.log(result5);

// =========================
// Lo mismo pero con flecha
result5 = shoppingCart.reduce((total, product) => total + product.price, 0)
console.log(result5);

// =============================
// Filtrar los valores menores que 700
result5 = shoppingCart.filter(function (product) {
    return product.price < 700
});
console.log(result5);

// ==========================
result5 = shoppingCart.filter((product) => product.price, 0)
console.log(result5);

// ==============================
result5 = shoppingCart.filter(function (product) {
    return product.price > 50
});
console.log(result5);
// ================================
// Todos excepto un tipo
result5 = shoppingCart.filter((product) => product.productName === 'Sound-bar')
console.log (result5);

result5 = shoppingCart.filter((product) => product.productName !== 'sound-bar')
console.log(result5);


