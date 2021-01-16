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

server.get('/contato', (req, res) => {
    const sql = "SELECT * FROM comentarios"
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

server.post('/contato', (req, res) => {
    const { nome, email, msg } = req.body
    const sql = `INSERT INTO comentarios (nome, email, msg) values ('${nome}','${email}','${msg}')`
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

server.listen(4000)