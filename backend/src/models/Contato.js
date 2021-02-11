const{ Schema, model } = require('mongoose')

const ContatoSchema = new Schema({
    nome: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true
    },
    msg: {
        type: String,
    },
    dia: {
        type: Date,
        default: Date.now,
    },
})

const modelo = model('comentario', ContatoSchema)

module.exports = modelo
