'use strict';

function fizzbuzz(num) {
  return num % 15 == 0 ? "FizzBuzz" : num % 3 == 0 ? "Fizz" : num % 5 == 0 ? "Buzz" : num;
};
module.exports = fizzbuzz;
