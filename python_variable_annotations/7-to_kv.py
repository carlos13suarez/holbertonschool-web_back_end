#!/usr/bin/env python3
"""This module contains a function to convert a string and an int to a tuple"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """This function converts a string and an int to a tuple"""
    return (k, v**2)
