
const mysql = require("mysql2")
const dbConfig = require("../config")
//Diretorio do script sendo executado
const caminhoServer = require("path")

class Imagem{

    constructor(){

        this.conexao = mysql.createConnection(dbConfig.db)   

    }

    mostrarTodos(){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM anuncios`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject(400, erro)
                }else{                  
                    resolve([201,retorno])
                }
            })
        })

    }

    atualizarTodos(body,id){
        return new Promise((resolve, reject)=>{
            let sql = `UPDATE anuncios SET alternativo = "${body}" WHERE imagem_id = ${id}`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{                  
                    resolve([201,retorno])
                }
            })
        })
      
    }

    apagarTodos(id){
        return new Promise((resolve, reject)=>{
            let sql = `DELETE FROM anuncios WHERE imagem_id = ${id}`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{                  
                    resolve([201,retorno])
                }
            })
        })
    }

    inserir(arquivo, alternativo, nomeImagem){
        
        return new Promise ((resolve, reject)=>{

            let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}','${nomeImagem}')`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject(400, erro)
                }else{
                    arquivo.mv(caminhoServer + "/../public/img/" + nomeImagem)
                    resolve([201,"INSERIDO"])
                }
            })           
        })
    }
}


module.exports = new Imagem()