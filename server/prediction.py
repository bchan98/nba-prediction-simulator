import joblib
import pandas as pd
import os
from dotenv import load_dotenv
from nba_api.stats.endpoints import leaguedashteamstats

modelPath = "model.pkl"
predictors = [
    "PTS_home_rolling",
    "FG_PCT_home_rolling",
    "REB_home_rolling",
    "FG3_PCT_home_rolling",
    "PTS_away_rolling",
    "FG_PCT_away_rolling",
    "REB_away_rolling",
    "FG3_PCT_away_rolling",
]

load_dotenv()

http_proxy = os.getenv('HTTP_PROXY')

def prediction(homeName, awayName):
    request = leaguedashteamstats.LeagueDashTeamStats(
        last_n_games=5, per_mode_detailed="PerGame",
        proxy=http_proxy
    )
    foundStatistics = request.get_data_frames()[0]

    rfPredictor = joblib.load(modelPath)

    try:
        selectedHomeRow = foundStatistics.loc[foundStatistics["TEAM_NAME"] == homeName]
        selectedAwayRow = foundStatistics.loc[foundStatistics["TEAM_NAME"] == awayName]

        homeID = selectedHomeRow["TEAM_ID"].values[0]
        homePoints = selectedHomeRow["PTS"].values[0]
        homeFGP = selectedHomeRow["FG_PCT"].values[0]
        homeREB = selectedHomeRow["REB"].values[0]
        homeFG3P = selectedHomeRow["FG3_PCT"].values[0]

        awayID = selectedAwayRow["TEAM_ID"].values[0]
        awayPoints = selectedAwayRow["PTS"].values[0]
        awayFGP = selectedAwayRow["FG_PCT"].values[0]
        awayREB = selectedAwayRow["REB"].values[0]
        awayFG3P = selectedAwayRow["FG3_PCT"].values[0]

        inputData = {
            "HOME_TEAM_ID": [homeID],
            "PTS_home_rolling": [homePoints],
            "FG_PCT_home_rolling": [homeFGP],
            "REB_home_rolling": [homeREB],
            "FG3_PCT_home_rolling": [homeFG3P],
            "TEAM_ID_away": [awayID],
            "PTS_away_rolling": [awayPoints],
            "FG_PCT_away_rolling": [awayFGP],
            "REB_away_rolling": [awayREB],
            "FG3_PCT_away_rolling": [awayFG3P],
        }
        inputDataFrame = pd.DataFrame(inputData)
        prediction = rfPredictor.predict(inputDataFrame[predictors])

        if prediction == 1:
            return homeName
        else:
            return awayName
    except KeyError:
        print("Error finding teams.")


# testcase 1 - hawks vs celtics to verify predictor can output values
test1 = prediction("Atlanta Hawks", "Boston Celtics")
print(test1)
