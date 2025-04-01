#!/usr/bin/env python3
"""Module for simple pagination for handling a dataset of popular baby names"""

import csv
import math
from typing import List, Tuple


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        This function returns a specific page of data from the dataset.

        Args:
            page (int): The current page number (1-based index).
            page_size (int): The number of items per page.

        Returns:
            list: A list of lists containing the data for the specified page.
        """

        data = self.dataset()

        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0

        index_to_paginate = index_range(page, page_size)

        if index_to_paginate[0] >= len(data):
            return []

        start = index_to_paginate[0]
        end = index_to_paginate[1]

        return List[List](data[start:end])
