// Problem #006:
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

// Answer: 25164150

// Solution:
function sumSquareDifference(n) {
    let individuallySquaredSum = 0;
    let combinedSquaredSum = 0;

    for (let i = 1; i <= n; i++) {
        individuallySquaredSum += i ** 2;
    }

    for (let j = 1; j <= n; j++) {
        combinedSquaredSum += j;
        if (j === n) {
            combinedSquaredSum = combinedSquaredSum ** 2;
        }
    }

    return combinedSquaredSum - individuallySquaredSum;
}

// Test:
console.log(sumSquareDifference(100));
