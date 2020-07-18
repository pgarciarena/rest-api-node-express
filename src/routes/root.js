const { Router } = require('express');
const router = Router();

//route for root api
router.get('/', (req, res) =>{
  let testData = require('../db/test.json');
  let moviesData = require('../db/movies.json');
  res.json( [testData, moviesData]);

  /*
  let htmlData = `
    <p>rest-api end-points:</p>
    <a href="/api/test">test</a>
    <br />
    <a href="/api/movies">movies</a>
  `;
  res.send(htmlData)
  */
 
});

module.exports = router;