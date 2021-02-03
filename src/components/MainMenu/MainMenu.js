import React from 'react';
import { Container, Row } from 'react-bootstrap'
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
    setDifficulty = (diff, arr) => {
        this.setState({
            difficulty: diff,
            gameArray: arr
        })
    }
    render() {
        return (
            <>
                <Router>
                    <Container className="d-flex justify-content-center">
                        <Row>
                            <Link as={Link} to='/TriviaBoard'>
                                <MainMenuBtn onClick={this.setDifficulty} choice={"Easy"} />
                                <MainMenuBtn onClick={this.setDifficulty} choice={"Medium"} />
                                <MainMenuBtn onClick={this.setDifficulty} choice={"Hard"} />
                            </Link>
                        </Row>
                    </Container>
                    <hr />

                    <Switch>
                        <Route path="/TriviaBoard">
                            <TriviaBoard difficulty={this.state.difficulty} triviaArray={this.state.gameArray} />
                        </Route>
                    </Switch>
                </Router>
                <Container className="d-flex justify-content-center">
                    <Options />
                    <Clock />
                </Container>
                
            </>
        )

    }

}

export default MainMenu;