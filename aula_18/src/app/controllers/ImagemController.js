
const Imagem = require("../models/Imagem")

class ImagemController{
    //Mostra a lista de sites
    index(req, res){
        console.debug("GET :: /sites")
        return res.json(sites)
    }

    //Inserindo uma imagem 
    create(req,res){
        let alternativo =  req.body.alternativo
        let nomeImagem = req.files.imagem.name

        //Separando extensão do arquivo
        nomeImagem = nomeImagem.split(".")

        //pegando extensão
        let extensao = new Date().getTime() + "." + nomeImagem[nomeImagem.length-1]

        if(extensao === "jpg"){  
                 
            let arquivo = req.files.imagem

            Imagem.inserir(arquivo, alternativo, nomeImagem)
            res.json()
        }else{
            //Erro 415 é tipo de arquivo não suportado

            res.status(415).json({message: "Tipo de arquivo não suporta"})
        }

    }
}

module.exports = new ImagemController()