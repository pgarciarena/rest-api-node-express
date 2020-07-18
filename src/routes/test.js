const { Router } = require('express');
const router = Router();

//route for test 
router.get('/test', (req, res) =>{
  let testData = require('../db/test.json');
  res.json(testData);
});

module.exports = router;