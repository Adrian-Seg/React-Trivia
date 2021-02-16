import Button from 'react-bootstrap/Button'

const ImportedButton = (importProps) => {

    const handleClick = () => {
        importProps.onClick(importProps.value)
    }
    return (
        <>
            <Button className={importProps.className}  onClick={handleClick}> {importProps.value}  </Button>
        </>
    )
}

export default ImportedButton;