// POO programación orientada a objetos
// Una clase de JS es una plantilla para crear objetos, que comparten mismas propiedades y metodos.
// Una clase es como un molde que describe como seran los objetos y que podran hacer.

class Product {
    constructor(productName, productPrice){
    this.productName = productName;
    this.productPrice = productPrice;
}

formatProduct(){
    return`El producto ${this.productName} tiene un precio de ${this.productPrice}`
}
};

const product1 = new Product("Remote Control", 15000)
const product2 = new Product("SSD", 220000)

console.log(product1.formatProduct());
console.log(product2.formatProduct());

// =========================================================================
// Herencia en JS
// La herencia en JS permite que los objetos reutilicen propiedades y metodos de otros

class Book extends Product{
    constructor(bookName,bookPrice, isbn){
        super(bookName, bookPrice);
        this.isbn = isbn;
    }
    formatProduct(){
        return `${super.formatProduct()} y su ISBN es ${this.isbn}`
    }
};

const book1 = new Book("El perfume", 20000, 13579);

book1.formatProduct();
console.log(book1.formatProduct);