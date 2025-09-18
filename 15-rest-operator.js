// JAMES MACHADO HERNANDEZ
// Rest operator o spread operator
// Lo que se busca es NO modificar el arreglo original.

const months = ["December", "November", "March"];
console.table(months);


// Se crea un nuevo arreglo y lo unimos con otro.
const newArray = [...months, "January"];

// El nuevo arreglo se puede crar al final o al incio
const newArray2 = ["January", ...months];

console.table(newArray);
console.table(newArray2);

months.unshift("Agoust");
console.table(months);

months.push("July");
console.table(months);