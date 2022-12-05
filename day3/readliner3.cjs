var fs = require("fs");
var array = fs.readFileSync("input3.txt").toString().split("\n");

const repeatedCharacter = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                return str1[i];
            }
        }
    }
    return -1;
};

const repeatedCharacterPart2 = (str1, str2, str3) => {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                for (let k =0; k < str3.length; k++)
                {
                    if (str1[i] === str3[k]) {
                        return str3[k];
                    }
                }
            }
        }
    }
    return -1;
};

const valuesLower = ['a', 'b', 'c' , 'd', 'e' , 'f', 'g' , 'h', 'i' , 'j', 'k', 'l', 'm' , 'n', 'o' , 'p', 'q' , 'r', 's' , 't', 'u' , 'v', 'w', 'x', 'y' , 'z'];
const valuesUpper = ['A', 'B', 'C' , 'D', 'E' , 'F', 'G' , 'H', 'I' , 'J', 'K', 'L', 'M' , 'N', 'O' , 'P', 'Q' , 'R', 'S' , 'T', 'U' , 'V', 'W', 'X', 'Y' , 'Z'];

let totalValue = 0;

for (let i = 0 ;i < array.length ; i+=3 )
{
    let value = repeatedCharacterPart2(array[i], array[i+1], array[i+2]);

    if (value == value.toLowerCase())
    {
      let prio = valuesLower.indexOf(value) + 1;
      totalValue += prio;
      
    }
    else
    {
      let prio = valuesUpper.indexOf(value) + 27;
      totalValue += prio;
    }
}

console.log(totalValue);





//function for part 1
//array.forEach(seperating);
function seperating(value) {

  let halfpoint = value.length / 2;
  let part1 = value.substring(0, halfpoint);
  let part2 = value.substring(halfpoint);

  let repeatedChar = repeatedCharacter(part1, part2);
  
  if (repeatedChar == repeatedChar.toLowerCase())
  {
    let prio = valuesLower.indexOf(repeatedChar) + 1;
    totalValue += prio;
    
  }
  else
  {
    let prio = valuesUpper.indexOf(repeatedChar) + 27;
    totalValue += prio;
  }

}



