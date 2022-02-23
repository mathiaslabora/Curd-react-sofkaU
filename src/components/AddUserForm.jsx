import React, { useState } from 'react'
import { useForm } from 'react-hook-form'



const AddUserForm = (props) => {

    const { register, handleSubmit, formState:{errors} } = useForm();

const onSubmit = (data, e)=>{
    props.addUser(data)
e.target.reset();
}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" 
      {...register("name", {
            required: true
          })} />
         {errors.name?.type==="required" && <div>campo requerido</div> }
          
      <label>Username</label>
      <input type="text" 
      {...register("userName", {
            required: true, message:'campo requerido'
          })}/>
 {errors.userName?.type==="required" && <div>campo requerido</div> }
      <button type='submit'>Add new user</button>
    </form>
  )
}

export default AddUserForm