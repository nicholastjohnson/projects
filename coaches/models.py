from google.appengine.ext import ndb
import data


class Coaches(ndb.Model):
    coachName = ndb.StringProperty()
    coachPosition = ndb.StringProperty()
    teamKey = ndb.StringProperty()
    teamName = ndb.StringProperty()


def load_data():
    results = data.export_coach_data()

    for r in results:
        #teamData = r
        headCoach = r[2]
        teamName = r[1]
        teamKey = r[0]

        print [headCoach, teamName, teamKey]

        # teamSave = Coaches(
        #     headCoach,
        #     'Head Coach',
        #     teamName,
        #     teamKey,
        # )

load_data()


