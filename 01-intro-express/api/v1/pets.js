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
// router.get('/api/v1/pets', (req, res) => {
//     res.json(petList)
// })

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

/* QUERY */
// Son similares a los PARAMS, pero se suelen usar para filtrar o buscar información. Sobre todo cuando ocupamos mandar más de un dato.
// Las QUERYs son abiertaws, no definimos cuántas pueden ser ni los nombres de antemano. La responsabilidad del Backend es SOLO tomar en cuenta las queries que le interesan.
// Ejemplo Query: /api/v1/pets?age=3&type=dog

router.get('/api/v1/pets', (req, res) => {
    // El objeto que contiene las query es: req.query
    console.log(req.query)

    const { age, type } = req.query

    const filteredPets = petList.pets.filter(pet => {
        if (age && type) {
            return pet.age === parseInt(age) && pet.type === type
        }
        if (age) {
            return pet.age === parseInt(age)
        }
        if (type) {
            return pet.type === type
        }
    })
    res.json(filteredPets)
})

module.exports = router