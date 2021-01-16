import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

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
    connection.query("SELECT * FROM produtos JOIN categorias ON produtos.id_categoria = categorias.id_categoria", (error, result) => {
        if (error) {
            res.json({
                "message": "Erro na conexão com o banco de dados!"
            })
        } else {
            res.status(201).json(result)
        }
    })
})

server.listen(4000)