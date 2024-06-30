import React, { useState } from 'react';
import axios from 'axios';

type Team = {
    id: number;
    name: string;
    logoSrc: string;
};

type TeamSelectProps = {
    teams: Team[];
    onSelectTeams: (team1: Team, team2: Team) => void;
};

export default function TeamSelect({ teams, onSelectTeams }: TeamSelectProps) {
    const [team1, setTeam1] = useState<Team | null>(null);
    const [team2, setTeam2] = useState<Team | null>(null);

    const handleSelectTeam1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTeamId = parseInt(e.target.value);
        const selectedTeam = teams.find(team => team.id === selectedTeamId) || null;
        setTeam1(selectedTeam);
        if (team2 && selectedTeam && team2.id === selectedTeam.id) {
            setTeam2(null); // Prevent selecting the same team for both slots
        }
    };

    const handleSelectTeam2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTeamId = parseInt(e.target.value);
        const selectedTeam = teams.find(team => team.id === selectedTeamId) || null;
        setTeam2(selectedTeam);
        if (team1 && selectedTeam && team1.id === selectedTeam.id) {
            setTeam1(null); // Prevent selecting the same team for both slots
        }
    };

    const handleStartMatch = () => {
        if (team1 && team2) {
            onSelectTeams(team1, team2);

            // Sending the selected teams' IDs to the API endpoint
            axios.post('/api/start-match', {
                team1Id: team1.id,
                team2Id: team2.id,
            })
                .then(response => {
                    console.log('Match started successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error starting match:', error);
                });
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-2">
                <label htmlFor="team1" className="text-lg font-bold">Select Team 1</label>
                <select
                    id="team1"
                    className="p-2 border border-gray-300 rounded-md"
                    onChange={handleSelectTeam1}
                    value={team1 ? team1.id : ''}
                >
                    <option value="">Select a team</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </select>
                {team1 && (
                    <img
                        src={team1.logoSrc}
                        alt={team1.name}
                        className="mt-2 w-32 h-32 rounded-full border-4 border-blue-500 object-contain"
                    />
                )}
            </div>
            <div className="flex flex-col items-center space-y-2">
                <label htmlFor="team2" className="text-lg font-bold">Select Team 2</label>
                <select
                    id="team2"
                    className="p-2 border border-gray-300 rounded-md"
                    onChange={handleSelectTeam2}
                    value={team2 ? team2.id : ''}
                >
                    <option value="">Select a team</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </select>
                {team2 && (
                    <img
                        src={team2.logoSrc}
                        alt={team2.name}
                        className="mt-2 w-32 h-32 rounded-full border-4 border-red-500 object-contain"
                    />
                )}
            </div>
            {team1 && team2 && (
                <button
                    className="mt-8 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                    onClick={handleStartMatch}
                >
                    Start Match
                </button>
            )}
        </div>
    );
}
