# -*- coding: utf-8 -*-

{
    "name": 'Add Persian Date to All Dates',
    "version": "0.2",
    'website' : 'www.webirani.com',

    "description": """
Convert All Dates to Persian and Gerogerian
===========================================
* Convert all dates in readonly state convert to following format: 
* Persian Date ([Gerogerian Date] [HH:MM:SS]), e.g. 1395/12/01 (02/19/2017 11:40:53)
""",
    "depends": [
        'base',
        'web',
    ],
    "js": [
        'static/src/js/date.js',
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
