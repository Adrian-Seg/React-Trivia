import React from 'react';
import ImportedButton from '../../components/ImportedButton/ImportedButton';
import {Questions} from '../questions/questions';
import {Container, Row} from 'react-bootstrap'

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

            showAnswer: false,
            triviaEnd: false,
        };
    }
    nextQuestion = () => {
        // Move to the next question
        currentIndex++;
        // Checking if the questions get to 20, to end game
        if(currentIndex === 20){
            alert("End game")
        }
        
        this.setState ({
            question: Questions[currentIndex].question,
            option1: Questions[currentIndex].option1,
            option2: Questions[currentIndex].option2,
            option3: Questions[currentIndex].option3,
            option4: Questions[currentIndex].option4,
            realAnswer: Questions[currentIndex].answer,
            score: this.state.score
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

    // on button click increment through questions  array, updating the states that we used before

    render() {
        return (
            <div>
                <Container>
                    <Row className="d-flex justify-content-between">
                        <col-6>
                        {/* Adding + 1 because the array starts at 0 */}
                            <h1>Question {currentIndex+1} / 20</h1>
                        </col-6>
                        <col-6>
                            <h1>Score: {this.state.score}</h1>
                        </col-6>
                    </Row>
                </Container>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <col-4>
                            <p>Timer here</p>
                        </col-4>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <col-12>
                            <h1> {this.props.triviaArray[currentIndex].question} </h1>
                        </col-12>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.props.triviaArray[currentIndex].option1} />
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.props.triviaArray[currentIndex].option2} />
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.props.triviaArray[currentIndex].option3} />
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.props.triviaArray[currentIndex].option4} />
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default TriviaBoard;