export function binarySearch(
  elements: Array<number>,
  searchedElement: number
): number {
  let left = 0
  let right = elements.length - 1

  while (left <= right) {
    const midPoint = Math.ceil((left + right) / 2)

    if (elements[midPoint] === searchedElement) return midPoint
    if (searchedElement < elements[midPoint]) right = midPoint - 1
    else left = midPoint + 1
  }

  return -1
}
