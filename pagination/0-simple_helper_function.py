#!/usr/bin/env python3
"""
This module provides a function to calculate
the start and end indexes for paginating a dataset.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    This function calculates the start and end indexes
    for paginating a dataset.

    Args:
        page (int): The current page number (1-based index).
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple containing the start index and end index
        for slicing the dataset.
    """
    start = (page - 1) * page_size
    end = page * page_size

    index_tuple = (start, end)

    return index_tuple
