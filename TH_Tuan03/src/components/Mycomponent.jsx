import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            {id: 1, name: 'John', age: 25},
            {id: 2, name: 'Jane', age: 17},
            {id: 3, name: 'Doe', age: 26}
        ]
    }

    handleAddNewUser = (user) => {
        this.setState({
            listUser: [user, ...this.state.listUser]
        })
    }

    handleDeleteUser = (id) => {
        let newListUser = this.state.listUser.filter(user => user.id !== id);
        this.setState({
            listUser: newListUser
        })
    }

    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
                <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}></DisplayInfor>
            </div>
        );
    }
}
export default MyComponent;