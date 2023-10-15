# 2.3-6

Referring back to the searching problem (see Exercise 2.1-4), observe that if the subarray being searched is already sorted, the searching algorithm can check the midpoint of the subarray against x and eliminate half of the subarray from further consideration. The binary search algorithm repeats this procedure, halving the size of the remaining portion of the subarray each time. Write pseudocode, either iterative or recursive, for binary search. Argue that the worst-case running time of binary search is Θ(lg n).

## Solution

```
binarySearch(elements, searchedElement) {
  left = 0
  right = elements.length - 1

  while left <= right {
    midPoint = RoundDown((left + right) / 2)

    if (elements[midPoint] === searchedElement) return midPoint
    if (searchedElement < elements[midPoint]) right = midPoint - 1
    else left = midPoint + 1
  }

  return -1
}
```

Intuitively,, the worst-case running time of binary search is Θ(lgn) because after each run it cuts the size of the remaining portion of the subarray in half. In other words, the worst-case running time is nothing but how many times the input size can be divided by 2, i.e. $lgn$

You also can find the implementation of the pseudocode above in [./binary-search.ts](./binary-search.ts).