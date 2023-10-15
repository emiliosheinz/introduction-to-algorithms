import { mergeSort } from './merge-sort'

describe('mergeSort', () => {
  it('should return an empty array for an empty input array', () => {
    const result = mergeSort([])
    expect(result).toEqual([])
  })

  it('should return the same single-element array', () => {
    const result = mergeSort([1])
    expect(result).toEqual([1])
  })

  it('should return a sorted array for a sorted input array', () => {
    const result = mergeSort([1, 2, 3, 4, 5])
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return a sorted array for a reverse-sorted input array', () => {
    const result = mergeSort([5, 4, 3, 2, 1])
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return a sorted array for an unsorted input array', () => {
    const result = mergeSort([3, 1, 4, 2, 5])
    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
