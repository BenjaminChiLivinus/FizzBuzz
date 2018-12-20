// Basic Exercises
// Exercise 1
// let d = new Date();
// let weekdate = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function getMeridian() {
// 	let meridian;
// 	if (d.getHours() === 24)
// 		return meridian = '';
	
// 	if (d.getHours() >= 12)
// 		return meridian = 'pm';
	
// 	return meridian = 'am';
// }

// console.log(`Todate is: ${weekdate[d.getdate()]}
// 	Current time is: ${d.getHours()-12}${getMeridian()} ${d.getMinutes()}min`);


// Exercise 3
// function formatDate(format, sep) {
// 	let f = format.replace(/(\s|[^dmy])/g, '').toLowerCase();

// 	if (f.length < 1 || f.indexOf('m') < 0 || 
// 		f.indexOf('d') < 0 || f.indexOf('y') < 0 || !f)
// 		throw new Error('Invalid format. Use M for month, D for date and Y for year');

// 	let a = f.charAt(0);
// 	let c = f.charAt(f.length - 1);
// 	let b = f.charAt(f.indexOf(c) - 1);

// 	return getOutput(a) + sep + getOutput(b) + sep + getOutput(c);
// }

// function getOutput(value) {
// 	const d = new Date();

// 	if (value === 'd') {
// 		let date = d.getDate().toString();
// 		return date.length < 2 ? '0' + date : date;
// 	}
	
// 	if (value === 'm') {
// 		let month = (1 + d.getMonth()).toString();
// 		return month.length < 2 ? '0' + month : month;
// 	}
	
// 	if (value === 'y') {
// 		return d.getFullYear();
// 	}
	
// 	throw new Error('Wrong format. Check letters');
// }

// console.log(formatDate('mm-dd-yyyy', '-'));
// console.log(formatDate('mm-dd-yyyy', '/'));
// console.log(formatDate('dd-mm-yyyy', '-'));
// console.log(formatDate('dd-mm-yyyy', '-'));


// Exercise 4
// function findTriangleArea(a, b, c) {
// 	let s = (a + b + c) * 0.5;
	
// 	return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// }

// console.log(findTriangleArea(5, 6, 7));

// Exercise 5
// let text = 'w3resource';
// let buffer = '';
// for (let i = text.length - 1; i >= 0; i--) {
// 	buffer += text.charAt(i);
// }
// console.log(buffer);

// Exercise 7
// for (let year = 2014; year <= 2050; year++){
// 	let current = new Date(year.toString());
// 	if (current.getDay() === 0)
// 		console.log(`January 1st of ${year} is a Sunday.`);
// }

// Exercise 8
// while (true) {
// 	let input = prompt('Enter any integer between 1 and 10');

// 	if (input.toLowerCase() === 'stop')
// 		break;

// 	let integer = Number.parseInt(input);

// 	if (integer && integer > 0 && integer < 11)
// 		console.log('Good Work');
// 	else
// 		console.log('Not matched');
// }

// Exercise 9
// function daysTillChristmas() {
// 	let today = new Date();
// 	let christmasDay = new Date().setFullYear(today.getFullYear(), 11, 25);

// 	return (christmasDay - today) / 86400000 + ' days till Christmas!';
// }

// console.log(daysTillChristmas());

// Exercise 10
// function e(v) { return document.getElementById(v); }

// e('divide').onclick = divide;
// e('multiply').onclick = multiply;

// function divide() {
// 	let n1 = e('n1').value;
// 	let n2 = e('n2').value;
// 	let result = e('result');
// 	result.innerHTML = (n1 / n2).toString();
// }

// function multiply() {
// 	let n1 = e('n1').value;
// 	let n2 = e('n2').value;
// 	let result = e('result');
// 	result.innerHTML = (n1 * n2).toString();
// }

		// Exercise 11
// function convert(temp, toCelsius) {
// 	if (toCelsius) {
// 		console.log(temp + '\u00b0C is ' + convertToC(temp) + '\u00b0F');
// 		return;
// 	}
	
// 	return console.log(temp + '\u00b0F is ' + convertToF(temp) + '\u00b0C');
// }

// function convertToC(f) {
// 	return ((f - 32) / 9) * 5;z
// }

// function convertToF(c) {
// 	return ((9*c)/5) + 32;
// }

// convert(60, false);
// convert(45, true)

		// Exercise 12
// console.log(document.URL);

		// Exercise 13
// let str = prompt('Enter your variable name of choice');

// // answer one - using a new namespace
// let namespace = {[str]: "John"};

// // answer two - adding the variable to an existing object
// Object.defineProperty(namespace, str + 1, {value: "Mary"});

// // answer three - using Object.create()
// let o = new Object();
// o = Object.create({}, {[str + 2]:{value: "Simon"}});

// function Obj() {
// 	this.str = "John";
// }


		// Exercise 14
// let filename = prompt('Enter filename');
// let parts = filename.split('.');
// console.log('File extension:', '.' + parts[parts.length - 1]);

		// Exercise 15
// function getDifference(number){
// 	let diff = number - 13;
// 	return (diff < 0) ? diff : Math.abs(diff) * 2;
// }

// console.log(getDifference(3));
// console.log(getDifference(20));

		// Exercise 16
// function sum(a, b) { return a + b; }

// function run(a, b) {
// 	if (a === b) return sum(a, b) * 3;

// 	return sum(a, b);
// }

// console.log(run(2,4));
// console.log(run(3,3));

		// Exercise 17
// function getAbsDiff(n) {
// 	const factor = 19;
// 	const absDiff = Math.abs(n - factor);
// 	return n > factor ? absDiff * 3 : absDiff;
// }

// console.log(getAbsDiff(9));
// console.log(getAbsDiff(20));

		// Exercise 18
// function checkNumbers(a, b){
// 	const factor = 50;
// 	return (a + b === factor || a === factor || b === factor);
// }
// console.log(checkNumbers(29, 10));
// console.log(checkNumbers(30, 20));
// console.log(checkNumbers(86400000, 50));

		// Exercise 19
// function checkNumber(n){
// 	return n > 0 && n <= 40;
// }

// console.log(checkNumber(49));
// console.log(checkNumber(29));
// console.log(checkNumber(0));

		// Exercise 20
// function checkOppositeSign(a, b){
// 	return (a < 0 && b > -1) || (a > -1 && b < 0);
// }

// console.log(checkOppositeSign(-2, 8));
// console.log(checkOppositeSign(-2, -8));
// console.log(checkOppositeSign(-4, -98));

		// Exercise 21
// function ex21(str) {
// 	const pattern = 'Py';

// 	return str.startsWith(pattern) || str + pattern;
// }

// console.log(ex21('Python'));
// console.log(ex21('Prime'));
// console.log(ex21('thonPy'));

		// Exercise 22
// function popCharAt(str, index) {
// 	let buffer = '';
// 	for (let i = 0; i < str.length; i++) {
// 		if (i !== index)
// 			buffer += str.charAt(i);
// 	}

// 	return buffer;
// }

// console.log(popCharAt('Saturday', 5));
// console.log(popCharAt('Classic Image', 0));

		// Exercise 23
// function mutate(str){
// 	if (str.length === 1) return str;

// 	const first = str.charAt(0);
// 	const last = str.charAt(str.length - 1);
// 	let midStr = '';
// 	if (str.length >= 3)
// 		midStr = str.substring(1, str.length - 1);

// 	return last + midStr + first;
// }

// console.log(mutate('Saturday'));
// console.log(mutate('Z'));
// console.log(mutate('Px'));
// console.log(mutate('ABC'));

		// Exercise 24
// function mutate2(str) {
// 	const first = str.charAt(0);
// 	return first + str + first;
// }

// console.log(mutate2('Saturday'));
// console.log(mutate2('y'));
// console.log(mutate2('xz'));
// console.log(mutate2(''));
// console.log(mutate2(' '));

		// Exercise 25
// function multipleOf3Or7(n) {
// 	const num = Math.abs(n);
// 	return num % 3 === 0 || num % 7 === 0;
// }

// console.log(multipleOf3Or7(-21));
// console.log(multipleOf3Or7(7));
// console.log(multipleOf3Or7(3));

		// Exercise 26
// function mutate3(str) {	
// 	let part = str.slice(-3);
// 	return part + str + part; 
// }

// console.log(mutate3('Saturday'));

		// Exercise 27
// function ex27(str){
// 	return str.startsWith('Java');
// }

// console.log(ex27("JavaScript"));
// console.log(ex27("NodeJava"));
// console.log(ex27("NJavade"));


		// Exercise 28
// function ex28(x, y){
// 	return (x > 49 && x < 100) || (y > 49 && y < 100);
// }

// console.log(ex28(29, 52));
// console.log(ex28(29, 152));

		// Exercise 29
// function ex29(x, y, z){
// 	return (x > 49 && x < 100) ||
// 		(y > 49 && y < 100) ||
// 		(z > 49 && z < 100);
// }

// console.log(ex29(1, 2, 3));
// console.log(ex29(52, 20, 18));

		// Exercise 30
// function ex30(str){
// 	const pattern = 'Script';
// 	const index = 4;
// 	if (str.indexOf(pattern) === index){
// 		let part1 = str.substring(0, index);
// 		let part2 = str.substring(index + pattern.length);
// 		return part1 + part2;
// 	}

// 	return str;
// }

// console.log(ex30('JavaScript'));
// console.log(ex30('JaScriptva'));
// console.log(ex30('ScriptJava'));
// console.log(ex30('JavaScript is lovely'));

		// Exercise 31
// function ex31(a, b, c){
// 	const array = [a, b, c];
// 	let largest = 0;
// 	for (let i = 0; i < array.length - 1; i++){
// 		let large = array[i] > array[i + 1] ? array[i] : array[i + 1];
// 		largest = large > largest ? large : largest;
// 	}

// 	return largest;
// }

// console.log(ex31(3, 2, 1));

		// Exercise 32
// function ex32(a, b) {
// 	const factor = 100;
// 	const absDiffA = Math.abs(a - factor);
// 	const absDiffB = Math.abs(b - factor);

// 	if (absDiffA === absDiffB) 
// 		return a > b ? a : b;

// 	return absDiffA < absDiffB ? a : b;
// }

// console.log(ex32(218, 89));
// console.log(ex32(208, 92));
// console.log(ex32(108, 92));

		// Exercise 33
// function ex33(x, y){
// 	range
// }

		// Exercise 34
// function ex34(x, y){
// 	const a = Math.abs(x);
// 	const b = Math.abs(y);

// 	if ((a > 39 && a < 61) && (b > 39 && b < 61))	return Math.max(a, b);

// 	return "One or both numbers out of range";
// }

// console.log(ex34(-2, 39));
// console.log(ex34(-43, 59));

		// Exercise 35
// function ex35(str, char){
// 	let count = 0;
// 	const min = 2;
// 	const max = 4;

// 	for (let i of str){
// 		if (count >= max) break;
// 		if (i === char) count++;
// 	}
	
// 	if (count >= min && count <= max) return true;

// 	return false;
// }

// console.log(ex35('Some common js problems', 'm'));
// console.log(ex35('Some common js problems', 's'));
// console.log(ex35('Some common js problems', 'o'));
// console.log(ex35('Some common js problems', 'j'));

		// Exercise 36
// function ex36(x, y, z){
// 	let a = x % 10;
// 	let b = y % 10;
// 	let c = z % 10;

// 	return a === b && b === c;
// }

// console.log(ex36(283, 9283, 9998));
// console.log(ex36(328, 928, 1548));

		// Exercise 37
// function ex37(){
// 	let length = Math.floor(Math.random() * 11);
// 	let str = '';

// 	for (let i = 0; i < length; i++){
// 		let randomNum = Math.floor(Math.random() * 10) + 65;
// 		str += String.fromCharCode(randomNum);
// 	}

// 	if (length < 3) return str.toUpperCase();

// 	return str.substring(0, 3).toLowerCase() + str.substring(3);
// }

// console.log(ex37());
// console.log(ex37());
// console.log(ex37());

		// Exercise 38
// function assignGrade(tot_marks, isFinalExam){
// 	if (isFinalExam)
// 		return tot_marks >= 90;
	
// 	return tot_marks >= 80 && tot_marks <= 100;
// }

// console.log(assignGrade(89, true));
// console.log(assignGrade(95, false));
// console.log(assignGrade(70, true));

		// Exercise 39
// function ex39(x, y){
// 	const sum = x + y;
// 	return (sum >= 50 && sum <= 80) ? 65 : 80;
// }

// console.log(ex39(39, 50));

		// Exercise 40
// function check8(x, y){
// 	if (x === 8 || y === 8) return true;
// 	if (x + y === 8) return true;
// 	return x - y === 8;
// }

// console.log(check8(2, 6));
// console.log(check8(2, 8));
// console.log(check8(10, 18));
// console.log(check8(18, 10));

		// Exercise 41
// function checkSame_ex41(x, y, z){
// 	if (x === y && x === z && y === z)
// 		return 30;
// 	else if (x === y || x === z || y === z)
// 		return 20;
// 	else 
// 		return 40;	
// }

// console.log(checkSame_ex41(2, 3, 2));
// console.log(checkSame_ex41(1, 3, 8));
// console.log(checkSame_ex41(1, 1, 1));

		// Exercise 42
// function increasing_ex42(x, y, z, isStrictMode){
// 	if (isStrictMode) return x < y < z;
// 	return x <= y < z;
// }

// console.log(increasing_ex42(10, 15, 31, true));
// console.log(increasing_ex42(24, 22, 31, false));
// console.log(increasing_ex42(22, 22, 31, true));

		// Exercise 43
// function sameRightMostDigit(x, y, z){
// 	const xRD = x % 10;
// 	const yRD = y % 10;
// 	const zRD = z % 10;

// 	return xRD === yRD || yRD === zRD || xRD === zRD;
// }

// console.log(sameRightMostDigit(298, 108, 218));
// console.log(sameRightMostDigit(298, 108, 216));
// console.log(sameRightMostDigit(29, 1081, 20));

		// Exercise 44
// function ex44(x, y, z){
// 	return (x >= 20 && (x < y || x < z)) || 
// 		(y >= 20 && (y < x || y < z)) || 
// 		(z >= 20 && (z < x || z < y));
// }

// console.log(ex44(21, 80, 30));
// console.log(ex44(21, 80, 10));
// console.log(ex44(12, 8, 11));
// console.log(ex44(20, 8, 11));

		// Exercise 45
// function check15(x, y){
// 	if (x === 15 || y === 15) return true;
// 	return x + y === 15 || x - y === 15;
// }

// console.log(check15(15, 21));
// console.log(check15(30, 15));

		// Exercise 46
// function isMultipleOf7Or11(x, y){
// 	if (x % 7 === 0 || x % 11 === 0) return true;
// 	return y % 7 === 0 || y % 11 === 0;
// }

// console.log(isMultipleOf7Or11(21, 121));
// console.log(isMultipleOf7Or11(20, 121));
// console.log(isMultipleOf7Or11(23, 122));

		// Exercise 48
// function reverse_string(str){
// 	let buffer = '';
	
// 	for (let i = str.length - 1; i >= 0; i--)
// 		buffer += str.charAt(i);
	
// 	return buffer;	
// }

// console.log(reverse_string('Amayhimo!'));

		// Exercise 49
// function replaceAlphabets(str){
// 	let buffer = '';

// 	for (let i = 0; i < str.length; i++){
// 		buffer += String.fromCharCode(str.charCodeAt(i) + 1);
// 	}

// 	return buffer;
// }

// console.log(replaceAlphabets('Rl`kky'));

		// Exercise 50
// function capitalizeFirstLetter(str){
// 	let buffer = '';

// 	for (let i = 0; i < str.length; i++){
// 		const char = str.charAt(i);
// 		if (i === 0)
// 			buffer += char.toUpperCase();
// 		else if (str.charAt(i - 1) === ' ')
// 			buffer += char.toUpperCase();
// 		else
// 			buffer += char;
// 	}

// 	return buffer;
// }

// console.log(capitalizeFirstLetter('... some random words: work Work  ie  Moment  .'));
// console.log(capitalizeFirstLetter('B a.. some random words: work Work  ie  Moment  .x v'));

		// Exercise 51
// function hoursToMin(num){
// 	return num + 'hr ' + num * 60 + 'min';
// }

// console.log(hoursToMin(239));

		// Exercise 52
// function rearrange(str){	
// 	return str.split('').sort().join('');
// }

// console.log(rearrange('sciam'));

		// Exercise 53
// function check_ab(str, a, b){
// 	let range = 4;
// 	let matches = 0;
// 	for (let i = 0; i < str.length; i++){
// 		if (str.charAt(i) === a)
// 			if (i < str.length - range && str.charAt(i + range) === b)
// 				matches++;

// 		if (str.charAt(i) === b)
// 			if (i < str.length - range && str.charAt(i + range) === a)
// 				matches++;
// 	}

// 	return `${matches} match${(matches === 1) ? '' : 'es'} found.`
// }

// console.log(check_ab('bfora abbbbbb of bchhjkjak forward an d backward if b eaasts 3 place', 'a', 'b'));
// console.log(check_ab('foraaaabcboraaaabcboraaaabcb', 'a', 'b'));
// console.log(check_ab('abaChainsbrveak', 'a', 'b'));

				// OR //
// function check_ab(str){
// 	return (/a...b/).test(str) || (/b...a/).test(str);
// }

		// Exercise 54
// function countVowel(str){
// 	return str.match(/[aeiou]/gi).length;
// }

// console.log(countVowel('foraaaabcboEraaaabAcboraaaabcb'));


		// Exercise 55
// function are_equal(str){
// 	return str.match(/p/gi).length === str.match(/t/gi).length;
// }

// console.log(are_equal('Pascal pased Words Don\'t to...'));
// console.log(are_equal('Please Take my Palmtop'));

		// Exercise 56
function formatQuotient(x, y){
	const quotient = (x * y) / y;
	if (quotient < 0) return quotient;

	let buffer = '';
	let num_array = [];

	if (Number.isInteger(quotient)) {
		num_array = quotient.toString().split('');
		buffer = addCommas(num_array);
	}
	else {
		num_array = quotient.toString().split('.');
		buffer = addCommas(num_array[0]) + '.' + num_array[num_array.length - 1];
	}

	return buffer;
}

function addCommas(num_array) {
	console.log(num_array);
	let result = [];
	if (num_array.length > 3){
		result = num_array.toString().split('');
		for (let i = num_array.length - 3; i > 0; i -= 3) {
			result.splice(i, 0, ',');
		}
	}
	
	// for (let i = 0; i < num_array.length; i++) {
	// 	if (i === 1 && num_array.length >= 4)
	// 		buffer += ',' + num_array[i];
	// 	else if (i >= 3 && i % 3 === 0 && i < num_array.length - 1) {
	// 		buffer += num_array[i] + ',';
	// 	}
	// 	else
	// 		buffer += num_array[i];
	// }
	return result;
}


function quotient_string(x, y){
	let div = Math.round(x / y).toString();
	let result_array = div.split('');
	
	if (div >= 1000) {
		for (let i = div.length - 3; i > 0; i -= 3) {
			result_array.splice(i, 0, ',');
		}
	}

	return result_array;
}

console.log(formatQuotient(10000000.0000007, 10));
console.log(formatQuotient(68284829, 10));
console.log(formatQuotient(25.8629, 10));
console.log(formatQuotient(25000, 10));