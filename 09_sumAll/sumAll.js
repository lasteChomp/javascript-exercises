const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }

  let smallNum = num1 < num2 ? num1 : num2;
  const bigNum = num1 < num2 ? num2 : num1;

  let sum = 0;
  for (smallNum; smallNum <= bigNum; smallNum++) {
    sum += smallNum;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
