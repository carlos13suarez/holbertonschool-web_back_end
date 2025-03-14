#!/usr/bin/env python3
"""This module contains a function to make a multiplier"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """This function makes a multiplier"""
    return lambda x: x * multiplier
