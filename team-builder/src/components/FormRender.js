import React from 'react';

function FormRender(props){

    const {teamMember} = props
    // console.log(teamMember.name)
    return(
        <div className = "container">
           <h3>{teamMember.name}</h3>
           <p>Email: {teamMember.email}</p>
           <p>Role: {teamMember.role}</p>
        </div>
    )
}

export default FormRender