const findTheOldest = function (people) {
  return people
    .map((person) => {
      if (!person.hasOwnProperty("yearOfDeath")) {
        person.yearOfDeath = new Date().getFullYear();
      }

      return {
        name: person.name,
        lifeSpan: person.yearOfDeath - person.yearOfBirth,
      };
    })
    .reduce((prev, current) => {
      if (prev.lifeSpan > current.lifeSpan) {
        return prev;
      }
      return current;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
