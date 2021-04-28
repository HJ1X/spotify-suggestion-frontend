import { Button, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import io from "socket.io-client";
import './App.css';
import Suggestions from '../Suggestions/Suggestions';

const socket = io.connect('http://localhost:5000')

function App() {
    const [suggestion, useSuggestion] = useState(false)

    useEffect(() => {
        socket.on('message', (message) => {
            console.log('message was: ', message)
        })
    }, [])

    return (
        <div className="app-container">
            <h1>SPOTIFY <span className="highlight">Job Scheduler</span></h1>
            <div className="App">
                <Search />
                <Divider style={{
                    height: '0.1rem',
                    backgroundColor: '#bbbbbb'
                }} />
                <Suggestions />
            </div>
        </div>
    );
}

export default App;
