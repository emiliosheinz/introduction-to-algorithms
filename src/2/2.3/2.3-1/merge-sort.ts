function merge(a: Array<number>, b: Array<number>): Array<number> {
  const result = []

  while (a.length !== 0 && b.length !== 0) {
    const element = (a[0] < b[0] ? a.shift() : b.shift()) as number
    result.push(element)
  }

  return result.concat(a).concat(b)
}

export function mergeSort(elements: Array<number>): Array<number> {
  if (elements.length <= 1) return elements

  const midPoint = Math.ceil(elements.length / 2)
  const firstHalf = mergeSort(elements.slice(0, midPoint))
  const secondHalf = mergeSort(elements.slice(midPoint))
  return merge(firstHalf, secondHalf)
}
