# DESCRIPTION:
# Write a function which calculates the average of the numbers in a given list.

# Note: Empty arrays should return 0.

def find_average(numbers):
    # your code here
    n = sum(numbers)
    length = len(numbers)
    average = n / length
    return average