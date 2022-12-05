var fs = require("fs");
var array = fs.readFileSync("input5.txt").toString().split("\n");

let crane1 = [];
let crane2 = [];
let crane3 = [];
let crane4 = [];
let crane5 = [];
let crane6 = [];
let crane7 = [];
let crane8 = [];
let crane9 = [];
let counter = 0;
let currentCrane = 1;

for (let i = 0; i < 8; i++) {
  currentCrane = 1;
  let slice = array[i].split(" ");

  slice.forEach(solutionForDataPart1);
}

part2();
//part1();

function part2() {
  for (let i = 10; i < array.length; i++) {
    let full = array[i].split(" ");
    let amount = full[1];
    let from = full[3];
    let to = full[5];

    movingCranePart2(amount, from, to);
  }
}

function part1() {
  for (let i = 10; i < array.length; i++) {
    let full = array[i].split(" ");
    let amount = full[1];
    let from = full[3];
    let to = full[5];

    movingCranePart1(amount, from, to);
  }
}

console.log(
  crane1[0] +
    crane2[0] +
    crane3[0] +
    crane4[0] +
    crane5[0] +
    crane6[0] +
    crane7[0] +
    crane8[0] +
    crane9[0]
);

function movingCranePart2(amount, from, to) {
  let value = [];
  switch (Number(from)) {
    case 1:
      value = crane1.splice(0, amount);
      break;
    case 2:
      value = crane2.splice(0, amount);
      break;
    case 3:
      value = crane3.splice(0, amount);
      break;
    case 4:
      value = crane4.splice(0, amount);
      break;
    case 5:
      value = crane5.splice(0, amount);
      break;
    case 6:
      value = crane6.splice(0, amount);
      break;
    case 7:
      value = crane7.splice(0, amount);
      break;
    case 8:
      value = crane8.splice(0, amount);
      break;
    case 9:
      value = crane9.splice(0, amount);
      break;
  }

  switch (Number(to)) {
    case 1:
      crane1 = value.concat(crane1);
      console.log(crane1);
      break;
    case 2:
      crane2 = value.concat(crane2);
      console.log(crane2);
      break;
    case 3:
      crane3 = value.concat(crane3);
      break;
    case 4:
      crane4 = value.concat(crane4);
      break;
    case 5:
      crane5 = value.concat(crane5);
      break;
    case 6:
      crane6 = value.concat(crane6);
      break;
    case 7:
      crane7 = value.concat(crane7);
      break;
    case 8:
      crane8 = value.concat(crane8);
      break;
    case 9:
      crane9 = value.concat(crane9);
      break;
  }
}

function movingCranePart1(amount, from, to) {
  for (let i = 0; i < amount; i++) {
    let value = "";
    switch (Number(from)) {
      case 1:
        value = crane1.shift();
        break;
      case 2:
        value = crane2.shift();
        break;
      case 3:
        value = crane3.shift();
        break;
      case 4:
        value = crane4.shift();
        break;
      case 5:
        value = crane5.shift();
        break;
      case 6:
        value = crane6.shift();
        break;
      case 7:
        value = crane7.shift();
        break;
      case 8:
        value = crane8.shift();
        break;
      case 9:
        value = crane9.shift();
        break;
    }

    switch (Number(to)) {
      case 1:
        crane1.unshift(value);
        break;
      case 2:
        crane2.unshift(value);
        break;
      case 3:
        crane3.unshift(value);
        break;
      case 4:
        crane4.unshift(value);
        break;
      case 5:
        crane5.unshift(value);
        break;
      case 6:
        crane6.unshift(value);
        break;
      case 7:
        crane7.unshift(value);
        break;
      case 8:
        crane8.unshift(value);
        break;
      case 9:
        crane9.unshift(value);
        break;
    }
  }
}

function solutionForDataPart1(value) {
  if (value === "") {
    counter += 1;

    if (counter === 4) {
      currentCrane += 1;
      counter = 0;
    }
  } else {
    let valSub = value.substring(1, 2);

    currentCrane += 1;
    switch (currentCrane - 1) {
      case 1:
        crane1.push(valSub);
        break;
      case 2:
        crane2.push(valSub);
        break;
      case 3:
        crane3.push(valSub);
        break;
      case 4:
        crane4.push(valSub);
        break;
      case 5:
        crane5.push(valSub);
        break;
      case 6:
        crane6.push(valSub);
        break;
      case 7:
        crane7.push(valSub);
        break;
      case 8:
        crane8.push(valSub);
        break;
      case 9:
        crane9.push(valSub);
        break;
    }
  }
}
