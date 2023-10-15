export function descInsertionSort(a: Array<number>, n: number) {
  for (let i = 1; i < n; i++) {
    const key = a[i]
    let j = i - 1

    while (j >= 0 && a[j] < key) {
      a[j + 1] = a[j]
      j = j - 1
    }

    a[j + 1] = key
  }
}
