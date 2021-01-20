import React from 'react';
import ImportedButton from '../../components/ImportedButton/ImportedButton';
import Questions from '../questions/questions';




class TriviaBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: Questions[0].question,
            option1: Questions[0].option1,
            option2: Questions[0].option2,
            option3: Questions[0].option3,
            option4: Questions[0].option4,
            realAnswer: Questions[0].answer,

            score: 0,
            userAnswer: null,

            triviaEnd: false,
            disabled: true,

            currentIndex: 0,
        };
    }
    nextQuestion = () => {
        
    }

    checkAnswer = (importedPropsFromButton) => {
        console.log(Questions[0].question);
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
                            <h1> {this.state.question} </h1>
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