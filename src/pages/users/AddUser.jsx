import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/constant'
import DynamicForm from '../../components/DynamicForm'
import { userSchema } from "../../schemas/userSchema"

function AddUser() {
  const navigate = useNavigate()
  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email" }
  ]

  const handleSubmit = async(data) => {
    await axios.post(`${BASE_URL}/users`, data)
    navigate('/users')
  }
  return (
    <>
      <h1>Add user</h1>
      <DynamicForm fields={fields} onSubmit={handleSubmit} schema={userSchema} />
    </>
  )
}

export default AddUser