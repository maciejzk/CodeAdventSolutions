var fs = require("fs");
var array = fs.readFileSync("input6.txt").toString().split("\n");

let splitArray = array[0].split("");

let newValues;
let characterAt = 0;

//console.log(newValues);

splitArray.every(part2);

console.log(newValues);
console.log(characterAt);

function part1(value, index) {
  newValues = splitArray.slice(index, index + 4);
  characterAt = index + 4;
  console.log(checkMarker(newValues));
  return checkMarker(newValues);
}

function part2(value, index) {
  newValues = splitArray.slice(index, index + 14);
  characterAt = index + 14;
  console.log(checkMarker(newValues));
  return checkMarker(newValues);
}

function checkMarker(charsToCheck) {
  for (let i = 0; i < charsToCheck.length; i++) {
    for (let j = 1; j < charsToCheck.length; j++) {
      if (charsToCheck[i] == charsToCheck[j] && i != j) {
        return true;
      }
    }
  }
  return false;
}
