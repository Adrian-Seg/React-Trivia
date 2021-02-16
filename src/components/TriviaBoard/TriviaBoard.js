import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ImportedButton from '../../components/ImportedButton/ImportedButton';
import { Questions } from '../questions/questions';

// Current index is the position in the array of Questions (Question Number)
let currentIndex = 0;

class TriviaBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timer: 30,
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            realAnswer: "",
            playActive: true,

            gameTimer: 0,
        };
    }

    checkAnswer = (userSelected) => {
        // Conditional to check if the users choice is the real answer, to add a point
        if (userSelected === this.props.triviaArray[currentIndex].answer) {
            this.setState({
                score: this.state.score++,
            })
        }
        // Calling next question function
        this.nextQuestion();
    }

    nextQuestion = () => {
        // Move to the next question
        currentIndex++;
        // Checking if the questions get to 20, to end game
        if (currentIndex === 20) {
            this.endGame();
            this.setState({ playActive: false });
        } else {
            this.setState({
                question: Questions[currentIndex].question,
                option1: Questions[currentIndex].option1,
                option2: Questions[currentIndex].option2,
                option3: Questions[currentIndex].option3,
                option4: Questions[currentIndex].option4,
                realAnswer: Questions[currentIndex].answer,
                score: this.state.score,
                timer: 30,
            })
        }
    }

    endGame() {
        this.setState({
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            realAnswer: "",
            score: this.state.score,
            timer: "30",
        })
    }

    // resetGame = () => {
    //     this.setState({
    //         question: "",
    //         option1: "",
    //         option2: "",
    //         option3: "",
    //         option4: "",
    //         realAnswer: "",
    //         score: 0,
    //         timer: 30,
    //     })
    // }

    finalScore = () => {
        return (
            <>
                <Container className="optionsBG mt-5">
                    <Row>
                        <Col className="finalScore">
                            <p>
                                End of Game friend! 
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="finalScore">
                            <p>
                                Your Score is: {this.state.score}    
                             </p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };

    playArea = () => {
        return (
            <>
                <div>
                    <Container>
                        <Row>
                            <Col className="d-flex justify-content-center optionsBG stats">
                                {/* Adding + 1 because the array starts at 0 */}
                                <p>Question {currentIndex + 1} / 20</p>
                            </Col>
                            <Col className="d-flex justify-content-center optionsBG stats">
                                <p>Score: {this.state.score}</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col className="d-flex justify-content-center optionsBG stats">
                                <p>Time Left: {this.state.timer}</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="questArea optionsBG">
                            <Col xs={10} className="d-flex justify-content-center optionsBG">
                                <p> {this.props.triviaArray[currentIndex].question} </p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="pt-3">
                        <Row>
                            <Col className="d-flex justify-content-around">
                                <ImportedButton onClick={this.checkAnswer} value={this.props.triviaArray[currentIndex].option1} />
                                <ImportedButton onClick={this.checkAnswer} value={this.props.triviaArray[currentIndex].option2} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-around">
                                <ImportedButton onClick={this.checkAnswer} value={this.props.triviaArray[currentIndex].option3} />
                                <ImportedButton onClick={this.checkAnswer} value={this.props.triviaArray[currentIndex].option4} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
    render() {
        return this.state.playActive ? <this.playArea /> : <this.finalScore />;
    }
    // TIMER
    componentDidMount() {
        // this.resetGame();
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                timer: prevState.timer - 1
            }))
            if (this.state.timer === 0) {
                this.nextQuestion();
            }
        }, 1000)
    }
}

export default TriviaBoard;