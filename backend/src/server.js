import express from "express"
import notesRoute from "./routes/notesRoutes.js"

const app = express()

// middleware di percorso per le rotte dell'entità note 
app.use("/api/notes", notesRoute)

app.listen(5001, () => {
    console.log("Server started on: http://localhost:5001")
})