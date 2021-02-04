import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainMenuBtn from '../MainMenuBtn/MainMenuBtn'
import Clock from '../Clock/Clock'
import TriviaBoard from '../TriviaBoard/TriviaBoard';
import Options from '../Options/Options'


// function MainMenu() {
class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: "",
            gameArray: []
        }
    }
    resetBtns = () => {
        this.setState({
            difficulty: ""
        })
    }
    setDifficulty = (diff, arr) => {
        // if (this.state.difficulty !== "") {

        // }
        this.setState({
            difficulty: diff,
            gameArray: arr
        })
    }

    render() {
        return (
            <>
                <Container fluid className="pt-5">
                    <Row>
                        <Router>
                            <Col xs={2}>
                                {/* 1 > 0 ? console.log(true) : console.log(else)
                                1 > 0 && console.log(true) */}
                                {this.state.difficulty === "" &&
                                    <>
                                        <Row className="d-flex justify-content-center align-items-center">
                                            <p>Set Difficulty</p>
                                        </Row>
                                        <Row className="d-flex justify-content-center align-items-center">
                                            <Link as={Link} to='/TriviaBoard'>
                                                <MainMenuBtn onClick={this.setDifficulty} choice={"Easy"} />
                                                <MainMenuBtn onClick={this.setDifficulty} choice={"Medium"} />
                                                <MainMenuBtn onClick={this.setDifficulty} choice={"Hard"} />
                                            </Link>
                                        </Row>
                                    </>
                                }

                            </Col>
                            <Col xs={8}>
                                <Switch>
                                    <Route path="/TriviaBoard">
                                        <TriviaBoard difficulty={this.state.difficulty} triviaArray={this.state.gameArray} gameEnd={this.resetBtns} />
                                    </Route>
                                </Switch>
                            </Col>
                        </Router>
                        <Col xs={2} className="d-flex justify-content-center align-items-center">
                            <Options />
                        </Col>
                    </Row>
                </Container>
            </>
        )

    }

}

export default MainMenu;