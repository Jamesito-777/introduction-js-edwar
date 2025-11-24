// James Machado Hernandez
// En JS es una forma mas corta de escribir funciones usando la sintaxis () =>

    // Sintaxis más breve, ideal para funciones pequeñas
    // El arrow function no tiene su propio this, hereda el this del contexto donde se define.


    const add = function (){
        console.log (16 + 3);
    }

    add();

    // Funcion con parametros
    const add2 = function (num1,num2){
        console.log(num1 + num2);
    }

    add2(4 , 8);

    // Las llaves son opcionales cuando despues de la flecha solo tengo una sentencia
    const add3 = (num3, num4) => console.log(num3 + num4);
    add3 (6 , 9);

    // Otro ejemplo

    const learn = (technology) => console.log(`Aprendiendo ${technology}`);
    learn ('JavaScript');
// ==============================================================================================

const months = new Array("May", "january", "july", "june", "november", "december", "february");

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
months.forEach(months => {
    if(months == "november" || months == "december"){
        console.log ("Se verifico en el arreglo del mes y Si existe");
    }else{
        console.log ("El mes No existe");
    }
})

// =====================================================
// const result = shoppingCart.some (function(prdocut){
//     return product.price === 800;
// })

// console.log (result);

// const result =shoppingCart.some (product.price === 800);

// console.log(result);


// ==============================

// const result3 = shoppingCart.reduce (function(total,product){
//     return total + product.price;
// }, 0)

// console.log (result3);

// const result3 = shoppingCart.reduce((total, product)=> total + product.price,0)

// console.log(result3);

// ============================================

// const result4 = shoppingCart.filter(function(product){
//     return product.price <600;
// })
// console.log (result4);

// const result4 = shoppingCart.filter((product) => product.price >600)
// console.log (result4);

// // ============================================
// function greet (userName){
//     console.log('Hello $(userName)');
// }
// console.log (greet('James'));

const greet = userName => console.log (`Hello  ${userName}`);
(greet(`James`));
// =====================================================

const boost = num => num * num;

boost2 = num => Math.pow (num ** num);
console.log (boost(1000));
// ============================================
// Arrow function con entorno explicito

// Se usa cuando el cuerpo de una función tiene llaves 

const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7
}

console.log (add10 (15, 7));

// ================================================================
// Tiene retorno implicito, cuando la función no tiene llaves realiza el retorno implicitamente.
const add11 = (num6, num7) => num6 + num7;

console.log (add11(4,6));


