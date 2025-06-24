import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BASE_URL } from '../../utils/constant'
import { Link } from 'react-router-dom'

function UserList() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const {data} = await axios.get(`${BASE_URL}/users`)
    setUsers(data)
  }

  useEffect( () => {
    fetchUsers()
  }, [])

  return (
    <>
      <h2>Users list</h2>
      <Link to={`/users/create`}>Add new User</Link>
      {
        users.map( (user) => (
          <ul key={user.id}>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>
              <Link state={user} to={`/users/edit/${user.id}`}>Update</Link>
              <button>Delete</button>
            </li>
          </ul>

        ))
      }
    </>
  )
}

export default UserList