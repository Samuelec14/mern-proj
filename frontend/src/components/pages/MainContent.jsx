import React from 'react'


const MainContent = () => {

    const token = 'token';
    const user_id = 3
    const queryParams = {
        limit: 10,
        page: 2,
        order_by: 'created_at_desc'
    }
    const bodyExample = {
        user_id: 3,
        name: 'riccardo',
        last_name: 'rossi'
    }


    // get di esempio 
    axios.get('url/di/esempio', {
        params: queryParams,
        headers: {
            Authorization: token
        }
    })
        .then(response => {
            // istruzioni successive alla risposta
        })
        .catch(error => {
            // istruzioni successive ad un errore 
        })


    // post di esempio
    axios.post(`url/parametrico/${user_id}`, bodyExample, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        },
    })
        .then(response => {
            // istruzioni success true
        })
        .catch(error => {
            // istruzioni success false 
        })

    return (
        <div>MainContent</div>
    )
}

export default MainContent