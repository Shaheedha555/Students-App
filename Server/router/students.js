import express from "express";
export const router = express.Router();
import { getAllStudents, getStudent, addStudent, editStudent, deleteStudent } from '../controller/students.js'


// GET route to get all students
router.get('/', getAllStudents);

// GET route to get single student
router.get('/:id', getStudent);

// POST route to create a new student
router.post('/', addStudent);

// PUT route to update a student
router.put('/:id', editStudent);

// DELETE route to delete a student
router.delete('/:id', deleteStudent);

