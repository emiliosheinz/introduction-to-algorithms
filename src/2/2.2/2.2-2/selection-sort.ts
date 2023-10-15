export function selectionSort(elements: Array<number>) {
  for (let current = 0; current < elements.length - 1; current++) {
    let smallest = current

    for (let selected = smallest + 1; selected < elements.length; selected++) {
      if (elements[selected] < elements[smallest]) {
        smallest = selected
      }
    }

    const tempCurrent = elements[current]
    elements[current] = elements[smallest]
    elements[smallest] = tempCurrent
  }

  return elements
}
