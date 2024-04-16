const express = require("express")
const server = express()
console.log(express)

//query
//localhost:3000/home?nome=Arthur&idade=18
//const idade = req.query.idade

server.get("/",(req,res) => {

    const {nome, idade} = req.query
    res.json({
        nome:nome,
        idade:idade
    })

})

//Parametros da rota
//localhost>3000/home/arthur
server.get("/home/:nome", (req,res) => {
    const {nome} = req.params
    return res.json({
        nome:nome
    })
})

server.listen(3000)