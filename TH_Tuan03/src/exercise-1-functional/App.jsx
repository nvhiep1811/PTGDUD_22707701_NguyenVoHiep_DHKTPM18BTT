import React from 'react'

function App() {
    const chidi = {
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "St. John's University, Sydney, Australia"
    }
  return (
    <div>
        <h3>{chidi.firstName}</h3>
        <p>{chidi.lastName}</p>
        <hr />
        <span>{chidi.phone}</span>
        <br />
        <span>{chidi.address}</span>
    </div>
  )
}

export default App