// Object Literal
// Properties and Methods (functions)

var myObjectLiteral = {

	settings: {	
		enabled: true
	},

	myProperty: 'some value',

	myMethod: function() {
		console.log('my object enabled setting is set to ' + this.settings.enabled);
	}
}

// Outside of the object, new members may be added to the object literal using:
// myObjectLiteral.property = 'some value';



// The Module Pattern
// provides both private and public encapsulation (restricting access to some of the object's components.)
// encapsulates "privacy" state and organization using closures.
// Only a public API is returned, keeping everything else within the private closure.

var testModule = (function() {

	// Private

	var counter = 0;

	function privateMessage() {
		console.log('Mike is cool.')
	}

	// return an object exposed to the public. automatically assigned to testModule.
	return {

		// Public

		incrementCounter: function() {
			return ++counter;
		},

		resetCounter: function() {
			console.log('counter value prior to reset: ' + counter);
			counter = 0;
		},

		showPrivateMessage: function() {
			// We can access private variables/functions within our app,
			// but it's not available outside of our testModule object. Pretty cool!
			privateMessage();
		}

	}

})();

testModule.incrementCounter();

testModule.resetCounter();

testModule.showPrivateMessage();


