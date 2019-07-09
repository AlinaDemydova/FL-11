let game = confirm('Do you want to play a game?');
if (!game) {
	alert('You did not become a billionaire, but can.');
} else {
	let minNumber = 0;
	let maxNumber = 8;
	let stepMaxNumber = 4;
	let totalPrize = 0;
	let maxPrize = 100;
	let two = 2;
	let three = 3;
	let eight = 8;
	let hundred = 100;
	let spinQuantity = 3;
	let pocketNumber;
	do {
		let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) +
			minNumber;
		alert(randomNumber);
		let prize2 = maxPrize;
		for (let j = spinQuantity; prize2 > 0, j > 0; prize2 = prize2 / two, j--) {
			do {
				pocketNumber = +prompt('Choose the roulette pocket number from 0 to ' +
					maxNumber + '\nAttempts left: ' + j + '\nTotal prize: ' + totalPrize +
					'$\nPossible prize on current attempt: ' + prize2 + '$');
			} while (pocketNumber === +'' || pocketNumber > maxNumber)
			if (pocketNumber === randomNumber) {
				totalPrize += prize2;
				alert('Congratulation, you won! Your prize is: ' + totalPrize + '$.');
				let game = confirm('Do you want to continue?');
				if (game) {
					maxNumber += stepMaxNumber;
					maxPrize = maxPrize * two;
					spinQuantity = three;
					break;
				} else {
					alert('Thank you for your participation. Your prize is: ' + totalPrize +
						' $');
					break;
				}
			}
			if (pocketNumber !== randomNumber && j === 1) {
				totalPrize = 0;
				let game = confirm('Do you want to play one more time?');
				if (game) {
					maxPrize = hundred;
					spinQuantity = three;
					maxNumber = eight;
				} else {
					break;
				}
			}
		}
	} while (game);
}