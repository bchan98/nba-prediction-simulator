import React from "react";

export default function Homebar() {
    return (
        <div className="fixed top-0 left-0 w-16 h-auto m-0 flex flex-col bg-blue-900 text-white shadow-lg rounded-md justify-center items-center">
            <ul>
                <li className="mb-2"><img src="/img/logo.png" /></li>
                <li className="mb-2">Home</li>
                <li className="mb-2">NBA</li>
                <li className="mb-2">MLB</li>
            </ul>
        </div>
    )
} 
