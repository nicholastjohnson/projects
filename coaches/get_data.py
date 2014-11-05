from bs4 import BeautifulSoup
import urllib2, re
from google.appengine.ext import ndb

teamKeys = {
    'ATL': 'Atlanta Falcons',
    'HOU': 'Houston Texans',
    # 'SD': 'San Diego Chargers',
    # 'OAK': 'Oakland Raiders',
    # 'KC': 'Kansas City Chiefs',
    # 'DEN': 'Denver Broncos',
    # 'TEN': 'Tennessee Titans',
    # 'JAC': 'Jacksonville Jaguars',
    # 'IND': 'Indianapolis Colts',
    # 'PIT': 'Pittsburgh Steelers',
    # 'CLE': 'Cleveland Browns',
    # 'CIN': 'Cincinnati Bengals',
    # 'BAL': 'Baltimore Ravens',
    # 'NYJ': 'New York Jets',
    # 'NE': 'New England Patriots',
    # 'MIA': 'Miami Dolphins',
    # 'BUF': 'Buffalo Bills',
    # 'SEA': 'Seattle Seahawks',
    # 'DAL': 'Dallas Cowboys',
    # 'NYG': 'New York Giants',
    # 'PHI': 'Philadelphia Eagles',
    # 'WAS': 'Washington Redskins',
    # 'CHI': 'Chicago Bears',
    # 'DET': 'Detroit Lions',
    # 'GB': 'Green Bay Packers',
    # 'MIN': 'Minnesota Vikings',
    # 'CAR': 'Carolina Panthers',
    # 'NO': 'New Orleans Saints',
    # 'TB': 'Tampa Bay Buccaneers',
    # 'ARI': 'Arizona Cardinals',
    # 'STL': 'St. Louis Rams',
    # 'SF': 'San Francisco 49ers'
}

def get_all_coaches():
    for key in teamKeys:
        page = urllib2.urlopen("http://www.nfl.com/teams/coaches?coaType=head&team=" + key)
        soup = BeautifulSoup(page)
        return(head_coach(soup))

def head_coach(soup):
    head = soup.select('.coachprofiletext p')[0].text
    position, name = re.split(': ', head)
    return name

def export_coach_data():

    testList = []

    for key in teamKeys:

        page = urllib2.urlopen("http://www.nfl.com/teams/coaches?coaType=head&team=" + key)
        soup = BeautifulSoup(page)

        teamKey = key
        teamName = teamKeys[key]
        headCoach = head_coach(soup)

        t = [
            teamKey,
            teamName,
            str(headCoach),
        ]

        testList.append(t)

    return(testList)


def all_coach_data():
    results = export_coach_data()

    ATL = results[0]
    HOU = results[1]

    return ATL

class Coaches(ndb.Model):
    coachName = ndb.StringProperty()
    teamName = ndb.StringProperty()
    teamKey = ndb.StringProperty()

def put_data_in_ndb():
    counter = 32

    while counter < 32:
        result = export_coach_data()[counter]
        result.put()

#print export_coach_data()
#print all_coach_data()
put_data_in_ndb()