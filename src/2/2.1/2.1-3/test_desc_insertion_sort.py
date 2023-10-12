import pytest

from desc_insertion_sort import desc_insertion_sort


def test_decreasing_insertion_sort_empty_array():
    a = []
    desc_insertion_sort(a, 0)
    assert a == []


def test_desc_insertion_sort_sorted_array():
    a = [5, 4, 3, 2, 1]
    desc_insertion_sort(a, 5)
    assert a == [5, 4, 3, 2, 1]


def test_desc_insertion_sort_reverse_sorted_array():
    a = [1, 2, 3, 4, 5]
    desc_insertion_sort(a, 5)
    assert a == [5, 4, 3, 2, 1]


def test_desc_insertion_sort_random_array():
    a = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    desc_insertion_sort(a, len(a))
    assert a == [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]


if __name__ == "__main__":
    pytest.main()
