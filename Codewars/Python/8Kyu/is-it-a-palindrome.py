# Write a function that checks if a given string (case insensitive) is a palindrome.

def is_palindrome(s):
    return True if s.lower()[::-1] == s.lower() else False

# or refactored it could be:
def is_palindrome(s):
    return s.lower()[::-1] == s.lower()
    