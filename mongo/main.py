__author__ = 'Nick'

import bottle
import pymongo


@bottle.route('/')
def index():
    connection = pymongo.MongoClient('localhost', 27017)
    db = connection.test
    name = db.names
    item = name.find_one()

    return '<b>Hello %s!</b>' % item['name']

bottle.debug(True)
bottle.run(host='localhost', port=8080)