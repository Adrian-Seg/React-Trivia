import Button from 'react-bootstrap/Button'


const ImportedButton = (importProps) => {
    const buttonDrip = {
        width: "300px",
        height: "180px",
        padding: "10px",
        backgroundColor: "Blue",
        borderStyle: "Solid",
        borderWidth: "Medium",
        borderColor: "Black",
        fontWeight: "400",
        fontSize: "30px"
    }
    const handleClick = () => {
        importProps.onClick(importProps.choice)
    }
    return (
        <>
            <Button style={buttonDrip} onClick={handleClick}> {importProps.choice}  </Button>
        </>
        
    )
}

export default ImportedButton;