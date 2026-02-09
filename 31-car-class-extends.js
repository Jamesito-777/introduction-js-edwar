// Ejercicio con la clase carro vamos a heredar dos carros de tipos distintos

class fullcar{
    constructor(brand, color, model, id, airConditioned = ``,sunroof){
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.id = id;
        this.airConditioned = airConditioned;
        this.sunroof = sunroof;
    }
    run(){
        return `El vehiculo ${this.brand} esta arrancando y ¿este carro tiene aire acondicionado?:
        ${this.airConditioned}`
    }
};


const car1 = new fullcar ("Kia","Gray","EV9",123456, true, false)
console.log(car1.run());


const car2 = new fullcar ("Ford","pink","fiesta","100009", true, true);
console.log (car2.run());

class MiddleCar extends fullcar{
    constructor(brand, color, model, id,airConditioned){
        super(brand, color, model, id, airConditioned,``)
    }
    runMiddleCar(){
        return `${super.run()} `}
};
