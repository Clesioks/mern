///////////// 1h15 youtube https://youtu.be/8s_ZbPkPkRk?list=LL&t=4509

import express from 'express'
import mongoose from './conexion.js'
import {eschemausuario, router} from './rotas/usuario.js'


const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/usuario', router)
app.use(express.json())

// configuration server basic
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT))

app.get('/', (req, res) => {
    res.send("Olá mundo, estamos evoluindo!")
}) 

app.post('/usuario', (req, res) => {
    const usuario = eschemausuario(req.body)
    usuario.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

