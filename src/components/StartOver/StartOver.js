import Button from 'react-bootstrap/Button';
import MainMenu from '../MainMenu/MainMenu'


const StartOver = (importProps) => {
    const buttonDrip = {
        width: "160px",
        height: "90px",
        padding: "10px",
        backgroundColor: "Blue",
        borderStyle: "Solid",
        borderWidth: "Medium",
        borderColor: "Black",
        fontWeight: "400",
        fontSize: "22px",
    }
    const handleClick = () => {
        window.location.reload(false);
    }
    return (
        <>
            {/* {this.importProps.value === undefined ? <Button style={buttonDrip} onClick={handleClick}> {importProps.choice}  </Button> : <Button style={buttonDrip} onClick={handleClick}> {importProps.value}  </Button> } */}

            <Button style={buttonDrip} onClick={handleClick}> Reset Game  </Button>
        </>
        
    )
}

export default StartOver;