/**
 * Créer ici le model pour user
 * 
 * Un user doit avoir au minimum : un login (unique) et un mot de passe
 */
const {Shema, model} = require('mongoose');

const User = new Shema({
    email:{type:String, require : true, unique:true},
    password:{type:String, require: true},
    username:{trype:String},

})
module.exports = model('User', User);