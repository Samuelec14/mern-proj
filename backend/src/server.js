import express from "express"
import notesRoute from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

connectDB();

//middleware
app.use(express.json())

// middleware di percorso per le rotte dell'entità note 
app.use("/api/notes", notesRoute)

app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`)
})


