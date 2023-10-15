// def desc_insertion_sort(a, n):
//     for i in range(1, n):
//         key = a[i]
//         j = i - 1
//         while j >= 0 and a[j] < key:
//             a[j + 1] = a[j]
//             j = j - 1
//         a[j + 1] = key

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
