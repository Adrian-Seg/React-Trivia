import { useState } from 'react';

function Player() {
    const [songs,setSongs = useState([
        {
            title: "La Hague",
            artist: "Blumen",
            src: "./components/songs/Blumen-LaHague.mp3"
        },
        {
            title: "It's Chronic",
            artist: "HM Surf",
            src: "./components/songs/ItsChronic.mp3"
        },
        {
            title: "Midnight Cigs",
            artist: "Gubble.",
            src: "./components/songs/MidnightCigs.mp3"
        },
        {
            title: "Harry",
            artist: "Redmatic レド",
            src: "./components/songs/Harry.mp3"
        }
    ])];
    return(
        <div>
            <audio></audio>
            <h4>Playing Now</h4>
            {/* {DETAILS} */}
            {/* {CONTROLS} */}
        </div>
    )
}