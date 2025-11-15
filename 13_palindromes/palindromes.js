const palindromes = function (string) {
  const fixedString = string
    .replace(/[.,!?;:]/g, "") // replace all punctuations with empty string
    .replace(/\s/g, "") // replace all whitespaces with empty string
    .toLowerCase(); // make all characters lower case

  let newString = "";
  for (let i = 0; i < fixedString.length; i++) {
    if (fixedString[i] === fixedString[fixedString.length - 1 - i]) {
      newString += fixedString[i];
    }
  }

  return newString === fixedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
