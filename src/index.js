'use strict';

module.exports = {
    computeFactorial: value => {
        if (typeof(value) !== 'number' || value < 0 || 
        !Number.isInteger(value) || !value){
            return undefined;
        }
    
        let factorial = 1;
        for (let counter = value; counter >= 1; counter--) {
            factorial *= counter;
        }
    
        return factorial;
    },

    fizzBuzz: value => {
        if (typeof(value) !== 'number') return 'undefined';
        if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz';
        if (value % 3 === 0) return 'Fizz';
        if (value % 5 === 0) return 'Buzz';
        return value;
    }
}