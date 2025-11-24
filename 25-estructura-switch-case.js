// Estructura Swicht
// James Machado Hernandez.
// Permite evaluar una expresión y ejecutar diferentes bloques de codigo segun el caso que coincida.

const paymentMethod = `bitcoin`;
switch (paymentMethod) {
    case `card`:
        console.log (`Pagaste con tarjeta`);
        break;

        break;
         case `bitcoin`:
        console.log(`Pagaste con bitcoin`);
        break;

        break;
         case `debitcard`:
        console.log(`Pagaste con tarjeta debito`);
        break;

        break;
         case `creditcard`:

        break;

    default:
        console.log(`Metodo de pago no valido`);
        break;
}