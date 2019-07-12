function isInteger(a) {
	return parseInt(a) - a === 0;
}
alert(isInteger(-5.9));
alert(isInteger(-5));