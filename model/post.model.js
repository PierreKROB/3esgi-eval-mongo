/**
 * Créer ici le model pour post
 * 
 * Un post doit avoir au minimum : un message, une date, un userId (auteur du post)
 */

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    message: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    userId: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);