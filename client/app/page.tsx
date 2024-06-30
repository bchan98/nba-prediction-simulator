import React from 'react';
import Bubble from '../components/Bubble';
import BubbleContainer from '../components/BubbleContainer';

const texts: string[] = [
    "Hello world, testing",
    "This is a test",
    "Abracadabra",
];

export default function Home() {
    return (
        <div>
            <BubbleContainer texts={texts} />
        </div>
    );
}
