import React from 'react';
import ImportedButton from '../../components/ImportedButton/ImportedButton';
import {Questions} from '../questions/questions';
import {Container, Row, Col} from 'react-bootstrap'

// Current index is the position in the array of Questions (Question Number)
let currentIndex = 0;

class TriviaBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            realAnswer: "",
            score: 0,
            timer: 30,

            showAnswer: false,
            // if triviaEnd is set to true, this will trigger score screen.
            triviaEnd: false,
        };
    }
    endGame() {
        alert("End Game")
    }
    nextQuestion = () => {
        // Move to the next question
        currentIndex++;
        // Checking if the questions get to 20, to end game
        if(currentIndex === 20){
            this.endGame();
        }
        
        this.setState ({
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

    // on button click increment through questions array, updating the states that we used before

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                        {/* Adding + 1 because the array starts at 0 */}
                            <h1>Question {currentIndex+1} / 20</h1>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <h1>Score: {this.state.score}</h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <h1>Time Left: {this.state.timer}</h1>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <h1> {this.props.triviaArray[currentIndex].question} </h1>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <ImportedButton onClick={this.checkAnswer} choice={this.props.triviaArray[currentIndex].option1} />
                        <ImportedButton onClick={this.checkAnswer} choice={this.props.triviaArray[currentIndex].option2} />
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <ImportedButton onClick={this.checkAnswer} choice={this.props.triviaArray[currentIndex].option3} />
                        <ImportedButton onClick={this.checkAnswer} choice={this.props.triviaArray[currentIndex].option4} />
                    </Row>
                </Container>
            </div>
        )
    }
    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                timer: prevState.timer - 1
            }))
            if (this.state.timer === 0){
                this.nextQuestion();
            }
        }, 1000)
    }
}

export default TriviaBoard;