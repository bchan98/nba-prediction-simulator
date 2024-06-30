import React from "react";

export default function Homebar() {
    return (
        <div className="fixed top-10 left-10 w-32 h-auto m-0 flex flex-col bg-emerald-700 text-white shadow-lg rounded-md">
            <ul className="flex flex-col justify-center items-center">
                <li className="mb-2 md:p-4"><img src="/img/logo.png" /></li>
                <li className="mb-2 md:p-4 text-lg"><a href="/">Home</a></li>
                <li className="mb-2 md:p-4 text-lg"><a href="/nba">NBA</a></li>
                <li className="mb-2 md:p-4 text-lg">MLB</li>
            </ul>
        </div>
    )
} 
