import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/constant'
import DynamicForm from '../../components/DynamicForm'
import { userSchema } from "../../schemas/userSchema"

function EditUser() {
  const navigate = useNavigate()
  // const { id } = useParams()
  const { state } = useLocation()
  // console.log(state)
  const [user, setUser] = useState(state)
  // console.log(user);

  const handleUpdate = async(data) => {
    await axios.put(`${BASE_URL}/users/${user.id}`, data)
    navigate('/users')
  }
  

  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email" }
  ]
  return (
    <>
      <h2>Edit Users</h2>
      <DynamicForm 
        fields={fields}
        defaultValues={user}
        onSubmit={handleUpdate}
        schema={userSchema}
      />
    </>
  )
}

export default EditUser