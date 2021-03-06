// Problem #007:
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
// What is the 10,001st prime number?

// Answer: 104743

// Solution:
function nthPrime(n) {
    let primes = [];
    let counter = 1;

    while (primes.length < n) {
        counter++;
        if (isPrime(counter)) {
            primes.push(counter);
        }
    }
    return primes[primes.length - 1];
}

function isPrime(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i !== 0) {
            continue;
        }
        if (num % i === 0 && i !== num) {
            return false;
        } else {
            return true;
        }
    }
}

// Test:
console.log(nthPrime(10001));
