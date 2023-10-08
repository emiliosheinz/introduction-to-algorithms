# 2.2-3

Consider linear search again (see Exercise 2.1-4). How many elements of the input array need to be checked on the average, assuming that the element being searched for is equally likely to be any element in the array? How about in the worst case? Using Θ-notation, give the average-case and worst-case running times of linear search. Justify your answers.

## Solution

Both average and worst case are Θ(n). In the average case, we have to check half of the elements on average (n/2). In the worst case, we have to check all of the elements (n). But given that in the Θ-notation, we drop the constants, both are Θ(n).