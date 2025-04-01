#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Return a dictionary with pagination info that is deletion-resilient.
        
        Args:
            index (int): Starting index of the page (None defaults to 0)
            page_size (int): Size of the page (default 10)
            
        Returns:
            dict: Contains index, next_index, page_size and data
        """
        # Get the indexed dataset
        dataset = self.indexed_dataset()
        
        # Set default index to 0 if None
        if index is None:
            index = 0
            
        # Verify index is valid
        assert 0 <= index < len(dataset)
        
        data = []
        next_index = index
        # Collect page_size valid items starting from index
        while len(data) < page_size and next_index < len(dataset):
            if next_index in dataset:
                data.append(dataset[next_index])
            next_index += 1
                
        return {
            'index': index,
            'next_index': next_index,
            'page_size': len(data),
            'data': data
        }
