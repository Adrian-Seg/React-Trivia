import React from 'react';


class TriviaBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            triviaEnd: false,
            score: 0,
            disabled: true
        };
    }

    loadTrivia = () => {
        const {currentIndex} = this.state;
        this.setState({
            
        })
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}
export default TriviaBoard;