# Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
# For example:
# a = 1
# b = 4
# --> [1, 2, 3, 4]

def between(a,b):
    lst = []
    a = a
    while a <= b:
        lst.append(a)
        a += 1
    return lst
        