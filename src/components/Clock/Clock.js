import React from 'react';
import { Container,Row } from 'react-bootstrap';

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

    tick() {
        this.setState({
            date: new Date(),
        })
    }
    render() {
        return (
            <>
                <Container>
                    <Row className="d-flex justify-content-center clock">
                    {this.state.show ? <h2>It is {this.state.date.toLocaleTimeString()}</h2> : ""}
                    </Row>
                    <Row className="d-flex justify-content-center">
                    {this.state.show ? <button className="clockBtn" onClick={this.hideClock} >Hide Clock </button> : <button className="clockBtn" onClick={this.hideClock} >Show Clock </button>}
                    </Row>
                </Container>
            </>
        )
    }
}
export default Clock;