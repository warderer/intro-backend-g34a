// Para definir rutas en un archivo separado, usando Express, se debe configurar un router.

const express = require('express')
// Mando a llamar a la función Router de express
const router = express.Router()

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Michi",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

// Traer la lista de todas las mascotas
router.get('/api/v1/pets', (req, res) => {
    res.json(petList)
})

module.exports = router