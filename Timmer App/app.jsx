import React, { useState, useEffect } from 'react';
import './App.css';

function Timer() {
    const [time, setTime] = useState(0);        // State to track elapsed time in seconds
    const [isRunning, setIsRunning] = useState(false); // State to track timer status (running or stopped)

    // Toggle timer on and off
    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    // Update the timer every second when it's running
    useEffect(() => {
        let timerInterval = null;

        if (isRunning) {
            timerInterval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timerInterval);
        }

        return () => clearInterval(timerInterval); // Clean up interval on unmount
    }, [isRunning]);

    // Format time in hh:mm:ss format
    const formatTime = () => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="timer">
            <h1>Timer Application</h1>
            <div className="time-display">{formatTime()}</div>

            <div className="button-group">
                <button onClick={startTimer} disabled={isRunning}>Start</button>
                <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default Timer;
