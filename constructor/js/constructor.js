// Each of the following options will create a new empty object
//var newObject = {};
//var newObject = new Object();

function Car(model, year, miles) {

	this.model = model;
	this.year = year;
	this.miles = miles;

//	this.toString = function() {
	Car.prototype.toString = function() {
		return this.model + ' has done ' + this.miles + ' miles.';
	}
}

var civic = new Car('Honda Civic', 2009, 20000);
var pontiac = new Car('Pontiac G6', 2008, 130000);

console.log(civic.toString());
console.log(pontiac.toString());


/*

Functions in javascript have a property called a prototype. In the example above we use the following:

Car.prototype.toString = function() {
	return this.model + ' has done ' + this.miles + ' miles.';
}

A single instance of toString() is shared between all car objects instead of redefining the function with every new object created using the Car constructor.

*/