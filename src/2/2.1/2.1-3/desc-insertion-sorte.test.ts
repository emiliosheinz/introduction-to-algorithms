import { descInsertionSort } from './desc-insertion-sort' // Import your descInsertionSort function

describe('descInsertionSort', () => {
  it('should sort an empty array correctly', () => {
    const a: number[] = []
    descInsertionSort(a, a.length)
    expect(a).toEqual([])
  })

  it('should maintain a decreasing order for an already sorted array', () => {
    const a: number[] = [5, 4, 3, 2, 1]
    descInsertionSort(a, a.length)
    expect(a).toEqual([5, 4, 3, 2, 1])
  })

  it('should reverse the order for an ascending sorted array', () => {
    const a: number[] = [1, 2, 3, 4, 5]
    descInsertionSort(a, a.length)
    expect(a).toEqual([5, 4, 3, 2, 1])
  })

  it('should sort a random array in decreasing order', () => {
    const a: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    descInsertionSort(a, a.length)
    expect(a).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1])
  })
})
