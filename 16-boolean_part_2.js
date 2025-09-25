// James Machado Hernandez
// Los booleanos tienen dos valores, falso y verdadero.

let age = 42;
// Mayor que
let isOlderThan = age >= 18;
console.log(isOlderThan);

// ==========================
let username = "James";
let haveName = username !== "";
console.log(haveName);
// ==========================
// James Machado Hernandez
// En JavaScript cero es falsy, pero cualquier numero distinto de cero es truthy.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(typeof Boolean(-5));

// ==========================
// James Machado Hernandez
// En JavaScript null or undefined siempre se convierte en false.
let nullValue = null;
let undefinedValue;

console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue));

// ==========================
// James Machado Hernandez
// Los booleanos son la base de las decisiones en los programas.

let haveAccess = true;

if(haveAccess){
    console.log("Welcome to system");
}else{
    console.log("Denied access");
}