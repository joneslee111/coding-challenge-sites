# Enough is enough!
# Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. 
# However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
# He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. 
# Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

# Task
# Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
# For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
# drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
# With list [20,37,20,21] and number 1, the result would be [20,37,21].

def delete_nth(order,max_e):
    # code here
    list = []
    
    for n in order:
        if list.count(n) < max_e:
            list.append(n)
    print(list)
    return list

# another way of doing it:

def delete_nth(order,max_e):
    # code here
    #new list to return
    list = []
    #dictionary to count how many times each occur
    occurrences = {}
    
    # loop through each number
    for n in order:
        # get how many times it appears, or assign it to 0
        count = occurrences.setdefault(n, 0)
        # if count reaches th limit, then we skip
        if count >= max_e:
            continue
        # add current n to list
        list.append(n)
        # increase how many times it appears by 1
        occurrences[n] += 1
                
    return list
