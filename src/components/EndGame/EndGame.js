import React from 'react'
import TriviaBoard from '../TriviaBoard/TriviaBoard'
import Options from '../Options/Options'

class EndGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: props.score,
        }
    }
}