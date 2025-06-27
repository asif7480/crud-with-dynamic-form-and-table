import { BrowserRouter, Route, Routes } from "react-router-dom"

import UserList from "./pages/users/UserList"
import AddUser from "./pages/users/AddUser"
import EditUser from "./pages/users/EditUser"

import ProductList from "./pages/products/ProductList"
import AddProduct from "./pages/products/AddProduct"
import EditProduct from "./pages/products/EditProduct"

import CategoryList from "./pages/categories/CategoryList"
import AddCategory from "./pages/categories/AddCategory"
import EditCategory from "./pages/categories/EditCategory"
import Navbar from "./components/Navbar"
import EmployeeList from "./pages/employees/EmployeeList"
import AddEmployee from "./pages/employees/AddEmployee"
import EditEmployee from "./pages/employees/EditEmployee"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />

          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/create" element={<AddCategory />} />
          <Route path="/categories/edit/:id" element={<EditCategory />} />

          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/create" element={<AddEmployee />} />
          <Route path="/employees/edit/:id" element={<EditEmployee />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
