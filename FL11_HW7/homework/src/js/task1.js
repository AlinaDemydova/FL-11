let email = prompt('Enter your email');
let minLengthEmail = 6;
let minLengthPassword = 5;
let map = new Map();
map.set('user@gmail.com', 'UserPass');
map.set('admin@gmail.com', 'AdminPass');
if (email === '' || email === null) {
	alert('Canceled');
} else if (email.length < minLengthEmail) {
	alert(`I don't know any emails having name length less than 6 symbols`);
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
	let password = prompt('Enter your password');
	if (password === map.get(email)) {
		alert('Wellcome!');
		let changePassword = confirm('Do you want to change your password?');
		if (changePassword) {
			let checkOldPassword = prompt('Enter your old password');
			if (checkOldPassword === password) {
				let newPassword = prompt('Enter new password');
				if (newPassword.length < minLengthPassword) {
					alert('It’s too short password. Sorry.');
				} else {
					map.set(email, newPassword);
					let checkNewPassword = prompt('Enter your new password again.');
					if (map.get(email) === checkNewPassword) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.');
					}
				}
			}
		} else {
			alert('You have failed the change.');
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you');
}