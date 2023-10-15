import { selectionSort } from './selection-sort' // Import your selectionSort function

describe('selectionSort', () => {
  it('should sort an empty array correctly', () => {
    const elements: number[] = []
    selectionSort(elements)
    expect(elements).toEqual([])
  })

  it('should sort a sorted array correctly', () => {
    const elements: number[] = [1, 2, 3, 4, 5]
    selectionSort(elements)
    expect(elements).toEqual([1, 2, 3, 4, 5])
  })

  it('should sort a reverse-sorted array correctly', () => {
    const elements: number[] = [5, 4, 3, 2, 1]
    selectionSort(elements)
    expect(elements).toEqual([1, 2, 3, 4, 5])
  })

  it('should sort a random array correctly', () => {
    const elements: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    selectionSort(elements)
    expect(elements).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })
})
