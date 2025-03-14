#!/usr/bin/env python3
"""This module contains a function to make a multiplier"""
from collections.abc import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """This function makes a multiplier"""
    return lambda x: x * multiplier