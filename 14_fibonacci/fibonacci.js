const fibonacci = function (param) {
  let index = Number(param);

  if (index < 0) {
    return "OOPS";
  }

  let fibonacci = [0, 1];

  for (let i = 0; i <= index - 2; i++) {
    let newMember = fibonacci[i] + fibonacci[i + 1];
    fibonacci.push(newMember);
  }

  return fibonacci[index];
};

// Do not edit below this line
module.exports = fibonacci;

/* 
0, 1, 
*/
