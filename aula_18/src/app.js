const express = require("express")
const routes = require("./routes")
const fileupload = require("express-fileupload")

class App{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        // Middleware para analisar JSON no corpo das requisições
        this.server.use(express.json())

        //Comando que permite acessar diretorio com arquivos static
        this.server.use(express.static("public"))

        //fazenr uso de file upload
        this.server.use(fileupload())

        
    }

    routes(){
        this.server.use(routes)
    }
}

//const App = new App() 
module.exports = new App().server