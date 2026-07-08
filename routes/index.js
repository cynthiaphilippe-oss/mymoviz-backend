var express = require('express');
var router = express.Router();


/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET movies from TMDB */
router.get('/movies', async (req, res) => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bf8556d627ea4333ffa3711f34c6f2e6`);
  const data = await response.json();

  res.json({ movies: data.results });
});

module.exports = router;