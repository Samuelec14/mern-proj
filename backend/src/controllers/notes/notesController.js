import Note from "../../models/Note.js"
import mongoose from "mongoose"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1})
        res.status(200).json({
            'success': true,
            'message': 'notes retrived successfully',
            'data': notes
        })
    } catch (error) {
        console.error("Errore nel metodo GetAllNotes", error)
        res.status(500).json({
            'success': false,
            'message': 'error while retriving all notes',
            'error': error
        })
    }

}

export async function getNote(req, res) {
    try {
        const _id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format'
            });
        }
        
        const note = await Note.findById(_id)
        if (!note) {
            console.error("Nota non trovata")
            res.status(404).json({
                'success': false,
                'message': 'Note not found',
            })
        }
        res.status(200).json({
            'success': true,
            'message': 'note retrived successfully',
            'data': note
        })
    } catch (error) {
        console.error("Errore nel metodo getNote", error)
        res.status(500).json({
            'success': false,
            'message': 'error while retriving a note',
            'error': error
        })
    }

}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content })

        await newNote.save()

        res.status(201).json({
            'success': true,
            'message': 'note created successfully',
            'data': { newNote }
        })
    } catch (error) {
        console.error("Errore nel metodo creteNote", error)
        res.status(500).json({
            'success': false,
            'message': 'error while creating note',
            'error': error
        })
    }
}

export async function updateNote(req, res) {
    try {
        const _id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format'
            });
        }
        
        const { title, content } = req.body

        const updatedNote = await Note.findByIdAndUpdate(_id, { title, content }, { new: true })

        if (!updatedNote) { 
            console.error("Nota non trovata")
            res.status(404).json({
                'success': false,
                'message': 'Note not found',
            })
        }

        res.status(200).json({
            'success': true,
            'message': 'note updated successfully',
            'data': { updatedNote }
        })
    } catch (error) {
        console.error("Errore nel metodo updateNote", error)
        res.status(500).json({
            'success': false,
            'message': 'error while updating a note',
            'error': error
        })
    }
}

export async function deleteNote(req, res) {
    try {
        const _id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format'
            });
        }

        const updatedNote = await Note.findByIdAndDelete(_id)

        if (!updatedNote) {
            console.error("Nota non trovata")
            res.status(404).json({
                'success': false,
                'message': 'Note not found',
            })
        }

        res.status(200).send({
            'success': true,
            'message': 'notes deleted successfully',
            'data': { updatedNote }
        })
    } catch (error) {
        console.error("Errore nel metodo updateNote", error)
        res.status(500).json({
            'success': false,
            'message': 'error while updating a note',
            'error': error
        })
    }
    
}