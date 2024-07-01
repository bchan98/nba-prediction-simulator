from flask import Flask, request, jsonify

app = Flask(__name__)


# A simple route to test the server
@app.route("/")
def home():
    return "Flask server is running!"


# Endpoint to handle starting a match
@app.route("/api/start-match", methods=["POST"])
def start_match():
    data = request.json
    if data is None:
        return jsonify({"error": "No JSON data provided"}), 400
    team1_id = data.get("team1Id")
    team2_id = data.get("team2Id")

    # Add your logic for starting a match here
    # For this example, we will just return a success message
    if team1_id and team2_id:
        return jsonify(
            {"message": f"Match started between team {team1_id} and team {team2_id}"}
        ), 200
    else:
        return jsonify({"error": "Invalid team IDs"}), 400


if __name__ == "__main__":
    app.run(debug=True)
