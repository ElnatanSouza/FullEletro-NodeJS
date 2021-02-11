const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const comentario = require('./models/Contato.js')
const conn = require('./config/mongoConn.js')

const server = express()

server.use(express.json())
server.use(cors())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fulleletro"
})

server.get('/produtos', (req, res) => {
    const sql = "SELECT * FROM produtos JOIN categorias ON produtos.id_categoria = categorias.id_categoria"
    connection.query(sql, (error, result) => {
        if (error) {
            res.json({
                "message": "Erro na conexão com o banco de dados!"
            })
        } else {
            res.status(201).json(result)
        }
    })
})

server.get('/contato', async (req, res) => {
    try {
        const result = await comentario.find()

        return res.json(result)
    } catch (err) {
        return res.status(400).send({ error: 'Erro na listagem dos comentários!' })
    }
})

server.post('/contato', async (req, res) => {
    const { nome, email, msg } = req.body

    try {
        const result = await comentario
            .create({ nome, email, msg })

        if (!comentario)
            return res.status(400).send({ error: 'Comentario não enviado' })

        return res.json(result)
    } catch (err) {
        res.status(400).send({ error: 'Preencha todos os campos para enviar!' })
    }

})

const port = 4000
server.listen(port, () => {
    console.log('http://localhost:' + port)
})
