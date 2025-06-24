import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/constant'

function CategoryList() {
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    const { data } = await axios.get(`${BASE_URL}/categories`)
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <>
      <h2>Categories list</h2>
      <Link to={`/categories/create`}>Add new Category</Link>
      {
        categories.map((category) => (
          <ul key={category.id}>
            <li>{category.id}</li>
            <li>{category.categoryName}</li>
            <li>
              <Link to={`/categories/edit/${category.id}`}>Update</Link>
              <button>Delete</button>
            </li>
          </ul>

        ))
      }
    </>
  )
}

export default CategoryList