var fs = require("fs");
var array = fs.readFileSync("input4.txt").toString().split("\n");

let totalValue = 0;

array.forEach(solutionPart2);

console.log(totalValue);

function solutionPart2(value) {
  let initialValue = value.split(",");
  let first = initialValue[0];
  first = first.split("-");
  let first1 = first[0];
  let first2 = first[1];
  let second = initialValue[1];
  second = second.split("-");
  let second1 = second[0];
  let second2 = second[1];

  if (!(Number(first1) > Number(second2) || Number(second1) > Number(first2))) {
    totalValue++;
  }
}

function solutionPart1(value) {
  let initialValue = value.split(",");
  let first = initialValue[0];
  first = first.split("-");
  let first1 = first[0];
  let first2 = first[1];
  let second = initialValue[1];
  second = second.split("-");
  let second1 = second[0];
  let second2 = second[1];

  if (Number(first1) < Number(second1)) {
    if (Number(first2) >= Number(second2)) {
      totalValue++;
    }
  }
  if (Number(first1) == Number(second1)) {
    totalValue++;
  }
  if (Number(first1) > Number(second1)) {
    if (Number(second2) >= Number(first2)) {
      totalValue++;
    }
  }
}
