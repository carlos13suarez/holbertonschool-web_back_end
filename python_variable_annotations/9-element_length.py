#!/usr/bin/env python3
"""This module contains a function to get the length of an element"""
import typing

def element_length(lst: typing.Iterable[typing.Sequence]) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """This function gets the length of an element"""
    return [(i, len(i)) for i in lst]