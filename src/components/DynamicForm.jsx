import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

function DynamicForm({ fields, onSubmit, defaultValues = {}, schema}) {
  
  const { register, handleSubmit, setValue, formState: { errors }} = useForm({
    resolver: zodResolver(schema)
  })

  useEffect( () => {
    Object.entries(defaultValues).forEach( ([key, val]) => setValue(key, val))
  }, [defaultValues, setValue])
  
  const { id } = useParams()
  const isEdit = !!id
  
  return (
    <>
        {/* <h2>{isEdit ? "Edit": "Add New"}</h2> */}
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map( (field, index) => (
                <div key={index}>
                    <label>{field.label}: </label>
                    <input type={ field.type || "text" } {...register(field.name)} />
                    <p style={{ color: "red"}}>
                        { errors[field.name]?.message }
                    </p>
                </div>
            ))}
            <button type="submit">
                { isEdit ? "update": "submit" }
            </button>

        </form>    
    
    </>
  )
}

export default DynamicForm