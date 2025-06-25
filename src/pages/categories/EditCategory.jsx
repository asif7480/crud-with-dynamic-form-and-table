import React, { useState } from 'react'
import DynamicForm from '../../components/DynamicForm'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../utils/constant'
import { categorySchema } from '../../schemas/categorySchema'

function EditCategory() {
  const fields = [
    { name: "categoryName", label: "Category Name" }
  ]

  const navigate = useNavigate()
  const { state } = useLocation()
  const [category, setCategory] = useState(state)
  
  const handleUpdate = async(data) => {
    await axios.put(`${BASE_URL}/categories/${category.id}`, data)
    navigate('/categories')
  }
  return (
    <>
      <h2>Edit Category</h2>
      <DynamicForm fields={fields} onSubmit={handleUpdate} defaultValues={category} schema={categorySchema} />
    </>
  )
}

export default EditCategory