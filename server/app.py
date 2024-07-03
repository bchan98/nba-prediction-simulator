from flask import Flask, jsonify, request
from flask_cors import CORS
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
    team1_id = request.args.get("team1Id")
    team2_id = request.args.get("team2Id")

    # Simulate match logic (randomly pick a winner for this example)
    if team1_id and team2_id:
        winner = random.choice([team1_id, team2_id])
        return jsonify({"winner": winner})
    else:
        return jsonify({"error": "Invalid team IDs"}), 400


if __name__ == "__main__":
    app.run(debug=True)

