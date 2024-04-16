const mysql = require("mysql2")
const dbConfig = require("../config")
const caminhoServer = require("path")

class aula{

    constructor(){

        this.conexao = mysql.createConnection(dbConfig.db)   

    }

        atribuir(aulascompleto){
            
            return new Promise ((resolve, reject)=>{

                let sql = `INSERT INTO aulas (data,hora_inicio,hora_fim,turma,instrutor,unidade_curricular,ambiente,tipo,turno,cod_instrutor,chave_entregue) VALUES ('${aulascompleto.data}','${aulascompleto.hora_inicio}','${aulascompleto.hora_fim}','${aulascompleto.turma}','${aulascompleto.instrutor}','${aulascompleto.unidade_curricular}','${aulascompleto.ambiente}','${aulascompleto.tipo}','${aulascompleto.turno}','${aulascompleto.cod_instrutor}','${aulascompleto.chave_entregue}')`
                this.conexao.query(sql, function(erro, retorno){
                    if(erro){
                        reject(400, erro)
                    }else{                     
                        resolve([201,"INSERIDO"])
                    }

                })           
            })
        }

        mostrargeral(){

            return new Promise((resolve, reject)=>{
                let sql = `SELECT * FROM aulas`
                this.conexao.query(sql, function(erro, retorno){
                    if(erro){
                        reject(400, erro)
                    }else{                  
                        resolve([201,retorno])
                    }
                })
            })

        }

        exclui(id){
            return new Promise((resolve, reject)=>{
                let sql = `DELETE FROM aulas WHERE aula_id = ${id}`
                this.conexao.query(sql, function(erro, retorno){
                    if(erro){
                        reject([400, erro])
                    }else{                  
                        resolve([201,retorno])
                    }
                })
            })
        }

        atualizar(aulascompleto,id){
            
            return new Promise((resolve, reject)=>{
                let sql = `UPDATE aulas SET data = '${aulascompleto.data}', hora_inicio = '${aulascompleto.hora_inicio}', hora_fim = '${aulascompleto.hora_fim}', turma = '${aulascompleto.turma}', instrutor = '${aulascompleto.instrutor}', unidade_curricular = '${aulascompleto.unidade_curricular}', ambiente = '${aulascompleto.ambiente}', tipo = '${aulascompleto.tipo}', turno = '${aulascompleto.turno}', cod_instrutor = '${aulascompleto.cod_instrutor}', chave_entregue = '${aulascompleto.chave_entregue}' WHERE aula_id = '${id}'`
                this.conexao.query(sql, function(erro, retorno){
                    if(erro){
                        reject([400, erro])
                    }else{                  
                        resolve([201,retorno])
                    }
                })
            }) 

        }
}


module.exports = new aula()