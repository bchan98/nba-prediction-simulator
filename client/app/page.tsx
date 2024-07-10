import React from 'react';
import Bubble from '../components/Bubble';
import BubbleContainer from '../components/BubbleContainer';

const texts: string[] = [
    "Welcome! This is a web application designed to allow you to access a set of machine learning models to place a prediction on the outcome of sports games.",
    "To begin, pick a sport (NBA only at the moment) and choose two teams. Once done, press the simulate button to receive an outcome!",
];

export default function Home() {
    return (
        <div>
            <BubbleContainer texts={texts} />
        </div>
    );
}
