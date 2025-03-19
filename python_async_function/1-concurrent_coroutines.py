#!/usr/bin/env python3
"""This module contains a function to wait for a random number of seconds"""

from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Wait for a random number of seconds
    """
    delays = [await wait_random(max_delay) for _ in range(n)]
    return sorted(delays)
