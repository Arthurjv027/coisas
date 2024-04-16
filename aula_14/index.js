const express = require("express");
const server = express();
const porta = 443;

server.use(express.json())

let sites = [
    {id:1, name:"SENAI ES", site:"htpps://senaies.com.br/"},
    {id:2, name:"SENAI ES", site:"htpps://senaies.com.br/"},
    {id:3, name:"SENAI ES", site:"htpps://senaies.com.br/"}
]

server.get("/sites", (req,res) => {
    return res.json(sites)
})

server.get("/sites/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id
    })

    let status = ""
    if(site){
        status = 200
    }else{
        status = 404
    }

    return res.json(site)

})

server.listen(porta,()=>{
    console.log("servidores logado")
})