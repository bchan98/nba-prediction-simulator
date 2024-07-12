'use client';

import React, { useState } from 'react';
import axios from 'axios';
import TeamSelect from '../components/TeamSelect';
import teamsData from '../components/teams.json'; // Import teams.json data

type Team = {
    id: number;
    name: string;
    logoSrc: string;
};

const teams: Team[] = teamsData; // Assign imported JSON data to a variable

export default function SportsMatchScreen() {
    const [team1, setTeam1] = useState<Team | null>(null);
    const [team2, setTeam2] = useState<Team | null>(null);
    const [winner, setWinner] = useState<Team | null>(null);

    const handleSelectTeams = (team1: Team, team2: Team) => {
        setTeam1(team1);
        setTeam2(team2);
    };

    function determineWinner() {
        if (team1 && team2) {
            axios.get(`https://ballersim.app/api/get-winner?team1Name=${team1.name}&team2Name=${team2.name}`)
                .then(response => {
                    console.log('Match winner:', response.data);
                    if (response.data.winner === String(team1.name)) {
                        setWinner(team1);
                    }
                    else {
                        setWinner(team2);
                    }
                })
                .catch(error => {
                    console.error('Error getting match winner:', error);
                });
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-2/3 space-y-4 bg-gray-200 rounded-md border-2 border-grey-400 p-8 m-4">
            <TeamSelect teams={teams} onSelectTeams={handleSelectTeams} />
            {team1 && team2 && (
                <button
                    className="mt-8 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                    onClick={determineWinner}
                >
                    Start Match
                </button>
            )}
            {winner && (
                <div className="mt-8 text-center">
                    <img src={winner.logoSrc} alt={winner.name} className="w-48 h-48 rounded-full mx-auto object-contain border-black border-4" />
                    <p className="mt-2 text-xl font-semibold text-green-600">Winner!</p>
                </div>
            )}
        </div>
    );
}

