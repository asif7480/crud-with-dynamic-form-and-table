import React, { useState } from 'react'
import DynamicForm from '../../components/DynamicForm'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../utils/constant'
import { productSchema } from '../../schemas/productSchema'

function EditProduct() {
  const fields = [
    { name: "productName", label: "Product Name" },
    { name: "price", label: "Price" }
  ]
  const navigate = useNavigate()
  
  const { state } = useLocation()
  
  const [product, setProduct] = useState(state)

  const handleUpdate = async(data) => {
    await axios.put(`${BASE_URL}/products/${product.id}`, data)
    navigate("/products")
  }

  
  return (
    <>
      <h2>Edit Product</h2>
      <DynamicForm fields={fields} onSubmit={handleUpdate} defaultValues={product} schema={productSchema} />
    </>
  )
}

export default EditProduct