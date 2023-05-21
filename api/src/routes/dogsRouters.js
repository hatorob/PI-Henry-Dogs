const { Router } = require('express');
const router = Router();
const getAllDogs = require("../controllers/getAllDogs");
const getDogById = require("../controllers/getDogById");
const getDogsByName = require("../controllers/getDogsByName");
const createDogs = require("../controllers/createDogs");

//! RUTA PARA OBTENER TODOS LOS PERROS DESDE LA API
router.get("/", getAllDogs);
//! RUTA PARA OBTENER PERROS POR NAME
router.get("/name", getDogsByName);
//! RUTA PARA PERRO POR ID
router.get("/:id", getDogById);
//! RUTA PARA CREAR PERROS
router.post("/", createDogs);

module.exports = router;