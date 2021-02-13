import React from 'react'
import TriviaBoard from '../TriviaBoard/TriviaBoard'
import { Container, Row, Col } from 'react-bootstrap'


class EndGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: TriviaBoard.props.score,
            gameTimer: TriviaBoard.props.gameTimer,
        }
    }
    render() {
        return(
            <>
                <Container> 
                    <Row>
                        <Col>
                            You got {this.props.score}/20 Correct!
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            It took you {this.props.timer}!
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default EndGame