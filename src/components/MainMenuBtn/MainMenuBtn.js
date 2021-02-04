import Button from 'react-bootstrap/Button'
import {Questions,MediumQuestions, HardQuestions} from '../questions/questions'
import ImportedButton from '../ImportedButton/ImportedButton'

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
    const handleClick = (props) => {
        let randomQuestions;
        let selectedQuestions;
        console.log(props)
        switch(props) {
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
        console.log(selectedQuestions)
        importProps.onClick(props, selectedQuestions);
    }
    return (
        <>
            <ImportedButton style={buttonDrip} onClick={handleClick} value={importProps.choice}/>
        </>
        
    )
}

export default MainMenuBtn;