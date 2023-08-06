def increasing_insertion_sort(a, n):
    for i in range(1, n):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] < key:
            a[j + 1] = a[j]
            j = j - 1
        a[j + 1] = key
    print(a)


numbers = [5, 2, 4, 6, 1, 3]
increasing_insertion_sort(numbers, numbers.__len__())
