const express = require("express");
const server = express();
const porta = 443;

server.use(express.json())

let sites = [
    {id:1, name:"SENAI ES", site:"htpps://senaies.com.br/"},
    {id:2, name:"SENAI ES", site:"htpps://senaies.com.br/"},
    {id:3, name:"SENAI ES", site:"htpps://senaies.com.br/"}
]

//Mostrar lista
server.get("/sites", (req,res) => {
    return res.json(sites)
})

//Mostrar um elemento da lista
server.get("/sites/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id
    })


    //Operador ternário
    const status = site ? 200:404

    return res.json(site)

})

server.listen(porta,()=>{
    console.log("servidores logado")
})

//Inserir um elemento na lista
server.post("/sites",(req,res)=>{
    const{name,site} = req.body
    const id = sites[sites.length-1].id+1
    const newSite = {id:id,name:name,site:site}

    sites.push(newSite)

    return res.status(201).json(newSite)

    res.json(name)
})

// Atualizar um registro
server.put("/sites/:id", (req, res)=>{

    const id = parseInt(req.params.id)

    const {name,site} = req.body

    const index = sites.findIndex(function(site){
        return site.id === id
    })

    const status = index >= 0 ? 200:400

    if(index>=0){
        sites[index] = {id:id,name:name,site:site}
    }

    return res.json(res.status(status).json(sites[index]))
})

//Deletando um registro

server.delete("/sites/:id", (req, res)=>{

    const id = parseInt(req.params.id)

    const index = sites.findIndex(function(site){
        return site.id === id
    })

    const status = index >= 0 ? 200:404

    if(index>=0){
        sites.splice(index,1)
    }

    return res.status(status).json()  

})