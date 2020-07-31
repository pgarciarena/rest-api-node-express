const {Router} = require('express');
const router = Router();

const testDb = require('../db/test.json');
const test = testDb.test;


// test router ( /api/test )
router.get('/test', (req, res) => {
    res.json(test);
});

module.exports = router;