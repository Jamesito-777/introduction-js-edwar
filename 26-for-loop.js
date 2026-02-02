// ForEach map son metodos exclusivos de arreglos

const shoppingCart = [
    { productName: 'Smart TV 60', price: 900 , color: "green"},
    { productName: 'Smart TV 50', price: 700 , color: "black"},
    { productName: 'Tablet', price: 500 , color: "red"},
    { productName: 'Sound-bar', price: 900 , color: "yellow"},
    { productName: 'Google assistand', price: 600 , color: "orange"},
    { productName: 'Sound-bar', price: 400 , color: "pink"},
    { productName: 'Play Station', price: 800 , color: "purple"},
    { productName: 'Wii', price: 450 , color: "brown"},
    { productName: 'Mouse', price: 50, color: "blue" },
]

// // Recorrer un arreglo por cada elemento
// shoppingCart.forEach(function (product) {
//     console.log(product)
// });


// shoppingCart.forEach(function (product) {
//     console.log(product.price)
// });


// shoppingCart.forEach(function (product) {
//     console.log(product.productName)
// });


// shoppingCart.forEach(function (product) {
//     console.log(product.productColor)
// });


// ============================================================================================

// Ahora ForEach con arrow function
shoppingCart.forEach((product) => console.log(product));
shoppingCart.forEach((product) => console.log(product.price));
shoppingCart.forEach((product) => console.log(product.productName));
shoppingCart.forEach((product) => console.log(product.color));