import { recursiveInsertionSort } from './recursive-insertion-sort' // Import your recursiveInsertionSort function

describe('recursiveInsertionSort', () => {
  it('should sort an empty array correctly', () => {
    const a: number[] = []
    recursiveInsertionSort(a)
    expect(a).toEqual([])
  })

  it('should maintain the order for an already sorted array', () => {
    const a: number[] = [1, 2, 3, 4, 5]
    recursiveInsertionSort(a)
    expect(a).toEqual([1, 2, 3, 4, 5])
  })

  it('should reverse the order for an descending sorted array', () => {
    const a: number[] = [5, 4, 3, 2, 1]
    recursiveInsertionSort(a)
    expect(a).toEqual([1, 2, 3, 4, 5])
  })

  it('should sort a random array in increasing order', () => {
    const a: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    recursiveInsertionSort(a)
    expect(a).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })
})
