import React from 'react';
import { Container, Row, Button } from 'react-bootstrap'
import { Questions } from '../questions/questions'


const MainMenu = () => {
    const EasyMode = () => {
        let randomQuestions = Questions.sort(() => Math.random() - 0.5)
        let easyQuestions = randomQuestions.splice(0,20);
        
        console.log(easyQuestions)
    }
    const MediumMode = () => {
        // let randomQuestions = MediumQuestions.sort(() => Math.random() - 0.5)
        // let lvl2Questions = randomQuestions.splice(0,20);
        
        // console.log(lvl2Questions)
    }
    const HardMode = () => {
        // let randomQuestions = HardQuestions.sort(() => Math.random() - 0.5)
        // let lvl3Questions = randomQuestions.splice(0,20);
        
        // console.log(lvl3Questions)
    }
    const LoadOptions = () => {

    }
    return(
        <Container>
            <Container>
                <Row>
                    <Button onClick={LoadOptions}>Options</Button>  
                </Row>
            </Container>
            <Container>
                <Row>
                    <Button onClick={EasyMode}>Easy</Button>
                    <Button onClick={MediumMode}>Medium</Button>
                    <Button onClick={HardMode}>Hard</Button>
                </Row>
            </Container>
        </Container>
    )
}



export default MainMenu;