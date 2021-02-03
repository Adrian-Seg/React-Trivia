import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            show: true
        }
    }
    // Anything that happens in an instance will be in this function
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    hideClock = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    tick(){
        this.setState({
            date: new Date(),
        })
    }
    render(){
        return(
            <div>
                {this.state.show ? <h2>It is {this.state.date.toLocaleTimeString()}</h2> : ""}
                {this.state.show ? <button onClick={this.hideClock} >Hide Clock </button> : <button onClick={this.hideClock} >Show Clock </button>}
                
            </div>
        )
    }
}
export default Clock;