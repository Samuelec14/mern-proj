import mongoose from 'mongoose';

//creo lo schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }

    },
    { timestamps: true } 
)

//creo il modello dello schema
const Note = mongoose.model('Note', noteSchema)

export default Note