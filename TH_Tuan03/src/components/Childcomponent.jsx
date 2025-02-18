import React from 'react'

class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNameInput: '',
            valueAgeInput: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            valueNameInput: event.target.value,
            valueAgeInput: event.target.value
        })
    }
    render() {
        return (
            <div>
                <p>Name: {this.state.valueNameInput}</p>
                <p>Age: {this.state.valueAgeInput}</p>
                <form action="">
                    <input type="text" value={this.state.valueNameInput} onChange={(event) => {this.handleInput(event)}} />
                    <br />
                    <input type="text" value={this.state.valueAgeInput} onChange={(event) => {this.handleInput(event)}} />
                    <br />
                </form>
            </div>
        );
    }
}

export default Childcomponent