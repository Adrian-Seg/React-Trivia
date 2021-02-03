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