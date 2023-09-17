import React from 'react'
// import DataTable from 'react-data-table-component';
const Table = ({ studentList, setStudent, setEditClicked, setAddClicked, deleteStudent }) => {

    const editStudent = (student) => {
        setStudent(student);
        setEditClicked(true);
    }
    // const deleteStudent = () => {

    // }
    const columns = [
        {
            name: <h2>First Name</h2>,
            selector: row => row.firstName,
            center: true,
        },
        {
            name: <h2>Last Name</h2>,
            selector: row => row.lastName,
            center: true

        },
        {
            name: <h2>Age</h2>, selector: row => row.age,
            center: true

        },
        {
            name: <h2>Action</h2>, selector: row => row.action,
            center: true

        }
    ];


    return (
        <div className='table'>
            <h2>All Students List</h2>
            <div className='add-btn'>
                <button onClick={() => setAddClicked(true)} >Add new student</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Sl. No.</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student, index) => {
                        return (
                            <tr key={student.id}>
                                <td data-label="Sl. No.">{index + 1}</td>
                                <td data-label="First Name">{student.firstName}</td>
                                <td data-label="Last Name">{student.lastName}</td>
                                <td data-label="Age">{student.age}</td>
                                <td className='action-btns'><button onClick={() => editStudent(student)} >Edit</button><button onClick={() => deleteStudent(student)}>Delete</button></td>
                            </tr>
                        )

                    })}
                    {/* <tr>
                        <td data-label="Account">Visa - 3412</td>
                        <td data-label="Due Date">04/01/2016</td>
                        <td data-label="Amount">$1,190</td>
                        <td data-label="Period">03/01/2016 - 03/31/2016</td>
                    </tr> */}

                </tbody>
            </table>

        </div>
    )
}

export default Table
