import express from 'express'
import mongoose from 'mongoose'

export const router = express.Router()

const eschema = mongoose.Schema

export const eschemausuario = new eschema({
    nome: String,
    email: String,
    telefone: String,
    idusuario: String
})

router.get('/exemplo', (req, res) => {
    res.send("Olá mundo!!!!!")
})

mongoose.model("usuarios", eschemausuario)

