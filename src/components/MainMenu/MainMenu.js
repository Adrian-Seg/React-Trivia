import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainMenuBtn from '../MainMenuBtn/MainMenuBtn'
import TriviaBoard from '../TriviaBoard/TriviaBoard';
import Options from '../Options/Options'
import '../../styles.css'

// function MainMenu() {
class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: "",
            gameArray: [],
        }
    }
    resetBtns = () => {
        this.setState({
            difficulty: "",
            
        })
    }
    setDifficulty = (diff, arr) => {
        console.log(diff, arr)
        // if (this.state.difficulty !== "") {

        // }
        this.setState({
            difficulty: diff,
            gameArray: arr
        })
    }

    handleClick = () => {
        window.location.reload(false);
    }
    
    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col className="d-flex justify-content-center pt-5 title">
                            Trivi..ahaha
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="">
                    <Row>
                        <Router>
                            <Col xs={2}>
                                {/* 1 > 0 ? console.log(true) : console.log(else)
                                1 > 0 && console.log(true) */}
                                {this.state.difficulty === "" &&
                                    <>
                                        <Row className="d-flex justify-content-center align-items-center optionsBG subtitle">
                                            <p>Set Difficulty</p>
                                        </Row>
                                        <Row className="d-flex justify-content-center align-items-center optionsBG">
                                            
                                                <MainMenuBtn onClick={this.setDifficulty} choice={"Easy"} />
                                                <MainMenuBtn onClick={this.setDifficulty} choice={"Medium"} />
                                                <MainMenuBtn onClick={this.setDifficulty} choice={"Hard"} />
                                            
                                        </Row>
                                    </>
                                }

                            </Col>
                            <Col xs={8}>
                                {/* <Switch>
                                    <Route path="/TriviaBoard"> */}
                                    {this.state.difficulty !== "" &&
                                        <>
                                            <TriviaBoard difficulty={this.state.difficulty} triviaArray={this.state.gameArray} gameEnd={this.resetBtns} />

                                        </>
                                    }
                                    {/* </Route>
                                </Switch> */}
                            </Col>
                        </Router>
                        <Col xs={2} className="d-flex justify-content-center">
                            <Options reload={this.handleClick} />
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col className="d-flex justify-content-end pt-3 credits">
                            Created By: Adrian Segura
                        </Col>
                    </Row>
                </Container>
            </>
        )

    }

}

export default MainMenu;