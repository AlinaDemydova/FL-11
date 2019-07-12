function getMin() {
	if(arguments.length === 0) {
		return 0;
	}
	let min = +Infinity;
	for(let i = 0; i !== arguments.length; ++i) {
		if(arguments[i] < min) {
			min = arguments[i];
		}
	}
	return min;
}
alert(getMin(1, 2, 3, -1, 58));