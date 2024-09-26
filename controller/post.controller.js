const Post = require("./../model/post.model");

/**
 * Methode pour récupérer 10 post (les plus récents) par page
 * @param page le numéro de la page actuelle
 * Si la page est 1 il faut récupérer les 10 post les plus récents
 * Si la page est 2 il faut récupérer les post du 11ème au 20ème les plus récents
 * ...
 */
exports.getAll = async () => {
    try{
        //TODO
        res.status(200).json(listPost);
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Methode pour récupérer un post par son id, et les commentaires associés à ce post
 */
exports.getById = async () => {
    try{
        //TODO
        res.status(200).json(postWithComment);
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Methode pour créer un nouveau post (attention à bien enregistrer la date de création)
 * @body
 * {
 *     message: <string>,
 *     userId: <string>
 * }
 */
exports.create = async (req,res,next ) => {
    try{
        //TODO
        if (req.body.message == undefined || req.body.userId == undefined ) {
            return res.status(400).json({ message: 'Merci de renseigner les paramètres nécessaires.' });}

        else {
            message =req.body.message 
            userId=req.body.userId 

        }

        const Posts =new Post ({  

            message,
            userId ,
        })
        await Posts.save();
        
        res.status(201).json(post);
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Methode pour modifier un post (attention de bien mettre à jour la date du post)
 * @param id l'id du post à modifier
 * @body
 * {
 *     message: <string>
 * }
 */
exports.update = async () => {
    try{
        //TODO
        res.status(201).json({message: "Post mis à jour"});
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Methode pour supprimer un post (attention de bien supprimer les commentaires associés)
 * @param id l'id du post à supprimer
 */
exports.delete = async () => {
    try{
        //TODO
        res.status(200).json({message: "Post supprimé"});
    }catch(e){
        res.status(500).json(e.message);
    }
}
