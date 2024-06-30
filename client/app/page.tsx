import React from 'react';
import Bubble from '../components/Bubble';
import BubbleContainer from '../components/BubbleContainer';

const texts: string[] = [
    "Hello world, testing",
    "This is a test",
    "Abracadabra",
    "Nah, I'd win",
    "Nah, I'd gamble",
    "Jorgambler > Lefraud",
];

export default function Home() {
    return (
        <div>
            <BubbleContainer texts={texts} />
        </div>
    );
}
