// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
	constructor(props) {
		this.length = props.length;
		this.width = props.width;
		this.height = props.height;
	}
	volume() {
		return this.length * this.width * this.height;
	}
}
var cuboid = new CuboidMaker({ length: 12, width: 10, height: 8 });
console.log(cuboid.volume());
/* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length,
    width, and height. Formula for cuboid volume: length * width * height
  */

//2nd attempt
// var cuboid = new CuboidMaker.prototype.volume = ({
//   return `${this.length} * ${this.width} * ${this.height}.`;
// });
// console.log(cuboid);
//1st attempt
//function CuboidMaker(props) {
//   this.length = props.length;
//   this.width = props.width;
//   this.height = props.height;
// };
// CuboidMaker.prototype.volume = function(){
//   return `${this.length} * ${this.width} * ${this.height}`;
// };
// console.log(CuboidMaker.volume);
/* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

/* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
