import React from 'react';
import ImportedButton from '../../components/ImportedButton/ImportedButton';
import Questions from '../questions/questions';
import {Container, Row} from 'react-bootstrap'


let currentIndex = 0;

class TriviaBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentIndex: 0,
            question: Questions[currentIndex].question,
            option1: Questions[currentIndex].option1,
            option2: Questions[currentIndex].option2,
            option3: Questions[currentIndex].option3,
            option4: Questions[currentIndex].option4,
            realAnswer: Questions[currentIndex].answer,

            score: 0,
            userChoice: null,
            showAnswer: false,

            triviaEnd: false,
        };
    }
    nextQuestion = () => {
        currentIndex++;
        this.setState ({
            question: Questions[currentIndex].question,
            option1: Questions[currentIndex].option1,
            option2: Questions[currentIndex].option2,
            option3: Questions[currentIndex].option3,
            option4: Questions[currentIndex].option4,
            realAnswer: Questions[currentIndex].answer,
        })
 
    }

    checkAnswer = (userSelected) => {
        console.log(userSelected)
        // this.setState({
        //     userChoice:  
        // })
        
    }

    // on button click increment through questions  array, updating the states that we used before

    render() {
        return (
            <div>
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