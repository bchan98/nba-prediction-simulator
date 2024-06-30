import React from 'react';

export default function Bubble({ text }: { text: string }) {
    return (
        <div className="flex justify-center items-center w-48 h-48 bg-gray-200 border-2 border-gray-400 rounded-full m-4">
            <p className="text-center">{text}</p>
        </div>
    );
};
