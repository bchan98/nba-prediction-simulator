"use client"
// SportsMatchScreen.tsx
import React, { useState } from 'react';
import TeamSelect from './TeamSelect';

const teams = [
    {
        id: 1,
        name: 'Philadelphia 76ers',
        logoSrc: '/img/logos/76ers.png',
    },
    {
        id: 2,
        name: 'Milwaukee Bucks',
        logoSrc: '/img/logos/bucks.png',
    },
    {
        id: 3,
        name: 'Chicago Bulls',
        logoSrc: '/img/logos/bulls.png'
    },
    // Add more teams as needed
];

export default function SportsMatchScreen() {
    const [team1, setTeam1] = useState<any>(null);
    const [team2, setTeam2] = useState<any>(null);

    const handleSelectTeams = (tm1: any, tm2: any) => {
        setTeam1(tm1);
        setTeam2(tm2);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-8 w-2/3">
                <div className="flex justify-center w-full">
                    {team1 && (
                        <img
                            src={team1.logoSrc}
                            alt={team1.name}
                            className="w-32 h-32 rounded-full border-4 border-blue-500 object-contain"
                        />
                    )}
                    {team2 && (
                        <img
                            src={team2.logoSrc}
                            alt={team2.name}
                            className="w-32 h-32 rounded-full border-4 border-red-500 object-contain"
                        />
                    )}
                </div>
                <TeamSelect teams={teams} onSelectTeams={handleSelectTeams} />
            </div>
        </div>
    );
}
