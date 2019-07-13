function formatTime(minutes) {
	let days = parseInt((minutes/60)/24);
	let hours = parseInt(minutes/60);
	if(hours > 0 || days > 0) {
		minutes = minutes - hours*60;
		hours = hours - days*24;
	}
	return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));