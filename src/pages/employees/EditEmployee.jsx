import DynamicForm from "../../components/DynamicForm"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../utils/constant"
import { employeeSchema } from "../../schemas/employeeSchema"
import { useNavigate } from "react-router-dom"

function EditEmployee() {
  const navigate = useNavigate()

  const fields = [
    { name: "employeeName", label: "Employee Name" },
    { name: "email", label: "Email" },
    {
      name: "department",
      label: "Department",
      type: "select",
      options:[
        { label: "Development", value: "development" },
        { label: "Networking", value: "networking" },
        { label: "Quality Assurance", value: "quality-assurance" }
      ]
    },
    {
      name: "gender", label: "Gender", type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
      ]
    }
  ]

  const { state } = useLocation()
  const handleUpdate = (data) => {
    axios.put(`${BASE_URL}/employees/${state.id}`, data)
    navigate("/employees")
  }

  return (
    <>
      <h2>EditEmployee</h2>
      <DynamicForm fields={fields} defaultValues={state} onSubmit={handleUpdate} schema={employeeSchema} />
    </>
  )
}

export default EditEmployee