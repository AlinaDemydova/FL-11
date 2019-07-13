function pipe(num, ...func) {
	num *= -1;
	for(let i = 0; i < func.length; i++){		
		num = func[i](num);
	}
	return num;
}

function addOne(n) {
	return n+1;
}

function addTwo(n) {
	return n+2;
}

console.log(pipe(4, addOne, addTwo));
