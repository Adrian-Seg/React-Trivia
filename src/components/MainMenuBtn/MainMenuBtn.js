import Button from 'react-bootstrap/Button'
import {Questions,MediumQuestions, HardQuestions} from '../questions/questions'

const MainMenuBtn = (importProps) => {
    const buttonDrip = {
        display: "Flex",
        justifyContent: "Center",
        alignItems: "Center",
        width: "200px",
        height: "120px",
        backgroundColor: "Blue",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px",
        marginBottom: "10px"
    }
    const handleClick = () => {
        let randomQuestions;
        let selectedQuestions;

        switch(importProps.choice) {
            case"Easy":
            randomQuestions = Questions.sort(() => Math.random() - 0.5);
            selectedQuestions = randomQuestions.splice(0,20);
            break;
            case"Medium":
            randomQuestions = MediumQuestions.sort(() => Math.random() - 0.5);
            selectedQuestions = randomQuestions.splice(0,20);
            break;
            default:
            randomQuestions = HardQuestions.sort(() => Math.random() - 0.5);
            selectedQuestions = randomQuestions.splice(0,20);
            break;
        }
        importProps.onClick(importProps.choice, selectedQuestions);
    }
    return (
        <>
            <Button style={buttonDrip} onClick={handleClick}> {importProps.choice}  </Button>
        </>
        
    )
}

export default MainMenuBtn;