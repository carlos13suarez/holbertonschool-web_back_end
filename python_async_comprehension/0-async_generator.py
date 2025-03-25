#!/usr/bin/env python3
"""This module contains a function to generate a list of random numbers"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """This function generates a list of random numbers"""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
