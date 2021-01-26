import React from 'react';

import Hero from './components/Hero';
import Joke from './components/Joke';
import JokeTile from './components/JokeTile';
import Footer from './components/Footer';

import './App.sass';

const jokes = [
    {
        question: "My wife told me to stop acting like a flamingo.",
        punchline: "I had to put my foot down!"
    }, 
    {
        question: "What is Whitney Huston's favorite type of coordination?",
        punchline: "HAAANNNND EYEEEEEEEE!"
    }, 
    {
        question: "Why does Waldo wear stripes?",
        punchline: "Because he doesn't want to be spotted!"
    },
    {
        question: "A man enters a pun contest in his local newspaper. He sends in ten puns, hoping at least one of them would win, but unfortunately...",
        punchline: "No pun in ten did!"
    },
    {
        question: "A priest, a pastor, and a rabbi walk into a bar. The bartender says...",
        punchline: "Whas is this, some kind of joke?!"
    }
];

const App = () => {
    return (
        <div>
            <Hero />
            <JokeTile jokes={jokes}/>
            <Footer />
        </div>
    );
}

export default App;