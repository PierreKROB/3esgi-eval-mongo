const User = require("./../model/user.model");
const bcrypt = require("bcrypt");

/**
 * Methode pour la connexion utilisateur
 * @body
 * {
 *     email: <string>,
 *     password: <string>
 * }
 */
exports.login = async (req,res) => {
    try{
            //TODO
            const user = await User.findOne({email: req.body.email});
            
            if(bcrypt.compare(req.body.password, user.password)){
                res.status(200).send("connexion reussi.");
            }
            else
                res.status(401).send("le mot de passe n'est pas correct.")
    }
    catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour la création d'un compte utilisateur
 * @body
 * {
 *     email: <string>,
 *     password: <string>,
 *     username: <string>
 * }
 */
exports.signin= async (req,res) => {
    try{
        //TODO
            let newUser = {
                 ...req.body,
                password : bcrypt.hashSync(req.body.password,10)
            }
            await User.create(newUser);
        

        res.status(200).json(listUser);
    }
    catch(e){
        res.status(500).json(e.message);
    }
}