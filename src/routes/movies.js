const { Router } = require('express');
const router = Router();

//route for movies
router.get('/movies', (req, res) =>{
  let moviesData = require('../db/movies.json');
  res.json(moviesData);
});

router.post('/movies', (req, res) =>{
  console.log(req.body);
  res.send('received');
})

module.exports = router;