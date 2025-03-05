import express from "express";
import cors from "cors";
import db from "./config/database.js";
import NoteRoutes from "./routes/NoteRoutes.js";

const app = express();
const port = 5000; 

// Middleware
app.use(cors());
app.use(express.json());


app.use(NoteRoutes);

// Cek koneksi database
(async () => {
    try {
        await db.authenticate();
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
})();

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
