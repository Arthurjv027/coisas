
const Imagem = require("../models/Imagem")
const { update } = require("./SitesController")

class ImagemController{
    //Mostra a lista de imagens
    index(req, res){
        console.debug("GET :: /imagens")
        Imagem.mostrarTodos()
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

    //Inserindo uma imagem 
    create(req,res){
        let alternativo =  req.body.alternativo
        let nomeImagem = req.files.imagem.name

        //Separando extensão do arquivo
        nomeImagem = nomeImagem.split(".")

        //pegando extensão
        let extensao = nomeImagem[nomeImagem.length-1]

        if(extensao === "jpg"){  
             
            nomeImagem = new Date().getTime() + "." + extensao

            let arquivo = req.files.imagem
            // o model retorna uma promessa o then é caso positivo e o catch negativo

            Imagem.inserir(arquivo, alternativo, nomeImagem).then(
               resposta =>{
                    res.status(resposta[0]).json(resposta[1])
               } 
            ).catch(
                resposta =>{
                    console.debug(resposta[1])
                    res.status(resposta[0]).json("ERRO:" + resposta[1].errno)
               }   
            )
            
        }else{
            //Erro 415 é tipo de arquivo não suportado

            res.status(415).json({message: "Tipo de arquivo não suporta"})
        }

    }

    update(req,res){
        const body = req.body.alternativo
        const id = parseInt(req.params.id)
        Imagem.atualizarTodos(body,id)
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
        Imagem.apagarTodos(id)
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
}


module.exports = new ImagemController()