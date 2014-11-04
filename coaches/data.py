import bs4
import urllib2, re

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


# def assistant_coaches(soup):
#
#     for assistant in soup.select('.assistcoach p.bold'):
#         name = assistant.text
#         try:
#             position = re.split(';', assistant.next_sibling.next_sibling.text)[0]
#             if position == 'Defensive Coordinator':
#                 myDict =
#             elif position == 'Offensive Coordinator':
#
#             else:
#                 pass
#
#         except AttributeError:
#             pass


def export_coach_data():

    testList = []

    for key in teamKeys:

        page = urllib2.urlopen("http://www.nfl.com/teams/coaches?coaType=head&team=" + key)
        soup = BeautifulSoup(page)

        teamKey = key
        teamName = teamKeys[key]
        headCoach = head_coach(soup)
#       assistantCoaches = assistant_coaches(soup)

        t = [
            teamKey,
            teamName,
            str(headCoach),
        ]

        testList.append(t)

    return(testList)

#export_coach_data()