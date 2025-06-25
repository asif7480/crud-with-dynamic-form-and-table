import axios from 'axios'
import { BASE_URL } from '../../utils/constant'
import { useNavigate } from 'react-router-dom'
import DynamicForm from '../../components/DynamicForm'
import { productSchema } from '../../schemas/productSchema'

function AddProduct() {
  const navigate = useNavigate()

  const fields = [
    { name: "productName", label: "Product Name" },
    { name: "price", label: "Price", type: "number" }
  ]

  const handleSubmit = async(data) => {
    await axios.post(`${BASE_URL}/products`, data)
    navigate("/products")  
  }

  return (
    <>
      <h2>Add Product</h2>
      <DynamicForm fields={fields} onSubmit={handleSubmit} schema={productSchema} />
    </>
  )
}

export default AddProduct