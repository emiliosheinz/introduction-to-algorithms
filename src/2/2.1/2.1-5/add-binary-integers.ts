export function addBinaryIntegers(
  a: Array<number>,
  b: Array<number>,
  n: number
) {
  const result = Array.from<number>({ length: n + 1 }).fill(0)

  for (let i = n - 1; i >= 0; i--) {
    const sum = a[i] + b[i] + result[i + 1]
    result[i + 1] = sum % 2
    result[i] = Math.floor(sum / 2)
  }

  return result
}
