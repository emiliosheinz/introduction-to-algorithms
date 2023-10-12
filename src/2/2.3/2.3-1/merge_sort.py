def merge(a, b):
    result = []
    while len(a) != 0 and len(b) != 0:
        element = a.pop(0) if a[0] < b[0] else b.pop(0)
        result.append(element)

    while len(a) != 0:
        result.append(a.pop(0))
    while len(b) != 0:
        result.append(b.pop(0))

    return result


def merge_sort(A):
    if len(A) <= 1:
        return A

    first_half = merge_sort(A[: len(A) // 2])
    second_half = merge_sort(A[len(A) // 2 :])
    return merge(first_half, second_half)
