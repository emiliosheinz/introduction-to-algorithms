import { addBinaryIntegers } from './add-binary-integers'

describe('addBinaryIntegers', () => {
  it('should add binary integers "0 + 0" correctly', () => {
    const a = [0, 0, 0]
    const b = [0, 0, 0]
    const result = addBinaryIntegers(a, b, 3)
    expect(result).toEqual([0, 0, 0, 0])
  })

  it('should add binary integers "1 + 0" correctly', () => {
    const a = [1, 0, 1]
    const b = [0, 0, 0]
    const result = addBinaryIntegers(a, b, 3)
    expect(result).toEqual([0, 1, 0, 1])
  })

  it('should add binary integers with carry correctly', () => {
    const a = [1, 1, 1, 1]
    const b = [1, 1, 1, 0]
    const result = addBinaryIntegers(a, b, 4)
    expect(result).toEqual([1, 1, 1, 0, 1])
  })

  it('should add binary integers without carry correctly', () => {
    const a = [0, 1, 0, 1]
    const b = [1, 0, 1, 0]
    const result = addBinaryIntegers(a, b, 4)
    expect(result).toEqual([0, 1, 1, 1, 1])
  })
})
