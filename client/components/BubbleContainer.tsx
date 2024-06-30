import React from 'react';
import Bubble from './Bubble';


export default function BubbleContainer({ texts }: { texts: string[] }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {texts.map((text, index) => (
                <Bubble key={index} text={text} />
            ))}
        </div>
    );
};

