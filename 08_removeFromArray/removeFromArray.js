const removeFromArray = function (array, ...params) {
  const newArray = [];

  array.forEach((item) => {
    if (!params.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
  //return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
