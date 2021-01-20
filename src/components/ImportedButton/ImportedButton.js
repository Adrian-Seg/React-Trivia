import Button from 'react-bootstrap/Button'

const ImportedButton = (importProps) => {
    const buttonDrip = {
        width: "360px",
        height: "240px",
        backgroundColor: "Maroon",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px"
    }
    const handleClick = () => importProps.onClick(importProps)
    return (
        <>
            <Button style={buttonDrip} onClick={handleClick}> {importProps.choice1} {importProps.choice2} {importProps.choice3} {importProps.choice4} </Button>
        </>
        
    )
}

export default ImportedButton;