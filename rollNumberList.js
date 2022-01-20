// how to set students roolnumber as sirialize?

const rollNumbers = [5, 6, 23, 54, 3, 7, 1];

let serializeRoll = rollNumbers.sort(function (a, b) {
  return a - b;
});

// Big to Small
serializeRoll = rollNumbers.sort(function (a, b) {
  return b - a;
});

console.log(serializeRoll);
