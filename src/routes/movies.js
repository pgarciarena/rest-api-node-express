const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const moviesDb = require('../db/movies.json');
const movies = moviesDb.movies;

//requiero de fs para manejar el sistema de archivos y asi poder leer y escribir ficheros
const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../db/movies.json');
//console.log (data);

const mov = JSON.parse(data);
console.log(mov);
console.log(mov.movies[0].title + '(' + mov.movies[0].year + ')');


// GET router ( /api/movies )
router.get('/movies', (req, res) => {
    //respondo al navegador con un json
    console.log(movies);
    res.json(movies);
});


// POST router ( /api/movies ) --> ADD
router.post('/movies', (req, res) => {
    const {title, director, year, rating} = req.body;

    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push(newMovie); //actualizo mis movies pero solo en memoria (no en el archivo json)
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});


// PUT router ( /api/movies/:id ) --> UPDATE
router.put('/movies/:id', (req, res) => {
    const {id} = req.params; //obtengo el id de los parametros de mi url, en este caso :id
    const {title, director, year, rating} = req.body; //obtengo los datos que vienen en mi body

    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            console.log('movie index: ', i);
            if (movie.id === id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});


// DELETE router ( /api/movies/:id ) --> REMOVE
router.delete('/movies/:id', (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id === id) {
            movies.splice(i, 1);
        }
    });
    res.json('movies');
});

module.exports = router;