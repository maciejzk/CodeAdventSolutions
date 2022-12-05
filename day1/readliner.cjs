const fs = require('fs');

let array = fs.readFileSync('input.txt').toString().split("\n");

let arrayTotals = [];
let currentTotal = 0;
let highest = 0;

array.forEach(item => {
    if (item != "") {
        currentTotal += Number(item);
    } else {
        arrayTotals.push(currentTotal);
        currentTotal = 0;
    }
});

arrayTotals.forEach(item => {
    if (highest < item) {
        highest = item;
    }
});

console.log(highest);

arrayTotals.sort(function(a, b) {
    return b - a
});

let totalOf3 = arrayTotals[0] + arrayTotals[1] + arrayTotals[2];
console.log(totalOf3);
