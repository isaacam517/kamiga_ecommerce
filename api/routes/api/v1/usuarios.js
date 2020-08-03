const router = require("express").Router();
const auth = require("../../auth");
const UsuarioController = require("../../../controllers/UsuarioController");

const UsuarioController = new UsuarioController();

router.get("/", auth.required, UsuarioController.index);
router.get("/:id", auth.requered, UsuarioController.show);

router.post("/login", UsuarioController.login);
router.post("/registrar", UsuarioController.store);
router.put("/", auth.required, UsuarioController.update);
router.delete("/", auth.required, UsuarioController.remove);

router.get("/recuperar-senha", usuarioController.showRecovery);
router.post("/recuperar-senha", usuarioController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);

module.exports = router;