const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const moviesDb = require('../db/movies.json');
const movies = moviesDb.movies;

router.get('/movies', (req, res) =>{
  //respondo al navegador con un json
  res.json(movies);
});

router.post('/movies', (req, res) =>{
  const {title, director, year, rating} = req.body;

  if( title && director && year && rating ){
    const id = movies.length + 1;
    const newMovie = {id, ...req.body}; 
    movies.push(newMovie); //actualizo mis movies pero solo en memoria (no en el archivo json)
    res.json(movies);
  }else{
    res.status(500).json({ error: 'There was an error.'} );
  }
});

router.put('/movies/:id', (req, res) => {
  const {id} = req.params;
  const {title, director, year, rating} = req.body;

  if( title && director && year && rating ){
    _.each(movies, (movie, i) => {
      if(movie.id == id){
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(movies);
  }else{
    res.status(500).json({error: 'There was an error.'});
  }
});

router.delete('/movies/:id', (req, res) => {
  const {id} = req.params;
  _.each(movies, (movie, i) => {
    if(movie.id == id){
      movies.splice(i,1);
    }
  });
  res.json('movies');
});

module.exports = router;