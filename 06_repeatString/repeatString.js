const repeatString = function (string, repeatTimes) {
  if (repeatTimes < 0) {
    return "ERROR";
  }

  let repeatedString = "";
  for (let i = 0; i < repeatTimes; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
