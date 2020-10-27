import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }
        
    }

    changeColor = () => {
        const newValue = "#333"
        this.setState({
            color: newValue
        })
    }
    

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
                
            </div>
        );
    }
}

export default Cell;