'use strict';

function fizzbuzz(number) {
  if ( number % 3 == 0 ){
    return "Fizz";
  } else {
    return number;
  }
};
module.exports = fizzbuzz;
