import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import axios from './config/axios';

function App() {
  const [studentList, setStudentList] = useState([])
  const [editClicked, setEditClicked] = useState(false)
  const [addClicked, setAddClicked] = useState(false)

  const [student, setStudent] = useState({ id: '', firstName: '', lastName: '', age: '' });
  useEffect(() => {
    const getData = async () => {

      const { data } = await axios.get('/students')
      setStudentList(data)
    }
    getData();
  }, [editClicked, student, addClicked])


  const handleSubmit = async () => {
    if (editClicked) {
      const { data } = await axios.put('/students/' + student.id, student)
      if (data.status) {
        alert(data.message);
        setEditClicked(false)
      }
      else {
        alert(data.error || "Something went wrong!");
        setEditClicked(false)
      }

    } else {
      const { data } = await axios.post('/students', student);
      if (data.status) alert(data.message)
    }
  }
  const handleDelete = async (student) => {
    setStudent(student);
    alert('Are you sure to delete ' + student.firstName + "?");
    const { data } = await axios.delete('/students/' + student.id);
    if (data.status) {
      alert("Deleted successfully");
    }
  }

  return (
    <div className="App">
      {!editClicked && !addClicked && <Table studentList={studentList} setStudent={setStudent} setEditClicked={setEditClicked} deleteStudent={handleDelete} setAddClicked={setAddClicked} />}
      {(editClicked || addClicked) && <Form title={editClicked ? "Edit Student" : "Add Student"} student={student} setStudent={setStudent} setEditClicked={setEditClicked} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
