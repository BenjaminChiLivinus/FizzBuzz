const assert = require('chai').assert;
const app = require('../src/index.js');

describe('Factorial', function(){
    describe('handle valid input', function(){
        it('should return 6 as factorial of 3', function(){
            assert.equal(app.computeFactorial(3), 6);
        });
        
        it('should return 120 as factorial of 5', function(){
            assert.equal(app.computeFactorial(5), 120);
        })
        
        it('should return 362880 as factorial of 9', function(){
            assert.equal(app.computeFactorial(9), 362880);
        });
        
        it('should return 3628800 as factorial of 10', function(){
            assert.equal(app.computeFactorial(10), 3628800);
        });
        
        it('should return 39916800 as factorial of 11', function(){
            assert.equal(app.computeFactorial(11), 39916800);
        });
    });

    describe('handle invalid input', function() {
        it('should return undefined as factorial of string', function(){
            assert.equal(app.computeFactorial('demo'), undefined);
        });
    
        it('should return undefined as factorial of the floating-point number 2.8', function(){
            assert.equal(app.computeFactorial(2.8), undefined);
        });
    
        it('should return undefined as factorial of null', function(){
            assert.equal(app.computeFactorial(null), undefined);
        });
    
        it('should return undefined as factorial of "object"', function(){
            assert.equal(app.computeFactorial({value: 29}), undefined);
        });
    
        it('should return undefined for factorial of the negative number -5', function(){
            assert.equal(app.computeFactorial(-5), undefined);
        });
    });
    
});

describe('FizzBuzz', function(){
    describe('handle valid input', function(){
        it('should return "Fizz" if input is a multiple of 3', function(){
            assert.equal(app.fizzBuzz(3), 'Fizz');
        });
        
        it('should return "Buzz" if input is a multiple of 5', function(){
            assert.equal(app.fizzBuzz(5), 'Buzz');
        });

        it('should return "FizzBuzz" if input is a multiple of both 3 and 5', function(){
            assert.equal(app.fizzBuzz(15), 'FizzBuzz');
        });
    });

    describe('handle invalid input', function(){
        it('should return the input if it is not a multiple of 3 or 5', function(){
            assert.equal(app.fizzBuzz(17), 17);
        });

        it('should return "undefined" if input is not a number', function(){
            assert.equal(app.fizzBuzz('17'), 'undefined');
        });

        it('should return "undefined" if input is null', function(){
            assert.equal(app.fizzBuzz(null), 'undefined');
        });

        it('should return "undefined" if input is "undefined"', function(){
            assert.equal(app.fizzBuzz(undefined), 'undefined');
        });
    });
});