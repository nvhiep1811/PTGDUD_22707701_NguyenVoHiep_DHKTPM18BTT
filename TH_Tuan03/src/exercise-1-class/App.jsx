import React from 'react';

class App extends React.Component {
    chidi = {
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "St. John's University, Sydney, Australia"
    }
    render() {
        return (
            <div>
                <h3>{this.chidi.firstName}</h3>
                <p>{this.chidi.lastName}</p>
                <hr />
                <span>{this.chidi.phone}</span>
                <br />
                <span>{this.chidi.address}</span>
            </div>
        );
    }
}

export default App;