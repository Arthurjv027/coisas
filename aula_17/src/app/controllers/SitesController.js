
let sites = [
    {id:1, name:"SENAI ES", site:"htpps://senaies.com.br/"},
    {id:2, name:"SENAI ES", site:"htpps://senaies.com.br/"},
    {id:3, name:"SENAI ES", site:"htpps://senaies.com.br/"}
]

class SitesController{
    //Mostra a lista de sites
    index(req,res){
        console.debug("GET :: /sites/:id")
        return res.json(sites)
    }

    //Mostra um elemento da lista
    show(req,res){
        const id = parseInt(req.params.id)
        const site = sites.find(function(site){
            return site.id === id
        })
        const status = site ? 200:404
        console.debug("GET :: /sites/:id")
        return res.json(site)
    }  
    
    //Inserir um elemento na lista
    create(req,res){
        const{name,site} = req.body
        const id = sites[sites.length-1].id+1
        const newSite = {id:id,name:name,site:site}

        sites.push(newSite)

        console.debug("POST :: /sites/:id")
        return res.status(201).json(newSite)

        res.json(name)
    }  
    
    //Atualizar um registro
    update(req,res){
        const id = parseInt(req.params.id)

        const {name,site} = req.body
    
        const index = sites.findIndex(function(site){
            return site.id === id
        })  

        const status = index >= 0 ? 200:400

        if(index>=0){
            sites[index] = {id:id,name:name,site:site}
        }
    
        console.debug("PUT :: /sites/:id")
        return res.json(res.status(status).json(sites[index]))
    }  
    
    //Deletando um registro 
    destroy(req,res){
        const id = parseInt(req.params.id)

    const index = sites.findIndex(function(site){
        return site.id === id
    })

    const status = index >= 0 ? 200:404

    if(index>=0){
        sites.splice(index,1)
    }

    console.debug("DELETE :: /sites/:id")
    return res.status(status).json()  
    }      
    
}

module.exports = new SitesController()