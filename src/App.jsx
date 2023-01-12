import React, { Component } from 'react'
import PersonCard from './components/PersonCard'
import people from './data/people'

export class App extends Component {
  render() {
    return (
      <div className='container border border-secondary my-3 p-3'>
        {
          people.map((person, idx) => {
            return(
              <PersonCard
              key={idx} 
              firstName={person.firstName}
              lastName={person.lastName}
              age={person.age}
              hairColor={person.hairColor}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App
