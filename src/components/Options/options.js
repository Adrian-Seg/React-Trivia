import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';
import Music from '../songs/ItsChronic.mp3';
import Clock from '../Clock/Clock'
import StartOver from '../StartOver/StartOver'


class MusicPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            refresh: props.reload
        }
    }
    render() {
        return (
            <div>
                <Container className="optionsBG">
                    <Row>
                        <Col className="d-flex justify-content-center subtitle">
                            <h3>Options</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center py-5 my-5">
                            <StartOver onClick={this.state.refresh}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center mr-n3">
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
                </Container>
            </div>
        )
    }
}

export default MusicPlayer;