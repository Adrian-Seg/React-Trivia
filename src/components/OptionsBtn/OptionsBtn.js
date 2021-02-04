import Button from 'react-bootstrap/Button'

const OptionsBtn = (importProps) => {
    const buttonDrip = {
        width: "240px",
        height: "160px",
        backgroundColor: "Maroon",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px"
    }
    const handleClick = () => {

    }
    return (
        <>
            <ImportedButton style={buttonDrip} onClick={handleClick} value={importProps.choice}   />
        </>
        
    )
}

export default OptionsBtn;