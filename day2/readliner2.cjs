var fs = require('fs');
var array = fs.readFileSync('input2.txt').toString().split("\n");
//console.log(array);
var arrayAllSeperate = [];

//console.log(array);


//var split = array[i].split(" ");
var arrayEnemy = [];
var arrayPlayer = [];

array.forEach(doingIt);

console.log(arrayPlayer);

var points = 0;
checkingResults();

function checkingResults()
{
    console.log(points);
    arrayPlayer.forEach(checking)
    console.log(points);
}

function checking(playerVal, index)
{
    if (playerVal == "X")
    {

        switch(arrayEnemy[index]) {
            case 'A':
                points += 3;
                break;
            case 'B':
                points += 1;
                break; 
            case 'C':
                points += 2;
                break; 
        }
    }
    if (playerVal == "Y")
    {
        points += 3;

        switch(arrayEnemy[index]) {
            case 'A':
                points += 1;
                break;
            case 'B':
                points += 2;
                break; 
            case 'C':
                points += 3;
                break; 
        }
    }
    if (playerVal == "Z")
    {
        points += 6;

        switch(arrayEnemy[index]) {
            case 'A':
                points += 2;
                break;
            case 'B':
                points += 3;
                break; 
            case 'C':
                points += 1;
                break; 
        }
    }
} 

function doingIt(value)
{
    let split = value.split(" ");
    arrayEnemy.push(split[0]);
    arrayPlayer.push(split[1]);
}

//console.log(arrayAllSeperate[0]);