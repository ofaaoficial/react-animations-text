import React from 'react';
import './App.css';
import GameOne from './components/GameOne';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';

const App = () => {
    const words = [
        'pie',
        'talón',
        'espinilla',
        'rodilla',
        'bigote',
        'cabello',
        'oreja',
        'cerebro',
    ];
    const phrases = [
        "mi primo dichoso combatiendo irregularidades",
        "y su mano sedosa acariciaba delicadamente",
        "si ese plazo quizás caducará próximamente",
        "en lectura avanzada desarrollan habilidades intelecturales"
    ];
    const time = 60; // 60 Seconds
    const speed = 150; // The lower the value, the higher the speed.
    const styles = {
        fontFamily: 'Arial", serif',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#7cba31'
    };

    return (
        <main>
            <h2>Game One (words)</h2>
            <GameOne time={time} content={words} speed={speed} styles={styles}/>
            <h2>Game One (phrases)</h2>
            <GameOne time={time} content={phrases} speed={speed} styles={styles} type={2}/>
            <hr/>
            <h2>Game Two</h2>
            <GameTwo time={time} content={phrases} speed={speed} styles={styles}/>
            <h2>Game Three</h2>
            <GameThree time={time} speed={1} styles={styles}/>
        </main>
    );
};

export default App;
