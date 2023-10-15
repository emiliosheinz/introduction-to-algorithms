export function recursiveInsertionSort(elements: Array<number>, n = 1) {
  if (n >= elements.length) return elements

  const key = elements[n]
  let i = n - 1

  while (i >= 0 && elements[i] > key) {
    elements[i + 1] = elements[i]
    i = i - 1
  }

  elements[i + 1] = key

  return recursiveInsertionSort(elements, n + 1)
}
