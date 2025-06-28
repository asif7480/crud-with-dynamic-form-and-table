import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constant'
import { Link } from 'react-router-dom'

function EmployeeList() {
  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const { data } = await axios.get(`${BASE_URL}/employees`) 
    setEmployees(data)
  }

  useEffect( () => {
    fetchEmployees()
  }, [])

  console.log(employees)
  return (
    <>
        <h2>EmployeeList</h2>
        <Link to={`/employees/create`}>Add new employee</Link>
        {employees.map( (employee) => (
            <ul key={employee.id}>
                <li>{employee.id}</li>
                <li>{employee.employeeName}</li>
                <li>{employee.email}</li>
                <li>{employee.department}</li>
                <li>{employee.gender}</li>
                <li>
                  <Link state={employee} to={`/employees/edit/${employee.id}`}>Update</Link>
                  <button>Delete</button>
                </li>
            </ul>
        ))}
        
    </>
  )
}

export default EmployeeList