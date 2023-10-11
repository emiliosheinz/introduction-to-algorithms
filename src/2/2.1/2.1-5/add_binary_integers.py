def add_binary_integers(a, b, n):
    result = [0] * (n + 1)
    carry = 0
    for i in range(n - 1, -1, -1):
        result[i + 1] = (a[i] + b[i] + carry) % 2
        carry = (a[i] + b[i] + carry) // 2
    result[0] = carry
    return result
