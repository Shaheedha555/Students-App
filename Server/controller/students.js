import db from '../db/config.js'


// Get all students
export const getAllStudents = (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (results.length < 1) return res.json("No Students found")
            res.json(results);
        }
    });
};

// Get single student
export const getStudent = (req, res) => {
    const { id } = req.params
    db.query('SELECT * FROM students WHERE Id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (results.length < 1) return res.json("No Student found")
            res.json(results);
        }
    });
};

// Create a new student
export const addStudent = (req, res) => {
    const { firstName, lastName, age } = req.body;
    if (!firstName || !age === null) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query('INSERT INTO students (firstName, lastName, age) VALUES (?, ?, ?)', [firstName, lastName, age], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            db.query('SELECT * FROM students Where Id = ?', [results.insertId], (err, results) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json({ status: true, message: "New student added successfully", results });
                }
            });
        }
    });
};

// Update a student
export const editStudent = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    if (!firstName && !lastName && !age) {
        return res.status(200).json({ error: "Missing contents to update" });
    }
    db.query('UPDATE students SET firstName = ?, lastName = ?, age = ? WHERE id = ?', [firstName, lastName, age, id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            db.query('SELECT * FROM students Where Id = ?', [id], (err, results) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json({ status: true, message: "Student updated successfully", results });
                }
            });
        }
    });
};

// Delete a student
export const deleteStudent = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM students WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ status: true, message: "Student deleted successfully" });
        }
    });
};

