import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';
import Music from '../songs/ItsChronic.mp3';
import Clock from '../Clock/Clock'
import ImportedButton from '../ImportedButton/ImportedButton';
import StartOver from '../StartOver/StartOver'


class MusicPlayer extends React.Component {
    resetGame(props){
        
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <h3>Options</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center py-5 my-5">
                            <StartOver></StartOver>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                        <ReactAudioPlayer
                        src={Music}
                        autoPlay
                        controls
                    />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center py-5 my-5">
                            <Clock />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            Created By: Adrian Segura
                        </Col>
                    </Row>
                </Container>
                


            </div>
        )
    }
}

export default MusicPlayer;