import { Button, Divider, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import './Suggestions.css'
import { getSuggestions, terminateScheduling } from "../../utils/suggestions";
import { isEmpty } from "lodash";


// Socket connection
const socket = io.connect('http://localhost:5000')


const Suggestions = () => {
    const [seeSuggestion, setSeeSuggestion] = useState(false)
    const [songSuggestion, setSongSuggestion] = useState()
    const [songData, setSongData] = useState()


    // UseEffect to render on recieving data from socket
    useEffect(() => {

        socket.on('message', (message) => {
            console.log('message was: ', message)
        })

        socket.on('data', (songsData) => {
            console.log(songsData)
            setSongData(songsData)
        })

    }, [])


    // Handling data from API
    const getSongSuggestion = async () => {
        const songSuggestionObject = await getSuggestions();
        setSongSuggestion(songSuggestionObject)
    }

    const getSongTermination = async () => {
        const TerminationDetails = await terminateScheduling();
        // set to next job details state
    }



    // Handlers
    const handleSuggestionClick = () => {
        getSongSuggestion();
        setSeeSuggestion(true)
    }

    const handleTerminationClick = () => {
        getSongTermination();
        setSeeSuggestion(false);
    }



    // Render function
    const showSongs = () => {
        if (isEmpty(songData)) {
            return (
                <p>Fetching Data</p>
            )
        } else {
            return (
                <div className="playlist">
                    <div className="playlist-details">
                        <Paper elevation={3} className="image-container">
                            <img className="playlist-art" src={songData.playlistImage} alt="Playlist art" />
                        </Paper>
                        <h2 style={{ textTransform: 'uppercase', fontWeight: 900 }}>{songData.playlistName}</h2>
                        <p>{songData.playlistDetails}</p>
                    </div>
                    <div className="playlist-tracks">
                        <ul>
                            {songData.songs.map(song => {
                                const track = song.track


                                return (
                                    <div className="song-division">
                                        <li className="song-details" key={track.id}>
                                            <div className="song-image">
                                                <img src={track.album.images[2].url} alt="song album art" />
                                            </div>
                                            <div className="song-details">
                                                <h3>{track.name}</h3>
                                                <h4>{track.album.name}</h4>
                                            </div>
                                        </li>
                                        <Divider />
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }



    return (
        <div className="Suggestions" style={{ width: '100%' }}>
            <div className="suggestion-container">
                <Button
                    className={seeSuggestion ? "suggestion-button-hidden" : "suggestion-button"}
                    variant="contained"
                    color="primary"
                    onClick={handleSuggestionClick}
                >
                    Get Suggestions
                </Button>
                {seeSuggestion &&
                    <div className="suggestions-block">
                        <div className="suggestion-control">
                            <p>{'Next job details'}</p>
                            <Button
                                className="suggestion-button"
                                variant="contained"
                                color="primary"
                                onClick={handleTerminationClick}
                            >
                                Terminate scheduling
                            </Button>
                        </div>
                        <Paper elevation={4} style={{
                            padding: '2rem',
                            margin: '2rem'
                        }}>
                            {showSongs()}
                        </Paper>
                    </div>
                }
            </div>
        </div>
    );
}

export default Suggestions;