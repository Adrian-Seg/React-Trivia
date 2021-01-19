import Button from 'react-bootstrap/Button'

const ImportedButton = (importProps) => {
    const buttonDrip = {
        width: "60px",
        height: "60px",
        backgroundColor: "Maroon",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px"
    }
    const handleClick = () => importProps.onClick(importProps)
    return (
        <Button style={buttonDrip} onClick={handleClick}>
            {importProps.choice1}
        </Button>
    )
}

export default ImportedButton;