const express = require('express');
const server = express();
server.use(express.json());

let db = [
    {
        title: 'Final Fantasy VII',
        genre: 'JRPG',
        releaseYear: 1997
    }
];
// server gets and server posts
server.get('/games', (req, res) => {
    res.status(200)
        .json(db)
});

server.post('/games', (req, res) => {
    let {title, genre} = req.body;
    if (title && genre) {
        res.status(201)
            .json(req.body);
        } else {
            res.status(422)
                .json({message: 'either title or genre is missing'});
        }


})


module.exports = server;