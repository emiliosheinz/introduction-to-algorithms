import pytest

from add_binary_integers import add_binary_integers


def test_add_binary_integers_0_0():
    a = [0, 0, 0]
    b = [0, 0, 0]
    result = add_binary_integers(a, b, 3)
    assert result == [0, 0, 0, 0]


def test_add_binary_integers_1_0():
    a = [1, 0, 1]
    b = [0, 0, 0]
    result = add_binary_integers(a, b, 3)
    assert result == [0, 1, 0, 1]


def test_add_binary_integers_with_carry():
    a = [1, 1, 1, 1]
    b = [1, 1, 1, 0]
    result = add_binary_integers(a, b, 4)
    assert result == [1, 1, 1, 0, 1]


def test_add_binary_integers_without_carry():
    a = [0, 1, 0, 1]
    b = [1, 0, 1, 0]
    result = add_binary_integers(a, b, 4)
    assert result == [0, 1, 1, 1, 1]


if __name__ == "__main__":
    pytest.main()
