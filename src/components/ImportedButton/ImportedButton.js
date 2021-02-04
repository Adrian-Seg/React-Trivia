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
        importProps.onClick(importProps.value)
    }
    return (
        <>
            {/* {this.importProps.value === undefined ? <Button style={buttonDrip} onClick={handleClick}> {importProps.choice}  </Button> : <Button style={buttonDrip} onClick={handleClick}> {importProps.value}  </Button> } */}

            <Button style={buttonDrip} onClick={handleClick}> {importProps.value}  </Button>
        </>
        
    )
}

export default ImportedButton;