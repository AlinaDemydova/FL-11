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

// 0. Write function, which returns array of numbers from string parameter.
const TEN = 10;
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
console.log(getNumbers('string')); 
console.log(getNumbers('n1um3ber95'));


// 1. Write a function that could receive different amount 
// of parameters (n1, n2, ...n) that have different 
// data types (string, number, boolean, etc.) and returns an object 
// where keys are data types of received parameters and value are 
// their count. 

// function findTypes(...arr) {
// 	let obj = {};
// 	let num1 = num2 = num3 = num4 = num5 = num6 = num7 = 0;

// 	for(let i = 0; i < arr.length; i++) {
// 		if(typeof arr[i] === 'boolean') {
// 			num1 += 1;
// 			obj['boolean'] = num1;
// 		}
// 		if(typeof arr[i] === 'number') {
// 			num2 += 1;
// 			obj['number'] = num2;
// 		}
// 		if(typeof arr[i] === 'object') {
// 			num3 += 1;
// 			obj['object'] = num3;
// 		}
// 		if(typeof arr[i] === 'string') {
// 			num4 += 1;
// 			obj['string'] = num4;
// 		} 
// 		if(typeof arr[i] === 'boolean') {
// 			num5 += 1;
// 			obj['boolean'] = num5;
// 		}
// 		if(typeof arr[i] === 'undefined') {
// 			num6 += 1;
// 			obj['undefined'] = num;
// 		}
// 		if(typeof arr[i] === 'function') {
// 			num7 += 1;
// 			obj['function'] = num;
// 		}
// 	}
// 	return obj;
// }

// console.log(findTypes('number')); // returns {“string”:1} 
// console.log(findTypes(null, 5,'hello', 7, 8, true, false)); // returns {“object”:1, “number”:1, “string”:1}


// //2. Write function, which iterates over array and 
// executes function on each element.

const TWO = 2;
const THREE = 3;
function executeforEach(arr, func) {
	for(let i = 0; i<arr.length; i++) {
		func(arr[i]);
	}
}
let func = function(el) {
	console.log(el);
}
executeforEach([1, TWO, THREE], func); // logs 1 2 3


// 3. Write function, which returns transformed array based 
//on function, which passed as a parameter.
// Reuse function from task 2.

function mapArray(arr, func) {
	let transArr = [];

	executeforEach(arr, function(i, arr) {
		transArr.push(func(i, arr));
	});
    return transArr;
}
let plusThree = function(el) {
	return el + 3 ;
}
mapArray([2, 5, 8], plusThree); // returns [5, 8, 11]


//4. Write function, which returns filtered array based on function, 
//which passed as a parameter. Reuse function from task 2.

function filterArray(arr, func) {
	let filterArray = [];
	executeforEach(arr, function(elem, i, arr) {
		if(func(elem, i, arr)) {
			filterArray.push(elem);
		}
	});
	return filterArray;
}

filterArray([2, 5, 8], function(el) {
	console.log(el); return el > 3;
	}); // returns [5, 8]

//5. Write function, which returns formatted date.

function showFormattedDate(date) {	
	let monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return 'Date: ' + monthes[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
}

showFormattedDate(new Date('2019-01-27T01:10:00')) 


//6. Write function, which returns Boolean value, is received string parameter can be converted to valid date.
function canConvertToDate(date) {
	return Date.parse(date) > 0;
}
canConvertToDate('2016-13-18T00:00:00') // false
canConvertToDate('2016-03-18T00:00:00') // true



//7. Write function, which returns difference between two dates in days
function daysBetween(date1, date2) {
	let msecDate = Date.parse(date2) - Date.parse(date1);
	return Math.round(msecDate/1000*60*60*24);
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));


//8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7

function getAmountOfAdultPeople(data) {
	let quantity = 0;

	executeforEach(data, function(item) {	
		let birsday18 = new Date(item['birthday']);	
		birsday18.setFullYear(birsday18.getFullYear() + 18);
		if(daysBetween(birsday18, new Date()) > 0) {
			quantity += 1;
		}
	})	
	alert(quantity);
	return quantity;
}

getAmountOfAdultPeople(data); // returns 3;

//9. Write function, which returns array of keys of an object.

function keys(obj) {
	let arr = [];
	for(let key in obj) {
		arr.push(key);
	}
	console.log(arr);
	return arr;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

//10. Write function, which returns array of values of an object.
function values(obj) {
	let arr = [];
	for(let key in obj) {
		arr.push(obj[key]);
	}
	console.log(arr);
	return arr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]
