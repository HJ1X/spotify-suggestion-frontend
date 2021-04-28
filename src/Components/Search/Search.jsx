import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import './Search.css'

const Search = () => {
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [trackName, setTrackName] = useState('')

    const handleClick = () => {
        console.log({
            trackName,
            artist,
            album
        })
    }

    return (
        <div className="Search">
            <div className="search-container">
                <TextField className="search-bar" onChange={(e) => setTrackName(e.target.value)} value={trackName} label="Track Name" variant="outlined" />
                <TextField className="search-bar" onChange={(e) => setArtist(e.target.value)} value={artist} label="Artist" variant="outlined" />
                <TextField className="search-bar" onChange={(e) => setAlbum(e.target.value)} value={album} label="Album" variant="outlined" />

                <Button className="search-button" variant="contained" color="primary" style={{
                    width: '10rem',
                    height: '2.5rem',
                    borderRadius: '3rem'
                }}
                    onClick={handleClick}
                >
                    Search
                </Button>
            </div>
        </div>
    );
}

export default Search;