const aulas = require("../models/aulas")

class AulasController{

    create(req,res){

        let aulascompleto =  req.body

            aulas.atribuir(aulascompleto).then(
               resposta =>{
                    res.status(resposta[0]).json(resposta[1])
               } 
            ).catch(
                resposta =>{
                    console.debug(resposta[1])
                    res.status(resposta[0]).json("ERRO:" + resposta[1].errno)
               }   
            )


    }

    index(req, res){
        console.debug("GET :: /aulas")
        aulas.mostrargeral()
        .then(
            resposta =>{
                 res.status(resposta[0]).json(resposta[1])
            } 
         ).catch(
             resposta =>{
                 console.debug(resposta[1])
                 res.status(resposta[0]).json("ERRO:" + resposta[1].erno)
            }   
         )
    }

    delete(req,res){
        const id = parseInt(req.params.id)
        aulas.exclui(id)
        .then(
            resposta =>{
                 res.status(resposta[0]).json(resposta[1])
            } 
         ).catch(
             resposta =>{
                 console.debug(resposta[1])
                 res.status(resposta[0]).json("ERRO:" + resposta[1])
            }   
         )
    }

    update(req,res){
        const body = req.body
        const id = parseInt(req.params.id)
        aulas.atualizar(body,id)
        .then(
            resposta =>{
                 res.status(resposta[0]).json(resposta[1])
            } 
         ).catch(
             resposta =>{
                 console.debug(resposta)
                 res.status(resposta[0]).json("ERRO:" + resposta[1].erno)
            }   
         )
        
    }
}

module.exports = new AulasController()
