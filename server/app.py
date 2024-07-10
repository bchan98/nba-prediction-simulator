from flask import Flask, jsonify, request
from flask_cors import CORS
import prediction
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# A simple route to test the server
@app.route("/")
def home():
    return "Flask server is running!"


# Endpoint to get the winner of a match
@app.route("/api/get-winner", methods=["GET"])
def get_winner():
    team1_name = request.args.get("team1Name")
    team2_name = request.args.get("team2Name")

    # Simulate match logic (randomly pick a winner for this example)
    if team1_name and team2_name:
        winner = prediction.prediction(team1_name, team2_name)
        return jsonify({"winner": winner})
    else:
        return jsonify({"error": "Invalid team names"}), 400


if __name__ == "__main__":
    app.run(debug=True)
