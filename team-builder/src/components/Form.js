import React, { useState } from 'react';

function Form(props){
    const {updateTeam} = props;
    
    const [member, setMember] = useState({ name: "", email: "", role: "",})
                                    
 
    const changeHandler = (event) => {
        const newObj = {...member, [event.target.name]: event.target.value}
        setMember(newObj)
    }

    const submitHandler = event => {
        event.preventDefault()
        updateTeam(member)
        setMember({ name: "", email: "", role: "",})
    }
    
    console.log(member)
    return(
        
            <form onSubmit={submitHandler} class="form">
                <label forhtml="name">Name  <input 
                    id="name" 
                    type="text"
                    name="name"
                    value={member.name}
                    placeholder="Enter Name"
                    onChange={changeHandler}
                    /> 
                </label>
                
                <label forhtml="email">Email  <input 
                    id="email" 
                    type="email"
                    name="email"
                    value={member.email}
                    placeholder="Enter Email"
                    onChange={changeHandler}
                    /> 
                </label>
                
                <label forhtml="role">Role &nbsp;&nbsp;<input 
                    id="role" 
                    type="text"
                    name="role"
                    value={member.role}
                    placeholder="Enter Role"
                    onChange={changeHandler}
                    /> 
                </label>
                <button type="submit">Add Member</button>
            </form>

        
    )
}

export default Form