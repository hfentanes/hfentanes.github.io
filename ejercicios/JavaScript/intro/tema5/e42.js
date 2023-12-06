//creo una función constructora
function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    if(typeof(price) === "number") {
        this.price = price;
    } else {
        this.price = Number(price);
    }
}

//creo dos objetos diferentes
let producto1 = new Smartphone("Motorola", "Edge 40", "349"); //pongo un número con comillas duplas para comprobar si me lo convierte a número
let producto2 = new Smartphone("Xiaomi", "14 Pro", 834);

//sale en pantalla
console.log(producto1);
console.log(producto2);