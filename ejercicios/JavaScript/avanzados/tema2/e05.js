//datos del ejercicio
class Square {
  constructor(side) {
    this.side = side;
  }
}
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

//creo una clase con una función que calcule el area
class AreaCalculator {
  static calculate(area) {
    if (area instanceof Square) {
      //lado al cuadrado
      return area.side ** 2;
    } else if (area instanceof Rectangle) {
      //base por altura
      return area.width * area.height;
    } else if (area instanceof Circle) {
      //pi por radio al cuadrado
      return Math.PI * area.radius ** 2;
    }
  }
}

//más datos del enunciado
const circle = new Circle(4);
const square = new Square(4);
const rectangle = new Rectangle(4, 2);

//he adaptado las informaciones que salen en pantalla
console.log("Area del...");
console.log(`- círculo: ${AreaCalculator.calculate(circle)} cm.`);
console.log(`- cuadrado: ${AreaCalculator.calculate(square)} cm.`);
console.log(`- rectángulo: ${AreaCalculator.calculate(rectangle)} cm.`);
