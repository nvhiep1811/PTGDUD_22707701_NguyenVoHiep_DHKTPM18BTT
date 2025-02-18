/* eslint-disable react/prop-types */
import React from 'react'

class DisplayInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }
    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        // eslint-disable-next-line react/prop-types
        const {listUser} = this.props;
        return (    
            <div>
                <hr />
                <button onClick={this.handleShowHide}>{this.state.isShow ? 'Hide' : 'Show'} list</button>
                <div className="list" hidden={!this.state.isShow}>
                    {listUser.map(user => {
                        return <div key={user.id} className={user.age < 18 ? 'red':'blue'}>
                            <p>User name: {user.name}</p>
                            <p>User age: {user.age}</p>
                            <button onClick={() => {
                                this.props.handleDeleteUser(user.id);
                            }}>Delete</button>
                            <hr />
                        </div>
                    })} 
                </div>
            </div>
        );
    }
}

export default DisplayInfor