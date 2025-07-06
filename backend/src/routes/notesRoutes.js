import express from 'express'
import { createNote, getAllNotes, deleteNote, updateNote, getNote } from '../controllers/notes/notesController.js'

// api/notes prefix
const router = express.Router()
router.get('/', getAllNotes)
router.get('/:id', getNote)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router