const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(numbers) {
  let total = 0
  for (i=0; i < numbers.length; i++){
    total = total + numbers[i]
  }
  return total;
};

const multiply = function(numbers) {
  let total = 1
  for (i=0; i < numbers.length; i++){
    total = total * numbers[i]
  }
  return total;
};

const power = function(number,exponent) {
  return number**exponent;
};

const factorial = function(number) {
  if (number === 1 || number === 0){
    return 1;
  }
  for (i=number - 1; i > 0; i--){
    number *= i
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
