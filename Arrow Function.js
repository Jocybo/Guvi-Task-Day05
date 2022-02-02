// Print odd numbers in an array using Arrow Function :

let findOdd = () => {
    let c = [];
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            c.push(a[i]);
        }
    }
    console.log(c);
};
findOdd();

// Title caps using Arrow  Function :

let titlecase = () => {
    let a = "guvi tech deserves you"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    let b = [a];
    console.log(b);
};
titlecase();

// Sum of all numbers in an array using Arrow Function :

let sum = () => {
    let num = [7, 16, 1, 5, 9];
    let sumof = 0;
    num.forEach(x => {
        sumof += x;
    });
    console.log(sumof);
};
sum();

// Return all the prime numbers in an array using Arrow Function :

const primeNum = () => {
    let findPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    };
    let myPrimeArray = findPrime.filter(element => isPrime(element));
    console.log(myPrimeArray);
};
primeNum();


// Return all the palindromes in an array using Arrow Function :

let palin = () => {
    let a = ["level", "mom", "racecar", "daddy", "uncle"]
    for (i = 0; i < a.length; i++) {
        let b = a[i].split("").reverse().join("")
        if (a[i] == b) {
            console.log(a[i])
        }
    }
};
palin();