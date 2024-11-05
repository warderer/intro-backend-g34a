// #1 Importar Express
const express = require('express')

const PORT = process.env.PORT || 3000

// #2 Crear una instancia de Express
const app = express()

// #3 Configurar Express para que pueda recibir JSON
app.use(express.json())

// #4 Definir las rutas de la aplicación

// #5 Iniciar el servidor de Express
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`)
})
