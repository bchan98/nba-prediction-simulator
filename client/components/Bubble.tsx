import React from 'react';

export default function Bubble({ text }: { text: string }) {
    return (
        <div className="flex justify-center items-center w-1/3 min-h-48 p-4 bg-gray-200 border-2 border-gray-400 rounded-md m-4">
            <p className="text-center">{text}</p>
        </div>
    );
};
