const {Router} = require('express');
const router = Router();

//ahora puedo crear mis rutas haciendo uso del módulo Router de express
router.get('/', (req, res) => {
    res.json({
        "name": "Estamos en HOME",
        "url": "http://localhost:3000"
    });
});

module.exports = router;