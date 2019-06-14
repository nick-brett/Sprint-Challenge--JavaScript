/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
function CuboidMaker(props) {
	this.length = props.length;
	this.width = props.width;
	this.height = props.height;
}
CuboidMaker.prototype.volume = function() {
	return this.length * this.width * this.height;
};
var cuboid = new CuboidMaker({ length: 12, width: 10, height: 8 });
console.log(cuboid.volume());
// class CuboidMaker{
//   constructor(props){
//     this.length = props.length;
//     this.width = props.width;
//     this.height = props.height;
//   };
// }
/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length,
  width, and height. Formula for cuboid volume: length * width * height
*/
//2nd attempt
// var cuboid = new CuboidMaker.prototype.volume = ({
//   return `${this.length} * ${this.width} * ${this.height}.`;
// });
// console.log(CuboidMaker.prototype.volume);
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
CuboidMaker.prototype.surfaceArea = function() {
	return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
var cuboidStep4 = new CuboidMaker({ length: 4, width: 5, height: 5 });
console.log(cuboidStep4);
// let cuboid = new CuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
//console.log(cuboid.volume()); // 100
//console.log(cuboid.surfaceArea()); // 130
