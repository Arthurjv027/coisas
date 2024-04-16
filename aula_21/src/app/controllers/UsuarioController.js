const { response } = require("express")
const Usuario = require("../models/usuario")

//jsonwebtoken
const jwt = require("jsonwebtoken")
const secret = "chicocoin"


class UsuarioController{
    index(req,res){
        Usuario.mostrarTodos().then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }   
        )
    }

    show(){
        let {usuario_id} = req.params
        Usuario.mostrarUsuarios(usuario_id).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }   
        )
    }

    create(req,res){
        let {nome,usuario,senha,usuario_tipo} = req.body
        Usuario.inserir(nome,usuario,senha,usuario_tipo).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }   
        )
    }

    logar(req,res){
        let {usuario,senha} = req.body
        Usuario.verificaUsuarioSenha(usuario,senha).then(
            resposta =>{
                let usuario_id = resposta[2]
                let usuario_tipo = resposta[3]

                let token = ""
                
                if(resposta[0] === 200){
                token = jwt.sign({usuario_id,usuario_tipo},secret,{expiresIn:120})
                }

                res.status(resposta[0]).json({token})
                
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
                //res.status(resposta[0]).json("Erro:"+resposta[1].errno)
            }
        )
    }

    verificaToken(req,res,next){
        const token = req.headers['x-acces-token']
        jwt.verify(token,secret,(erro,decoded)=>{
            if(erro){
                return res.status(401).json("Acesso não autenticado")
            }else{
                req.usuario_id = decoded.usuario_id
                req.usuario_tipo = decoded.usuario_tipo
                console.debug("Id:" + decoded.usuario_id + decoded.usuario_tipo)
                next()
            }
        })
    }
}

module.exports = new UsuarioController()