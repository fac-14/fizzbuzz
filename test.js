var test = require('tape');
var fizzbuzz = require('./index.js');

// Example test to show tape is working:
// test('Testing Tape is working', function(t) {
//   t.equal(1, 1, 'One should equal one');
//   t.end();
// });

test("Check that the function returns a value", function(t){
  var actual = fizzbuzz(1);
  var expected = 1;
  t.equal(actual, expected, "Input of 1 should return 1");
  t.end();
});