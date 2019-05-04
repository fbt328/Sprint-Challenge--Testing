const server = require('./server.js');
const request = require('supertest');

describe('GET routing for /games', () => {
    it('return status code 200', async () => {
        const response = await request(server).get('/games')
        expect(response.status).toBe(200);
      
    });
    it('returns array of all games', async() => {
        const response = await request(server).get('/games');
        const expected = [
            {
                title: 'Final Fantasy VII',
                genre: 'JRPG',
                releaseYear: 1997
            }
                        ];

        expect(response.body).toEqual(expected);
        expect(Array.isArray(response.body)).toBe(true);
    });
   


    it('returns empty array if no games are in db', async  () => {
        const response = await request(server).get('/games');
        expect(response.body).toEqual();
    })
  
});

describe('POST routes for /games', () => {
    it('returns 422 if required data is missing', async () => {
        const incompleteData = {
            title: 'Final Fantasy VII',
            releaseYear: 1997
        }
        const response = await request(server)
        .post('/games')
        .send(incompleteData);

        expect(response.status).toBe(422);
    })
    it('return 201 if complete data submitted', async () => {
        const game = 
            {
                title: 'Final Fantasy VII',
                genre: 'JRPG',
                releaseYear: 1997
            }
        const res = await request(server)
        .post('/games')
        .send(game)
        
        expect(res.status).toBe(201);
    })
    it('return the JSON', async () => {
        const newGamePlus =
        {
        title: 'Final Fantasy VII',
        genre: 'JRPG',
        releaseYear: 1997
        }
        
        const res = await request(server)
        .post('./games')
        .send(newGamePlus)

        expect(res.type).toBe('application/json');
    })
})

// ### GET /games

// - [ ] The `GET /games` endpoint should return the list of games and HTTP status code 200.
// - [ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. 
//    If there are no games to return, the endpoint should return an empty array.

// ### POST /games

// - [ ] The `POST /games` endpoint should take in an object that looks like this

//   ```js
//   {
//     title: 'Pacman', // required
//     genre: 'Arcade', // required
//     releaseYear: 1980 // not required
//   }
//   ```

// - [ ] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
// - [ ] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.
