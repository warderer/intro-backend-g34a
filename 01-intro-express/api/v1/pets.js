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

/* PARAMS */
// Un param sirve para hacer una ruta dinámica. Por ejemplo, si quiero traer la información de una mascota en específico, puedo hacerlo con un param.
// Params: /api/v1/pets/:petId -> /api/v1/pets/1
router.get('/api/v1/pets/:petId', (req, res) => {
    console.log(req.params)
    const petId = req.params.petId
    const pet = petList.pets.find(pet => pet.id === parseInt(petId))
    if (!pet) {
        return res.status(404).json({ message: 'Pet not found' })
    }
    res.json(pet)
})

module.exports = router