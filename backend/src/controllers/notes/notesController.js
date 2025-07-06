export function getAllNotes(req, res) { 
    res.status(200).send({
        'success': true,
        'message': 'notes retrived successfully',
        'data': {}
    })
}

export function createNote(req, res) {
    res.status(201).send({
        'success': true,
        'message': 'note created successfully',
        'data': {}
    })
}

export function updateNote(req, res) {
    res.status(200).send({
        'success': true,
        'message': 'notes updated successfully',
        'data': {}
    })
}

export function deleteNote(req, res) {
    res.status(200).send({
        'success': true,
        'message': 'notes deleted successfully',
        'data': {}
    })
}