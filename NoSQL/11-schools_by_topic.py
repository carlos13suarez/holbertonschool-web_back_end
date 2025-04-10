#!/usr/bin/env python3
"""
    List all documents in a collection
"""


def schools_by_topic(mongo_collection, topic):
    """Return the list of schools having a specific topic"""
    return mongo_collection.find({"topics": topic})