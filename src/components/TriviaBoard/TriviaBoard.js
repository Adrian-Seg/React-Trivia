import React from 'react';
import ImportedButton from '../../components/ImportedButton/ImportedButton';
import Questions from '../../components/questions/easyQuestions';




class TriviaBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            userAnswer: null,
            realAnswer: null,
            currentIndex: 0,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            triviaEnd: false,
            score: 0,
            disabled: true
        };
    }
    // nextQuestion = () => {

    // }

    checkAnswer = (importedPropsFromButton) => {
        console.log(importedPropsFromButton.choice1);
        // const { currentIndex } = this.state;
        // this.setState({

        // })
    }
    
    // on button click increment through questions  array, updating the states that we used before

    render() {
        return (
            <div>
                <container className="d-flex justify-content-center">
                    <row>
                        <col-12>
                            <h1> {this.state.questions} </h1>
                        </col-12>
                    </row>
                </container>
                <container className="d-flex justify-content-center">
                    <row>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice1={this.state.option1}> </ImportedButton>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice2={this.state.option2}> </ImportedButton>
                    </row>
                </container>
                <container className="d-flex justify-content-center">
                    <row>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice3={this.state.option3}> </ImportedButton>
                        <ImportedButton onClick={this.checkAnswer} increment={1} choice4={this.state.option4}> </ImportedButton>
                    </row>
                </container>
            </div>
        )
    }
}
export default TriviaBoard;