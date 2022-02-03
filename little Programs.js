let x = function() {
    var c = []
    console.log("odd numbers using anonymous funct")
    let a = [1, 10, 15, 20, 25]
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            c.push(a[i])
        }
    }
    console.log(c)
}
x();
/////////////////////////////////////////

function addFive(num) {
    return num + 5;
};
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

////////////////////////////////////////

function toSeconds(minutes) {
    let seconds = minutes * 60;
    console.log(seconds);
};
toSeconds(5);
toSeconds(3);
toSeconds(2);

//////////////////////////////////////

function toInteger(str) {
    let a = str;
    parseInt = str;
    console.log(a);
}
toInteger("6");
toInteger("1000");
toInteger("12");

///////////////////////////////////////

let n = "5a";

function getOpposite(n) {
    if (Number.isInteger(n)) { return n * (-1); } else { return -1 }
}
let opposite = getOpposite(n)
console.log(opposite);

///////////////////////////////////////


function nextNumber(int) {
    let a = int + 1;
    console.log(a);
    return 0;
}
nextNumber(0);
nextNumber(9);
nextNumber(-3);

///////////////////////////////////////

function getFirstElement(arr) {
    let first = arr[0];
    console.log(first);
}
getFirstElement([1, 2, 3]);
getFirstElement([80, 5, 100]);
getFirstElement([-500, 0, 50]);

//////////////////////////////////////

function hoursToSeconds(hr) {
    let a = hr * 3600;
    return a;
}
console.log(hoursToSeconds(2));
console.log(hoursToSeconds(10));
console.log(hoursToSeconds(24));

////////////////////////////////////////

function findPerimeter(num1, num2) {
    let perimeter = (num1 + num2);
    let result = perimeter * 2;
    console.log(result)
}
findPerimeter(6, 7);
findPerimeter(20, 10);
findPerimeter(2, 9);

///////////////////////////////////////////

function lessThan(n1, n2) {
    let sum = n1 + n2;
    if (sum < 100) {
        let a = sum;
        console.log(a)
        return true;
    } else {
        console.log("false");
        return false;
    }
}
lessThan(2, 66);

/////////////////////////////////////////

function remainders(n1, n2) {
    let div = n1 % n2;
    if (div == 0) {
        console.log(div);
    }
}
let result = remainders(1, 5);

///////////////////////////////////////

function countAnimal(t, h, p) {
    let turkey = t * 2;
    let horse = h * 4;
    let pig = p * 4;
    let total = turkey + horse + pig;
    return total;
};
let legs = countAnimal(2, 3, 5)
countAnimal(1, 2, 3)
countAnimal(5, 2, 8)
console.log(legs);

//////////////////////////////////

function frames(num1, num2) {
    let frame = 60;
    let total = num1 * frame;
    let result = total * num2;
    console.log(result);
}
frames(1, 1)
frames(10, 1)
frames(10, 25)

/////////////////////////////////////


function divisibleByFive(num1) {
    let result = 5 % num1;
    if (divisibleByFive !== 0) {
        console.log("true");
    } else {
        console.log("false");
    }
    console.log(result);
}
divisibleByFive(5)
divisibleByFive(-55)

////////////////////////////////////


function isEven(num) {
    if (parseInt(num) == num) {
        if (num % 2 === 0) { return true } else { return false }
    } else { return -1 }
}
var even = isEven(5)
console.log(even);

//////////////////////////////////

function areBothOdd(num1, num2) {

    if (num1 & num2 % 2 == 1) {
        return true;
    } else {
        return false;
    }
}
console.log(areBothOdd(1, 3));
console.log(areBothOdd(1, 4));
console.log(areBothOdd(2, 3));
console.log(areBothOdd(0, 0));

///////////////////////////////////////

function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}
let fName = getFullName("GUVI", "GEEK")
let fName1 = getFullName("GUVI", "")
let fName2 = getFullName("", "GEEK")
let fName3 = getFullName("", "")
console.log(fName)
console.log(fName1.toString())
console.log(fName2.toString())
console.log(fName3.toString())

//////////////////////////////////////////

function getLengthOfWord(word) {
    return word.length
}
let result = getLengthOfWord("Guvi");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
console.log(result);

/////////////////////////////////////////////


function isSameLength(word1, word2) {
    if (word1.length == word2.length) {
        return true;
    } else {
        return false
    }
}
console.log(isSameLength("GUVI", "GEEK"))

///////////////////////////////////////////

function getDistance(x1, x2, x3, x4) {
    x2 - x1;
    x3 - x4;
    let distance = x1 * x2 + x3 * x4;
    return distance;
}
console.log(getDistance(100, 100, 400, 300));

////////////////////////////////////////////////

function getNthElement(array, n) {
    if (array.length !== n) {
        let a = array.length
        return a;
    } else {
        return undefined;
    }
}
console.log(getNthElement([1, 2, 3], 1));

//////////////////////////////////////////////////

function getLastElement(array) {
    if (array.length === 0) {
        return -1;
    } else {
        return array[3];
    }
}
console.log(getLastElement([1, 2, 3, 4]));

/////////////////////////////////////////////////////

let obj = {
    mykey: "value"
};

function getProperty(object, key) {
    console.log(object[key])
}
console.log(getProperty(obj, 'mykey'));
console.log(getProperty(obj, 'dummykey'))


//////////////////////////////////////////////////////

let obj = {};

function addProperty(obj1, key) {
    let a = (obj1, { myKey: "true" })
    return a;
}
console.log(addProperty(obj, 'mykey'));


/////////////////////////////////////////////////////

function removeProperty(obj1, key) {
    let a = { myKey: "value" };
    delete a.myKey
    return obj1;
}
console.log(removeProperty(obj, 'name'));

////////////////////////////////////////////////////

let res = [3, 4, -6, 0, -8, -1, 3, -6, 1, -8, -6, -1];

res = res.filter(function(v) {
    return v < 0;
}).concat(res.filter(function(v) {
    return v == 0;
}), res.filter(function(v) {
    return v > 0;
}));

//////////////////////////////////////////////////

function getPositives(ar) {
    let posArr = ar.filter(num => num > -1);
    return posArr;
}
let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let ar2 = getPositives(ar);
console.log(ar2);

/////////////////////////////////////////////////////

function powersOfTwo(n) {
    let powTwo = [];
    for (var i = 0; i <= n; i++) {
        return powTwo.push(2 ** i);
    }
    return myArray
}
console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(2))


//////////////////////////////////////////////////

function findMax(ar) {
    let a = Math.max(...ar);
    return a;
}
let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(ar);
console.log("Max:", max);

///////////////////////////////////////////////////

function reverseString(s) {
    return s.split("").reverse().join("")
}
console.log(reverseString("JavaScript"));

//////////////////////////////////////////////////

function mergeArray(a1, a2) {
    let array1 = a1;
    let array2 = a2;
    let newArray = array1.concat(array2);
    return newArray;
}
console.log(mergeArray([1, 2, 3], [4, 5, 6]));

///////////////////////////////////////////////////

function sumCSV(s) {

    let str = s.split(",");
    let res = str.reduce((total, num) => {
        return parseFloat(total) + parseFloat(num);
    });
    return res;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));