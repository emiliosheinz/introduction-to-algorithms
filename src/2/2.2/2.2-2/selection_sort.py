def selection_sort(elements):
    elementsQuantity = len(elements)
    for current in range(elementsQuantity - 1):
        smallest = current
        for selected in range(current + 1, elementsQuantity):
            if elements[selected] < elements[smallest]:
                smallest = selected
        temp_current = elements[current]
        elements[current] = elements[smallest]
        elements[smallest] = temp_current
