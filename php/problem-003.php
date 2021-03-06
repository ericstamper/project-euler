<?php
// Problem #003:
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Answer: 6857

// Solution:
function largestPrimeFactor($number)
{
    $counter = 0;
    $productOfPrimeFactors = 1;

    while ($productOfPrimeFactors < $number) {
        $counter++;
        if ($number % $counter == 0) {
            $productOfPrimeFactors *= $counter;
        }
    }
    return $counter;
}

// Test:
echo largestPrimeFactor(600851475143);
