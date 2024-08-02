from nba_api.stats.endpoints import leaguedashteamstats
import pandas as pd
import os
from dotenv import load_dotenv

load_dotenv()

http_proxy = os.getenv("HTTP_PROXY")


def fetch_data():
    request = leaguedashteamstats.LeagueDashTeamStats(
        last_n_games="5", per_mode_detailed="PerGame", proxy=http_proxy
    )
    fetchedStatistics = request.get_data_frames()[0]
    fetchedStatistics.to_csv("nba_stats.csv")


if __name__ == "__main__":
    print("Script is being run.")
    fetch_data()
