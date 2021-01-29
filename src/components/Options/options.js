import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Music from '../songs/ItsChronic.mp3'

class MusicPlayer extends React.Component {
    render() {
        return (
            <div>
                <ReactAudioPlayer
                    src={Music}
                    autoPlay
                    controls
                />
            </div>
        )
    }
}

export default MusicPlayer;