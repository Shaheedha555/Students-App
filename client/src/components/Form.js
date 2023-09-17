import React, { useEffect, useState } from 'react'

const Form = ({ student, setStudent, setEditClicked, handleSubmit, title }) => {
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
        setErrors({ ...errors, [name]: "" })
    }

    useEffect(() => {
        if (student.firstName === "") {
            setErrors({ firstName: "first name is required" })
        }
        if (student.age === "") {
            setErrors({ age: "age is required" })
        }
        if (student.age === "" && student.firstName === "") {
            setErrors({ firstName: "first name is required", age: "age is required" })
        }
    }, [student, setStudent])

    const { firstName, lastName, age } = student;
    const handleCancel = () => {
        setEditClicked(false)
        setStudent({ id: '', firstName: '', lastName: '', age: '' })
    }

    return (
        <form>
            <div className='form'>
                <h2>{title}</h2>
                <label>First Name</label>
                <input name='firstName' type='text' value={firstName || ""} onChange={handleChange} />
                {errors.firstName && <p className='err-msg'>{errors.firstName}</p>}
                <label>Last Name</label>
                <input name='lastName' type='text' value={lastName || ""} onChange={handleChange} />
                <label>Age</label>
                <input name='age' type='number' value={age || ""} min={3} onChange={handleChange} />
                {errors.age && <p className='err-msg'>{errors.age}</p>}
                <div className='btns'>
                    <button className='cancel' onClick={handleCancel}>Cancel</button>
                    <button className='submit' disabled={errors.firstName || errors.age} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </form>
    )
}
export default Form
