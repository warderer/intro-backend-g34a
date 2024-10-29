// #1 Llamar a la biblioteca de express (importarla)
const express = require('express')

const petsRoutes = require('./api/v1/pets')

// Hago una variable para el puerto, para que sea más fácil de cambiar. Si no hay un puerto definido en las variables de entorno, se usa el 3000
const PORT = process.env.PORT || 3000

// #2 Crear una instancia de express
const app = express()

// #2b Configurar express para que pueda recibir datos de tipo JSON
app.use(express.json())

// #3 Definir las rutas del servidor
// Una ruta esta compuesta por dos partes:
// 1. El método HTTP
// 2. La URL
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(petsRoutes) // Le digo a express que use las rutas de pets

// #4 Levantar el servidor escuchando en un puerto determinado
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`)
})