function fizzBuzz (input){
	if (typeof(input) !== "number")
		return NaN;
	if (input % 3 === 0 && input % 5 === 0)
		return 'fizzBuzz';
	if (input % 3 === 0)
		return 'fizz';
	if (input % 5 === 0)
		return 'Buzz';
	
	return input;
}

console.log(fizzBuzz(null));
console.log(fizzBuzz(undefined));

function sumOfMultiples(){
	let sum = 0;
	for(let i = 1; i <= 250; i++){
		sum += i * 9;
	}
	return sum;
}
console.log('Sum of multiples =', sumOfMultiples());






