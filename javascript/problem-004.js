// Problem #004:
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Answer: 906609

// Solution:
function largestPalindromeProduct(n) {
    let largestNumber = (10**n) - 1;
    let a = largestNumber;
    let b = largestNumber;
    let largestFoundPalindrome = 0;

    while (b > 1) {
        if (checkForPalindrome(a, b)) {
            if (a * b > largestFoundPalindrome) {
                largestFoundPalindrome = a * b;
                numberOfPalidromes =+ 1;
            }
        }
        if (a > 1) {
            a--;
        } else {
            b--;
            a = b;
        }
    }
    return largestFoundPalindrome;
}

function checkForPalindrome(num1, num2) {
    let product = num1 * num2;

    // 1. Convert number to string
    let originalString = product.toString();

    // 2. Covert string to an array
    // 3. Reverse the array
    // 4. Combine reversed array into a new string
    let reversedString = originalString.split("").reverse().join("");

    // 5. Compare the original string to the reversed string
    if (originalString === reversedString) {
        return true;
    }
}

// Test:
console.log(largestPalindromeProduct(3));
