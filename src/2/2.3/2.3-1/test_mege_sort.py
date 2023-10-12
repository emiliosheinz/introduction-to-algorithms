import pytest
from merge_sort import merge_sort


# Test cases for merge_sort function
def test_merge_sort_empty_array():
    result = merge_sort([])
    assert result == []


def test_merge_sort_single_element_array():
    result = merge_sort([1])
    assert result == [1]


def test_merge_sort_sorted_array():
    result = merge_sort([1, 2, 3, 4, 5])
    assert result == [1, 2, 3, 4, 5]


def test_merge_sort_reverse_sorted_array():
    result = merge_sort([5, 4, 3, 2, 1])
    assert result == [1, 2, 3, 4, 5]


def test_merge_sort_unsorted_array():
    result = merge_sort([3, 1, 4, 2, 5])
    assert result == [1, 2, 3, 4, 5]


if __name__ == "__main__":
    pytest.main()
