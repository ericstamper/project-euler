# Problem #004:
# A palindromic number reads the same both ways. The largest palindrome made
# from the product of two 2-digit numbers is 9009 = 91 × 99.
# Find the largest palindrome made from the product of two 3-digit numbers.

# Answer: 906609

# Solution:
def largest_palindrome_product(n):
    largest_number = (10 ** n) - 1
    a = largest_number
    b = largest_number
    largest_found_palindrome = 0

    while b > 1:
        if check_for_palindrome(a, b):
            if a * b > largest_found_palindrome:
                largest_found_palindrome = a * b
        if a > 1:
            a -= 1
        else:
            b -=1
            a = b
    return largest_found_palindrome

def check_for_palindrome(num1, num2):
    product = num1 * num2

    # 1. Convert number to string
    original_string = str(product)

    # 2. Reverse the string
    reversed_string = original_string[::-1]

    # 3. Compare the original string to the reversed string
    if original_string == reversed_string:
        return True

# Test:
print(largest_palindrome_product(3))
