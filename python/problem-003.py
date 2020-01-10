# Problem #003:
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

# Answer: 6857

# Solution:
def largest_prime_factor(number):
    counter = 0
    product_of_prime_factors = 1

    while product_of_prime_factors < number:
        counter += 1
        if number % counter == 0:
            product_of_prime_factors *= counter

    return counter

# Test:
print(largest_prime_factor(600851475143))
