import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';
import Music from '../songs/ItsChronic.mp3';
import Clock from '../Clock/Clock'


class MusicPlayer extends React.Component {
    render() {
        return (
            <div>
                <Container className="d-flex justify-content-center mb-5">
                    <h3>Options</h3>
                </Container>
                <Container className="d-flex justify-content-center mb-5">
                    <ReactAudioPlayer
                        src={Music}
                        autoPlay
                        controls
                    />
                </Container>
                <Container className="d-flex justify-content-center mb-5">
                    <Clock />
                </Container>
                <Container className="d-flex justify-content-center">
                    Created By: Adrian Segura
                </Container>


            </div>
        )
    }
}

export default MusicPlayer;