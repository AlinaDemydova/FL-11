let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
let msecInSec = 1000,
	secInMin = 60,
	minInHour = 60,
	hourSInDay= 24,
	isAdult = 18;

const TEN = 10,
	three = 3;

function getNumbers(str) {
	let arr = str.split('');
	let numberArray = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] >= 0 && arr[i] < TEN) {
			numberArray.push(arr[i]);
		}
	}
	return numberArray;
}


function findTypes() {
	let obj = {};

	for(let i = 0; i < arguments.length; i++) {

		if(obj[typeof arguments[i]]) {
			obj[typeof arguments[i]] += 1;
		} else {
			obj[typeof arguments[i]] = 1;
		}
	}
	return obj;
}


function executeforEach(arr, func) {
	for(let i = 0; i<arr.length; i++) {
		func(arr[i]);
	}
}
let func = function(el) {
	console.log(el);
}


function mapArray(arr, func) {
	let transArr = [];
	executeforEach(arr, function(i, arr) {
		transArr.push(func(i, arr));
	});
    return transArr;
}
let plusThree = function(el) {
	return el + three;
}


function filterArray(arr, func) {
	let filterArray = [];
	executeforEach(arr, function(elem, i, arr) {
		if(func(elem, i, arr)) {
			filterArray.push(elem);
		}
	});
	return filterArray;
}


function showFormattedDate(date) {	
	let monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return 'Date: ' + monthes[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
}
showFormattedDate(new Date('2019-01-27T01:10:00')) 


function canConvertToDate(date) {
	return Date.parse(date) > 0;
}
canConvertToDate('2016-13-18T00:00:00') // false
canConvertToDate('2016-03-18T00:00:00') // true


function daysBetween(date1, date2) {
	let msecDate = Date.parse(date2) - Date.parse(date1);
	return Math.round(msecDate/msecInSec*secInMin*minInHour*hourSInDay);
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));


function getAmountOfAdultPeople(data) {
	let quantity = 0;

	executeforEach(data, function(item) {	
		let birsday18 = new Date(item['birthday']);	
		birsday18.setFullYear(birsday18.getFullYear() + isAdult);
		if(daysBetween(birsday18, new Date()) > 0) {
			quantity += 1;
		}
	})	
	alert(quantity);
	return quantity;
}

getAmountOfAdultPeople(data);


function keys(obj) {
	let arr = [];
	for(let key in obj) {
		if ({}.hasOwnProperty.call(obj, key)) {
            arr.push(obj[key])
        }
	}
	return arr;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3}); 


function values(obj) {
	let arr = [];
	for(let key in obj) {
		if ({}.hasOwnProperty.call(obj, key)) {
            arr.push(obj[key])
        }
	}
	return arr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});