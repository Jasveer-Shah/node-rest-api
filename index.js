const express = require('express');

const app = express()
const port = 8080;

// Parse json using express
app.use(express.json());
app.use(express.urlencoded({extended: false}))

let movies = [
    {
        id: '1',
        title: 'inception',
        director: 'chritopher',
        releaseDate:'2010'
    },
    {
        id: '2',
        title: 'ddlj',
        director: 'chritopher',
        releaseDate:'2010'
    },
]

// get the movies list in  the form of Json
app.get('/movie', (req, res)=>{
    res.json(movies)
})

// add a movie in  the list
app.post('/movie', (req, res)=>{
    const movie = req.body;

    console.log(movie)
    movies.push(movie)
    res.send('Movie is added to the list!')
})
// search for a movie in the list aginst id
app.get('/movie/:id', (req, res)=>{
const id = req.params.id;
     
    for(let movie of movies){
        if(movie.id === id){
            res.json(movie)
            return
        }
    } 
res.status(400).send('Movie not found')
})

// delete a record in our array
app.delete('/movie/:id', (req, res)=>{
    const id = req.params.id;

    movies = movies.filter(movie =>{
        if(movie.id !== id){
            return true
        }
        return false
    })
    res.send("movie is deleted")
})

// set the server to listen at the port
app.listen(port, ()=>console.log(`server is listening at port : ${port}`))