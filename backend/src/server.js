import express from "express"
import notesRoute from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from 'dotenv'
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

//middleware
app.use(express.json())
app.use(rateLimiter)

// middleware di percorso per le rotte dell'entità note 
app.use("/api/notes", notesRoute)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server started on: http://localhost:${port}`)
    })
})


