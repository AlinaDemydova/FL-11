function isBigger(a, b) {
	return a-b > 0;
}

function isSmaller() {
	return !isBigger();
}

alert(isSmaller(3, 4));