import React, {Component} from 'react';
import "./Keypad.css";

class Keypad extends Component {
    render(){
        return(
            <div className="Keypad">
                {this.props.children}
            </div>
        );
    }
}

export default Keypad;