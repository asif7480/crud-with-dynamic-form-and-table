import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../utils/constant"
import DynamicForm from "../../components/DynamicForm"
import { employeeSchema } from "../../schemas/employeeSchema"

function AddEmployee() {
  const navigate = useNavigate()

  const fields = [
    { name: "employeeName", label: "Employee Name" },
    { name: "email", label: "Email" },
    { 
        name: "department", 
        label: "Department", 
        type: "select", 
        options: [
            { label: "Developemnt", value: "development" },
            { label: "Networking", value: "networking" },
            { label: "Quality Assurance", value: "quality-assurance" }
        ]   
    },
    { 
        name: "gender", label: "Gender", type: "radio", 
        options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" }
        ]}
  ]

  const handleSubmit = async(data) => {
    await axios.post(`${BASE_URL}/employees`, data)
    navigate("/employees")
  }
  return (
    <>
        <h2>Add New Employee</h2>
        <DynamicForm fields={fields} onSubmit={handleSubmit} schema={employeeSchema} />

    </>
  )
}

export default AddEmployee