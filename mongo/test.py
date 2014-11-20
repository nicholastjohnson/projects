import pymongo
import sys

def remove_dat(SID,SCORE):
    db.grades.remove({'student_id':SID,'score':SCORE})

con = pymongo.Connection("mongodb://localhost", safe=True)

db = con.students

grades = db.grades

query = {'type':'homework'}

try:
    cur = grades.find(query).sort([['student_id',pymongo.ASCENDING],['score',pymongo.ASCENDING]])

    for index, c in enumerate(cur):

        print index
        print c
        if index == 0:
            OID = c['_id']
            db.grades.remove({'_id':str(OID)})
            print "REMOVED: " + OID
        elif index%2 == 0:
            OID = c['_id']
            db.grades.remove({'_id':str(OID)})
            print "REMOVED: " + OID
        else:
            pass

except:
    print('Unexpected Error: ', sys.exc_info()[0])


