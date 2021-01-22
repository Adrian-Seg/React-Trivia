import React from 'react';
import { Container, Row } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainMenuBtn from '../MainMenuBtn/MainMenuBtn'
import TriviaBoard from '../TriviaBoard/TriviaBoard';


function MainMenu() {
    
    return (
        <Router>
            <Container>
                <Row>
                    <MainMenuBtn as={Link} to='/Options' choice={"Options"}> </MainMenuBtn>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Link as={Link} to='/TriviaBoard'>
                        <MainMenuBtn choice={"Easy"}> </MainMenuBtn>
                        <MainMenuBtn choice={"Medium"}> </MainMenuBtn>
                        <MainMenuBtn choice={"Hard"}> </MainMenuBtn>
                    </Link>
                </Row>
            </Container>
            <hr />

            <Switch>
                {/* <Route path="/Options">
                    <Options />
                </Route> */}
                <Route path="/TriviaBoard">
                    <TriviaBoard />
                </Route>
                <Route path="/TriviaBoard">
                    <TriviaBoard />
                </Route>
                <Route path="/TriviaBoard">
                    <TriviaBoard />
                </Route>
            </Switch>
        </Router>
    )
}

export default MainMenu;