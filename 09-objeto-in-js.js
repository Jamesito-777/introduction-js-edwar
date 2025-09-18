//JAMES MACHADO HERNANDEZ
//Objetos en JS

//Fabian Guzman Villegas
//Aqui tenemos tres variables
const productName = "Sensor de humedad"
const price = 300;
const available = true;

//JAMES MACHADO HERNANDEZ
//Este objeto es un objeto llamado product que almacena las tres variables
//en una sola

const product = { 
    productName: "Sensor de humedad",
    price: 300,
    available: true,
}

console.log(product);
console.log(typeof product);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof available);

//JAMES MACHADO HERNANDEZ
//Para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente
//manera:

console.log("El precio del producto es: " + product.price);
console.log("El nombre del producto es: " + product.productName);
console.log("El producto esta disponible: " + product.available);

//JAMES MACHADO HERNANDEZ
//Agregar propiedades al objeto
product.image = 'imagen.jpg';

console.log(product);


