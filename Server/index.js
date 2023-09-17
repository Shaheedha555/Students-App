import express from "express";
import dotenv from "dotenv";
import { router } from "./router/students.js";
import cors from 'cors';
import db from './db/config.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

db.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
    app.listen(PORT, () => {
        console.log("Server is running on port ", PORT);
    });
});

app.get("/", (req, res) => {
    res.send("server is running");
});

app.use("/students", router);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
}
);

