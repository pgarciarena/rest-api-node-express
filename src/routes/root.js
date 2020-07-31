const {Router} = require('express');
const router = Router();

const testDb = require('../db/test.json');
const moviesDb = require('../db/movies.json');

//route for root /api
router.get('/', (req, res) => {
    res.json([testDb, moviesDb]); //respondo con un json que contiene el json testDb y el json moviesDb

    /*
    //podríamos mandar un html como respuesta que contenga <p> <a> etc
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