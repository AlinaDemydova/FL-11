function reverseNumber(num) {
	let newNumber;

	if(num > 0) {
		newNumber = '';
	} else if(num < 0) {
		num *= -1;
		newNumber = '-';
	} else if (num === 0) {
		newNumber = 0;
	}

	for(let i = 10; num !== 0; i = i*10) {	
		let lastNumber = num%i;
		newNumber += lastNumber;
		num = (num - num%i)/10;

		if(num === 10) {
			newNumber += 1;
			return +newNumber;
		}
	}
	return +newNumber;
}
alert(reverseNumber(1000));
alert(reverseNumber(345));
alert(reverseNumber(-345));
alert(reverseNumber(0));

