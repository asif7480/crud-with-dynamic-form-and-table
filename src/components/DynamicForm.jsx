import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

function DynamicForm({ fields, onSubmit, defaultValues = {}, schema }) {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  useEffect(() => {
    Object.entries(defaultValues).forEach(([key, val]) => setValue(key, val))
  }, [defaultValues, setValue])

  const { id } = useParams()
  const isEdit = !!id

  return (
    <>
      {/* <h2>{isEdit ? "Edit": "Add New"}</h2> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
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

        </form>     */}

      {/* for complex form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.label}: </label>

            {/* for text/number/email/password */}
            {!['select', 'checkbox', 'radio'].includes(field.type) && (
              <input type={field.type || 'text'} {...register(field.name)} />
            )}

            {/* select */}
            {field.type === "select" && (
              <select {...register('field.name')}>
                <option value="">Select any option</option>
                {
                  field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                }
              </select>
            )}

            {/* Checkbox */}
            {field.type === "checkbox" && (
              <input type="checkbox" {...register('field.name')} />
            )}

            {/* Checkbox Group (multi-selection) */}
            {field.type === 'checkbox-group' &&
              field.options?.map((opt) => (
                <label key={opt.value} style={{ display: 'block' }}>
                  <input
                    type="checkbox"
                    value={opt.value}
                    {...register(field.name)}
                  />
                  {opt.label}
                </label>
              ))}

            {/* radio buttons */}
            {field.type === "radio" && (
              field.options?.map((option) => (
                <label key={option.value}>
                  <input type="radio" value={option.value} {...register('field.name')} />
                  {option.label}
                </label>
              ))
            )}

            {/* Errors */}
            {errors[field.name] && (
              <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
            )}
          </div>
        ))}
      </form>

    </>
  )
}

export default DynamicForm