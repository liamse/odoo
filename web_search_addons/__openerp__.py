# -*- coding: utf-8 -*-

{
    "name": 'Comma as OR Search Addons',
    "version": "0.1",
    'website' : 'www.webirani.com',
    'summary' : 'Comma as OR Search Addons',
    "description": """
    Comma as OR Search Addons
    =========================
    One major use of search is related to search a list of items. Most of the time this items are listed in Excel or CSV file.
    This module help to copy a list of comma seperated items into search box and search all of them in once. In essence, the comma here is like OR operator.
    To make it simpler, in Excel, follow this scenario.
    First of all, create a column of your items that want to search, next add a column in right of it with commas, Finally copy two columns in once and paste it into search box.
    This feature works in Advance Search as well.

""",
    "depends": [
        'base',
        'web',
        'mail',
    ],
    "js": [
        'static/src/js/search.js',
    ],
    "css": [
            ],
    "qweb": [
             ],
    "author": "Esmaeil Samadi",
    "installable": True,
    "active": False,
    'license': 'AGPL-3',
}
