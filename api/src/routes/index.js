const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouters = require("./dogsRouters");
const temperamentsRouters = require("./temperamentsRouters");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/dogs", dogsRouters);
router.use("/temperaments", temperamentsRouters);



module.exports = router;
