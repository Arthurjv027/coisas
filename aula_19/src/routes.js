const express = require("express")
const router = express.Router

//const {Router} = require("express")

const routes = new router()
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")
const aulas = require("./app/controllers/aulasController")

routes.get("/", (req,res)=>{
    res.sendFile("painel.html", {root:'./public'})
})

routes.get("/lateral", (req,res)=>{
    res.sendFile("lateral.html", {root:'./public'})
})

routes.get("/aulas", (req,res)=>{
    res.sendFile("aulas.html", {root:'./public'})
})

routes.get("/sites",sites.index)

routes.get("/sites/:id",sites.show)

routes.post("/sites",sites.create)

routes.put("/sites/:id",sites.update)

routes.delete("/sites/:id",sites.destroy)

//------------------------------------------

routes.post("/imagens",imagens.create)

routes.get("/imagens", imagens.index)

routes.put('/imagens/:id',imagens.update)

routes.delete("/imagens/:id", imagens.delete)

//------------------------------------------

routes.post("/aulas",aulas.create)

routes.get("/indexaulas",aulas.index)

routes.delete("/aulas/:id", aulas.delete)

routes.put('/aulas/:id',aulas.update)

module.exports = routes

/**
 * get ---- visualizar
 * post --- criar
 * put ---- atualizar
 * delete - deletar
 */