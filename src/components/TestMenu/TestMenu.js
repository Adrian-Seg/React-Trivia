import React from 'react';
import { Container, Row } from 'react-bootstrap'
import ImportedButton from '../ImportedButton/ImportedButton'
import { Questions } from '../questions/questions'
import { TriviaBoard} from '../TriviaBoard/TriviaBoard'


const TestMenu = () => {
    const optionsDrip = {
        width: "1200px",
        height: "90px",
        backgroundColor: "Maroon",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px"
    }
    const buttonDrip = {
        width: "240px",
        height: "120px",
        backgroundColor: "Maroon",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px"
    }
    const EasyMode = (userSelected) => {
        let randomQuestions = Questions.sort(() => Math.random() - 0.5)
        let easyQuestions = randomQuestions.splice(0,20);
        // if(userSelected === "Easy"){

        // }
        
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
                    <ImportedButton style={optionsDrip} onClick={LoadOptions} choice={"Options"}> </ImportedButton>  
                </Row>
            </Container>
            <Container>
                <Row>
                    <ImportedButton style={buttonDrip} onClick={EasyMode} choice={"Easy"}> </ImportedButton>
                    <ImportedButton style={buttonDrip} onClick={MediumMode} choice={"Medium"}> </ImportedButton>
                    <ImportedButton style={buttonDrip} onClick={HardMode} choice={"Hard"}> </ImportedButton>
                </Row>
            </Container>
        </Container>
    )
}
export default TestMenu;