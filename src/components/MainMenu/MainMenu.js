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


// function MainMenu() {
class MainMenu extends React.Component{
    constructor(props){
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
    render(){
        return (
            <Router>
                <Container>
                    <Row>
                        <MainMenuBtn as={Link} to='/Options' choice={"Options"} />
                    </Row>
                </Container>
                <Container>
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
                    {/* <Route path="/Options">
                        <Options />
                    </Route> */}
                    <Route path="/TriviaBoard">
                        <TriviaBoard difficulty={this.state.difficulty} triviaArray={this.state.gameArray}/>
                    </Route>
                </Switch>
            </Router>
        )

    }
    
}

export default MainMenu;