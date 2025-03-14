#!/usr/bin/env python3
"""This module contains a function to sum a mixed list"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """Sum a mixed list"""
    return sum(mxd_lst)
