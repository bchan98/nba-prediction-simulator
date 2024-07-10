import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

gameurl = "https://raw.githubusercontent.com/bchan98/CapstoneProject/main/games.csv"
gamefile = pd.read_csv(gameurl)

training_data = gamefile[gamefile["SEASON"] == 2021]
testing_data = gamefile[gamefile["SEASON"] == 2022]

homeWins = training_data["HOME_TEAM_WINS"].value_counts()
totalGames = training_data.shape[0]
count_ones = homeWins.get(1, 0)

print(count_ones)
print(totalGames)

hw2 = testing_data["HOME_TEAM_WINS"].value_counts()
tG = testing_data.shape[0]
c1 = hw2.get(1, 0)


def rolling_average(group, cols, new_cols):
    group = group.sort_values("GAME_DATE_EST")
    rolling_stats = group[cols].rolling(5, closed="left").mean()
    group[new_cols] = rolling_stats
    group = group.dropna(subset=new_cols)
    return group


cols = [
    "PTS_home",
    "FG_PCT_home",
    "REB_home",
    "FG3_PCT_home",
    "PTS_away",
    "FG_PCT_away",
    "REB_away",
    "FG3_PCT_away",
]
new_cols = [f"{c}_rolling" for c in cols]

training_data_rolling = training_data.groupby("HOME_TEAM_ID").apply(
    lambda x: rolling_average(x, cols, new_cols)
)
testing_data_rolling = testing_data.groupby("HOME_TEAM_ID").apply(
    lambda x: rolling_average(x, cols, new_cols)
)

training_data_rolling = training_data_rolling.droplevel("HOME_TEAM_ID")
testing_data_rolling = testing_data_rolling.droplevel("HOME_TEAM_ID")

rf = RandomForestClassifier(n_estimators=50, min_samples_split=10, random_state=1)
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
rf.fit(training_data_rolling[predictors], training_data_rolling["HOME_TEAM_WINS"])

joblib.dump(rf, "model.pkl")
