import React from 'react';

class AddUserInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.age) {
            alert('Nhập đầy đủ tên(name) và tuổi(age)');
            return;
        }
        // eslint-disable-next-line react/prop-types
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            name: this.state.name,
            age: this.state.age
        })

    }
    handleNameInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleAgeInput = (event) => {
        this.setState({
            age: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <span>Name: {this.state.name}</span>
                <br />
                <span>Age: {this.state.age}</span>
                <br />
                <span>Address: HCM</span>
                <form action="" onSubmit={this.handleOnSubmit}> 
                    <label htmlFor="Name">Name: </label>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} />
                    <br />
                    <label htmlFor="Age">Age: </label>
                    <input type="text" placeholder="Age" value={this.state.age} onChange={(e) => this.handleAgeInput(e)} />
                    <br />
                    <button onClick={this.handleOnSubmit}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;