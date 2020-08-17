import React, { useState } from 'react';
import './App.css';
import dummyData from './data/dummyData'
import FormRender from './components/FormRender'
import Form from './components/Form'

function App() {
  
  const [team, setTeam] = useState(dummyData)

  const updateTeam = (member) => {
    const newObj ={
      name: member.name,
      email: member.email,
      role: member.role,
    }

    setTeam([...team, newObj])
    console.log(team)
  }

  return (
    <div>
      
      <Form updateTeam={updateTeam} />
      {
        team.map((teamMember)=>{
          return <FormRender teamMember={teamMember}/> 
        })
      }
    </div>
  );
}

export default App;
