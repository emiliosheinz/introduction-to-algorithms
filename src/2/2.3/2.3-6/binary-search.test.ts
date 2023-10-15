import { binarySearch } from './binary-search'

describe('binarySearch', () => {
  it('should return the index of the searched element in a sorted array', () => {
    const elements = [1, 2, 3, 4, 5, 6, 7]
    expect(binarySearch(elements, 3)).toBe(2)
    expect(binarySearch(elements, 6)).toBe(5)
  })

  it('should return -1 for an element not in the array', () => {
    const elements = [1, 2, 3, 4, 5, 6, 7]
    expect(binarySearch(elements, 8)).toBe(-1)
  })

  it('should handle empty arrays', () => {
    const elements: number[] = []
    expect(binarySearch(elements, 42)).toBe(-1)
  })

  it('should handle arrays with a single element', () => {
    const elements = [42]
    expect(binarySearch(elements, 42)).toBe(0)
  })
})
