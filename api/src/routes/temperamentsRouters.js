const { Router } = require('express');
const router = Router();
const getTemperaments = require("../controllers/getTemperaments");

//! RUTA PARA OBTENER TEMPERAMENTS Y GUARDARLOS A SU VEZ EN LA BD
router.get("/", getTemperaments);

module.exports = router;