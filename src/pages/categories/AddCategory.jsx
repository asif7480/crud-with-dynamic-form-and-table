import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../utils/constant'
import { useNavigate } from 'react-router-dom'
import DynamicForm from '../../components/DynamicForm'
import { categorySchema } from '../../schemas/categorySchema'

function AddCategory() {
  const navigate = useNavigate()

  const fields = [
    {name: "categoryName", label: "Category Name"}
  ]

  const handleSubmit = async(data) => {
    await axios.post(`${BASE_URL}/categories`, data)
    navigate("/categories")
  }

  return (
    <>
      <h2>Add Category</h2>
      <DynamicForm fields={fields} onSubmit={handleSubmit} schema={categorySchema} />
    </>
  )
}

export default AddCategory