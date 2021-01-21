import React from 'react';
import ImportedButton from '../../components/ImportedButton/ImportedButton';
import Questions from '../questions/questions';
import {Container, Row} from 'react-bootstrap'


let currentIndex = 0;

class TriviaBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: Questions[currentIndex].question,
            option1: Questions[currentIndex].option1,
            option2: Questions[currentIndex].option2,
            option3: Questions[currentIndex].option3,
            option4: Questions[currentIndex].option4,
            realAnswer: Questions[currentIndex].answer,
            score: 0,
            questionNum: 0,

            userChoice: null,
            showAnswer: false,

            triviaEnd: false,
        };
    }
    nextQuestion = () => {
        // Current index is the position in the array of Questions (Question Number)
        currentIndex++;
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
        console.log(userSelected)
        console.log(this.state.realAnswer)
        if (userSelected === this.state.realAnswer) {
            this.setState({
                score: this.state.score++,
            })
        }
        console.log(this.state.score)
        this.nextQuestion();
    }

    // on button click increment through questions  array, updating the states that we used before

    render() {
        return (
            <div>
                <Container>
                    <Row className="d-flex justify-content-between">
                        <col-4>
                            <h1>Question {currentIndex+1} / 20</h1>
                        </col-4>
                        <col-4>
                            Timer here
                        </col-4>
                        <col-4>
                            <h1>Score: {this.state.score}</h1>
                        </col-4>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <col-12>
                            <h1> {this.state.question} </h1>
                        </col-12>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.state.option1}> </ImportedButton>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.state.option2}> </ImportedButton>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.state.option3}> </ImportedButton>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice={this.state.option4}> </ImportedButton>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default TriviaBoard;