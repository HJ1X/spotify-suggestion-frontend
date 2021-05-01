import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { findSongs } from "../../utils/suggestions";
import './Search.css'

const Search = () => {
    const [artist, setArtist] = useState('')
    const [trackName, setTrackName] = useState('')

    const handleClick = async () => {
        const requestObject = {
            trackName,
            artist
        }

        console.log(requestObject)
        const response = await findSongs(requestObject)

        console.log(response)
    }

    return (
        <div className="Search">
            <div className="search-container">
                <TextField className="search-bar" onChange={(e) => setTrackName(e.target.value)} value={trackName} label="Track Name" variant="outlined" />
                <TextField className="search-bar" onChange={(e) => setArtist(e.target.value)} value={artist} label="Artist" variant="outlined" />

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