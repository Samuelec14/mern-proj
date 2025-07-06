import express from 'express'
import { createNote, getAllNotes, deleteNote, updateNote } from '../controllers/notes/notesController.js'

// api/notes prefix
const router = express.Router()
router.get('/', getAllNotes)
router.post('/', updateNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router