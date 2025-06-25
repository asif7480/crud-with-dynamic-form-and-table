import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/constant'

function ProductList() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/products`)
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      <h2>Products list</h2>
      <Link to={`/products/create`}>Add new Product</Link>
      {
        products.map((product) => (
          <ul key={product.id}>
            <li>{product.id}</li>
            <li>{product.productName}</li>
            <li>{product.price}</li>
            <li>
              <Link state={product} to={`/products/edit/${product.id}`}>Update</Link>
              <button>Delete</button>
            </li>
          </ul>

        ))
      }
    </>
  )
}

export default ProductList