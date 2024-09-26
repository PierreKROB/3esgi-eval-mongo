const Comment = require("./../model/comment.model");

/**
 * Méthode pour créer un nouveau commentaire
 * @body
 * {
 *     message: <string>,
 *     userId: <string>,
 *     postId: <string>
 * }r
 */
exports.create = async (req, res, next) => {
    try {
        //TODO
        if (req.body.message == undefined || req.body.userId == undefined || req.body.postId == undefined) {
            return res.status(400).json({ message: 'Merci de renseigner les paramètres nécessaires.' });
        }
        else {
            message = req.body.message
            userId = req.body.userId
            postId = req.body.userId

        }

        const comment = new Comment({
            message,
            userId,
            postId
        })
        await Comment.save();

        res.status(201).json(comment);
    }

    catch (e) {
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour modifier un commentaire
 * @param id l'id du commentaire à modifier
 * @body
 * {
 *     message: <string>,
 * }
 */
exports.update = async (req, res, next) => {
    try {


        const updatedata = req.body.message;
        //TODO
        const comments = await Comment.findOnAndUpdate(
            { id: req.param.id },
            { $set: { message: updatedata } },
            { new: true, runValidators: true }

        )
        if (!comments) {
            return res.status(404).json({ message: 'comment not find.' });
        }
        res.status(200).json({ message: "Commentaire mis à jour" });
    } catch (e) {
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour supprimer un commentaire
 * @param id l'id du commentaire à supprimer
 */
exports.delete = async (res, req, next) => {
    try {
        //TODO
        const comment = await Comment.findByIdAndDelete(req, param.id)

        if (!comment) {
            return res.status(404).json({ message: 'commentaire non trouvé' });
        }

        res.status(200).json({ message: "Commentaire supprimé" });
    } catch (e) {
        res.status(500).json(e.message);
    }
}