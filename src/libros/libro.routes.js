const { Router } = require("express");
const libroController = require("../libros/libro.controller");

const router = Router();

router.get("/", libroController.getLibros);
router.get("/:id", libroController.getLibro);
router.post("/", libroController.createLibro);
router.put("/:id", libroController.updateLibro);
router.delete("/:id", libroController.deleteLibro);

module.exports = router;
