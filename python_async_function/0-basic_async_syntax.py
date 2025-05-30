#!/usr/bin/env python3
"""This module contains a function to wait for a random number of seconds"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Wait for a random number of seconds between 0 and max_delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
