import pytest

from selection_sort import selection_sort


def test_selection_sort_empty_array():
    elements = []
    selection_sort(elements)
    assert elements == []


def test_selection_sort_sorted_array():
    elements = [1, 2, 3, 4, 5]
    selection_sort(elements)
    assert elements == [1, 2, 3, 4, 5]


def test_selection_sort_reverse_sorted_array():
    elements = [5, 4, 3, 2, 1]
    selection_sort(elements)
    assert elements == [1, 2, 3, 4, 5]


def test_selection_sort_random_array():
    elements = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    selection_sort(elements)
    assert elements == [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


if __name__ == "__main__":
    pytest.main()
