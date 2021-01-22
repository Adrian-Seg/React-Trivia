import Button from 'react-bootstrap/Button'
import {Questions} from '../questions/questions'

const MainMenuBtn = (importProps) => {
    const buttonDrip = {
        width: "240px",
        height: "160px",
        backgroundColor: "Maroon",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px"
    }
    const handleClick = (importProps) => {
        if (importProps.choice === "Easy"){
            let randomQuestions = Questions.sort(() => Math.random() - 0.5)
            let easyQuestions = randomQuestions.splice(0,20);
            return easyQuestions;
            console.log(easyQuestions)
        }
    }
    return (
        <>
            <Button style={buttonDrip} onClick={handleClick}> {importProps.choice}  </Button>
        </>
        
    )
}

export default MainMenuBtn;