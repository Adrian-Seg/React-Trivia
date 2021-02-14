import Button from 'react-bootstrap/Button';
import MainMenu from '../MainMenu/MainMenu'
import React, { Component } from 'react'

class StartOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: props.onClick,
        }
    }
    buttonDrip = {
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
    render() {
        return (
            <div>
                <Button style={this.buttonDrip} onClick={this.state.refresh}> Reset Game  </Button>
            </div>
        )
    }
}


// const StartOver = (props) => {
    
//     // const handleClick = () => {
//     //     window.location.reload(false);
//     // }
//     return (
//         <>
//             {/* {this.importProps.value === undefined ? <Button style={buttonDrip} onClick={handleClick}> {importProps.choice}  </Button> : <Button style={buttonDrip} onClick={handleClick}> {importProps.value}  </Button> } */}

            
//         </>
        
//     )
// }

export default StartOver;