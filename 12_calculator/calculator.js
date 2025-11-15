const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((sum, value) => {
    return sum + value;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((result, value) => result * value);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
