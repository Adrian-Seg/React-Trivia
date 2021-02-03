import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Music from '../songs/ItsChronic.mp3';
import Clock from '../Clock/Clock'

class MusicPlayer extends React.Component {
    render() {
        return (
            <div>
                <ReactAudioPlayer
                    src={Music}
                    autoPlay
                    controls
                />
                <Clock />
            </div>
        )
    }
}

export default MusicPlayer;