//JAMES MACHADO HERNANDEZ
// Desustructuracion de objetos 

const product = {
    productName: "Sensor de humedad",
    price: 300,
    available: true,
}

//JAMES MACHADO HERNANDEZ
//Aqui un ejemplo de desestructuracion de objetos
const productPrice = product.price;
// const productName = product.productName;


console.log(productPrice);
console.log(product.productName);

//JAMES MACHADO HERNANDEZ
//Para que sirve el Destructuring? Sirve para extraer los valores de un objeto

const {price, available, productName} = product;

console.log(price, available, productName);
