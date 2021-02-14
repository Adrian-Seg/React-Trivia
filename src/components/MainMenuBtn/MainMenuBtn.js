import { Questions, MediumQuestions, HardQuestions} from '../questions/questions'
import ImportedButton from '../ImportedButton/ImportedButton'

const MainMenuBtn = (importProps) => {
    const handleClick = (props) => {
        let randomQuestions;
        let selectedQuestions;

        switch(props) {
            case"Easy":
            randomQuestions = Questions.sort(() => Math.random() - 0.5);
            selectedQuestions = randomQuestions.splice(0,20);
            break;
            case"Medium":
            randomQuestions = MediumQuestions.sort(() => Math.random() - 0.5);
            selectedQuestions = randomQuestions.splice(0,20);
            break;
            case"Hard":
            randomQuestions = HardQuestions.sort(() => Math.random() - 0.5);
            selectedQuestions = randomQuestions.splice(0,20);
            default:
            break;
        }
        importProps.onClick(props, selectedQuestions);
    }
    return (
        <>
            <ImportedButton className="diffBtn" onClick={handleClick} value={importProps.choice}/>
        </>
        
    )
}

export default MainMenuBtn;