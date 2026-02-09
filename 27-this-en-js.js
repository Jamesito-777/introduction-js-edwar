// This es una palabra reservada del sistema, osea que no se puede crear ni funciones ni variables con este nombre.

const reservation = {
    userName: "James",
    lastName: "Machado",
    userAge: 18,
    total: 100000,
    isPaid: false,

    // Los objetos puede contener funciones
    information: function (){
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};


const reservation2 = {
    userName: "Lele",
    lastName: "Pancha",
    userAge: 32,
    total: 150000,
    isPaid: true,

    // Los objetos puede contener funciones
    information: function (){
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};

// This hace referencia al objeto al objeto sobre el cual se esta mandando a llamar.
// Es obligatorio llamar la función de esta manera, por esta hacer referencia al objeto que se esta usando.

const reservation3 = {
    userName: "Lele",
    lastName: "Pancha",
    userAge: 32,
    total: 150000,
    isPaid: true,

    // Los objetos puede contener funciones
    information:() => {
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};

// Si se usa Arrow function no es capaz de leer los datos del contexto, dando

reservation.information();
reservation2.information();
reservation3.information();
