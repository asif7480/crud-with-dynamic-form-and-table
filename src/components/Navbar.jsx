import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <Link to={`/users`}>Users</Link>
            <Link to={`/products`}>Products</Link>
            <Link to={`/categories`}>Categories</Link>
            <Link to={`/employees`}>Employees</Link>
        </nav>
    </>
  )
}

export default Navbar