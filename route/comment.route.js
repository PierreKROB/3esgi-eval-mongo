const express = require("express");
const router = express.Router();
const commentCtrl = require("./../controller/comment.controller");

router.post("/", commentCtrl.create);
router.put("/", commentCtrl.update);
router.delete("/", commentCtrl.delete);

module.exports = router;