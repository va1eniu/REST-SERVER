const { Router } = require("express");
const {getUsers, postUsers, delteUsers, putUsers, patchUsers} = require('../controllers/usuario.controllers.js')

const router = Router();

router.get("/", getUsers);

router.post("/", postUsers);

router.delete("/", delteUsers);

router.put("/",putUsers);

router.patch("/", patchUsers);

module.exports = router;
