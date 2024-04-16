const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require("bcryptjs")

class Usuario{

    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)   
    }

    mostrarUsuario(usuario_id){
        return new Promise((resove,reject)=>{
            let sql = `SELECT * FROM usuarios WHERE usuario_id = '${usuario_id}'`
            this.conexao.query(sql,function(erro,retorno){
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }else{
                    if(retorno.length === 0){
                        resolve([404],"Usuario não encontrado")
                    }else{
                        resolve([200],retorno)
                    }
                    
                }
            })
        })
    }

    mostrarTodos(){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM usuarios`
            this.conexao.query(sql,function(erro,retorno){
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }else{
                    resolve([200,retorno])
                }
            })
        })
    }

    inserir(nome,usuario,senha,usuario_tipo){
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(senha, salt)

        console.log(hash)
        return new Promise((resolve,reject)=>{
            let sql = `INSERT INTO usuarios(nome,usuario,senha,usuario_tipo) VALUE ('${nome}','${usuario}','${hash}','${usuario_tipo}')`
            this.conexao.query(sql,function(erro,retorno){
                if(erro){
                    reject([400,erro])
                    console.debug(erro)
                }else{
                    resolve([201, 'Usuario Inserido'])
                }
            })
        })
    }
    
    verificaUsuarioSenha(usuario,senha){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM usuarios WHERE usuario = '${usuario}'`
            this.conexao.query(sql,function(erro, retorno){              
                    if(erro){
                        console.debug(erro)
                        reject([400,erro])
                    }else{
                        console.debug(retorno)
                        if(retorno.length === 0){
                            resolve([401,'Usuario ou senha invalida'])
                        }else{
                            let hash = retorno[0].senha
                            let logado = bcrypt.compareSync(senha,hash)
                            if(logado){
                                let {usuario_id,usuario_tipo} = retorno[0]
                                resolve([200,'Logado',usuario_id,usuario_tipo])
                            }else{
                                resolve([401,'Usuario ou senha invalida'])
                            }
                            
                        }
                    }              
            })
        })
    }
}

module.exports = new Usuario()