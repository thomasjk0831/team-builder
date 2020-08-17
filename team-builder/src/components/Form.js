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
        <div className='container'>
            <form onSubmit={submitHandler}>
                <label forhtml="name">Name</label>
                <input 
                    id="name" 
                    type="text"
                    name="name"
                    value={member.name}
                    placeholder="Enter Name"
                    onChange={changeHandler}
                    /> 
                
                <label forhtml="email">Email</label>
                <input 
                    id="email" 
                    type="text"
                    name="email"
                    value={member.email}
                    placeholder="Enter Email"
                    onChange={changeHandler}
                    /> 
                
                <label forhtml="role">Role</label>
                <input 
                    id="role" 
                    type="text"
                    name="role"
                    value={member.role}
                    placeholder="Enter Role"
                    onChange={changeHandler}
                    /> 
                <button type="submit">Add Member</button>
            </form>

        </div>
    )
}

export default Form