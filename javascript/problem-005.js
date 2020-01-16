// Problem #005:
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of
// the numbers from 1 to 20?

// Answer: 232792560

// Solution:
function smallestMultiple(n) {
    let foundMultiple = false;
    let currentNumber = n;

    while (foundMultiple === false) {
        currentNumber++;
        for (let i = 1; i <= n; i++) {
            if (currentNumber % i === 0 ) {
                if (i === n) {
                    foundMultiple = true;
                    break;
                }
                continue;
            } else {
                break;
            }
        }
    }

    return currentNumber;
}

// Test:
console.log(smallestMultiple(20));
