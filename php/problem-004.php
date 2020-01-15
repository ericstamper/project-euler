<?php
// Problem #004:
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Answer: 906609

// Solution:
function largestPalindromeProduct($n)
{
    $largestNumber = (10**$n) - 1;
    $a = $largestNumber;
    $b = $largestNumber;
    $largestFoundPalindrome = 0;

    while ($b > 1) {
        if (checkForPalindrome($a, $b)) {
            if ($a * $b > $largestFoundPalindrome) {
                $largestFoundPalindrome = $a * $b;
            }
        }
        if ($a > 1) {
            $a--;
        } else {
            $b--;
            $a = $b;
        }
    }
    return $largestFoundPalindrome;
}

function checkForPalindrome($num1, $num2)
{
    $product = $num1 * $num2;

    // 1. Convert number to string
    $originalString = (string)$product;

    // 2. Reverse the string
    $reversedString = strrev($originalString);

    // 3. Compare the original string to the reversed string
    if ($originalString === $reversedString) {
        return true;
    }
}

// Test:
echo largestPalindromeProduct(3);
