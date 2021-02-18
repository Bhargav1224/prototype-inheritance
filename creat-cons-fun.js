// Create constructor functions Pending
// Problem
// Add a new method to the Shape class's prototype,calcPerimeter(), 
// which calculates its perimeter (the length of the shape's outer
//  edge) and logs the result to the console.
// Create a new instance of the Shape class called square. Give 
// it a name of square and a sideLength of 5.
// Call your calcPerimeter() method on the instance, to see whether
//  it logs the calculation result to the browser DevTools' console
//   as expected.
// Create a new instance of Shape called triangle, with a name of 
// triangle and a sideLength of 3.
// Call triangle.calcPerimeter() to check that it works OK.
// Approch
// function Shape(name, sides, sideLength) {
//   this.name = name;
//   this.sides = sides;
//   this.sideLength = sideLength;
// }
// // Write your code below here..

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    
}

Shape.prototype.calcPerimeter=function () {
    console.log(this.name+this.sides*this.sideLength);
}

let triangle=new Shape("triangle ",3,3)
triangle.calcPerimeter();
let square=new Shape("square ",4,5)
square.calcPerimeter();









