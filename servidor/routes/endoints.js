const express = require("express");
const router = express.Router();

const { login, usuarios_login } = require("../controllers/loginController");
const { createMesa, getMesas, deleteMesa, updateMesa } = require("../controllers/mesasController");
const { getReservaciones, createReservacion, deleteReservacion, updateReservacion } = require("../controllers/reservacionController");

router.get("/login-list", usuarios_login);
router.post("/login", login);

router.post("/agregar-mesa", createMesa);
router.get("/get-mesas", getMesas );
router.delete("/delete-mesas/:id", deleteMesa);
router.post("/editar-mesa/:id", updateMesa)

router.get("/get-reservaciones", getReservaciones);
router.post("/agregar-reservacion", createReservacion);
router.delete("/delete-reservacion/:id", deleteReservacion);
router.put("/editar-reservacion/:id", updateReservacion);

module.exports = router;