const express = require('express'); // import express so we can use it to make a server
const app = express() // create variable to represent express functionality
const port = 4000 // designate the port number for the server

const cors = require('cors'); // import cors to let us use the array from the link in the front end
app.use(cors()); // use cors to allow cross traffic from the front end to the back end

const bodyParser = require('body-parser'); // add body parser to allow us to read and access the values of the array
app.use(bodyParser.urlencoded({extended: true})); // use body parser to allow us to read and access the values of the array
app.use(bodyParser.json()); // use body parser to allow us to read and access the values of the array

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/movies', (req, res) => { // get request to the link api/movies which will send the array to the front end when it is called
    const movies = [ //  array to be sent to the front end when the link is called
        
            {
            "Title": "Avengers: Infinity War (server)",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War (server)",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "World War Z (server)",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            }
        ];

        res.json({movies}); // send the array to the front end  
    
})

app.use(function(req,res,next) { // cors function to allow the front end to use the array from the back end
    res.header("Access-Control-Allow-Origin","*"); // allow all origins to access the array from the back end
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // allow all methods to access the array from the back end
    res.header("Access-Control-ALlow-Headers", "Origin, X-Requested-WIth, Content-Type, Accept"); // allow all headers to access the array from the back end
    next(); // go to the next function
})

app.post('/api/movies', (req, res) => { // if the user submits a movie to this url perform the following function
    console.log(req.body.title, req.body.year, req.body.poster); // log the submitted form values
    res.send('Movie added!', req.body.title); // send the succesful message to the front end
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})