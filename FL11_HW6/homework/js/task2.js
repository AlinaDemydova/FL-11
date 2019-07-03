let a = +prompt('Enter a');
let b = +prompt('Enter b');
let c = +prompt('Enter c');
let zero = 0;

if( a && b && c > zero) {
	if (a === b === c) {
		console.log('Equivalent triangle');
	} else if ( a === b || a === c || b === c) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');
	}
} else {
	console.log('Triangle doesnt exist');
}
