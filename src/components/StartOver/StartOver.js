import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class StartOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: props.onClick,
        }
    }

    render() {
        return (
            <div>
                <Button className="resetBtn" onClick={this.state.refresh}> Reset Game  </Button>
            </div>
        )
    }
}

export default StartOver;