
const url = 'http://localhost:5000/'

export const getSuggestions = async () => {
    try {
        const response = await fetch(url + 'getSuggestion')

        if (response.status === 200) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            console.error()
        }

    } catch (err) {
        console.log(err.message)
    }
}


export const findSongs = async (searchDetails) => {
    try {
        const response = await fetch(url + 'findSongs', {
            method: 'POST',
            body: JSON.stringify(searchDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            console.error()
        }

    } catch (err) {
        console.log(err.message)
    }
}


export const terminateScheduling = async () => {
    try {
        const response = await fetch(url + 'terminateScheduling')

        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            console.error()
        }

    } catch (err) {
        console.log(err.message)
    }
}