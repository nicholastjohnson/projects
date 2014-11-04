import data


def all_coach_data():
    results = data.export_coach_data()

    ATL = results[0]
    HOU = results[1]

    return ATL

all_coach_data()