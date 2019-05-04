const server = require('./server.js');
const request = require('supertest');

describe('GET routing for /games', () => {
    it('return status code 200', async () => {
        const response = await request(server).get('/games')
        expect(response.status).toBe(200);
        //expects 200, receives 404 b/c endpoints not made yet, 
        //should correct itself when endpoints are actually created
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

        expect(res.body).toEqual(expected);
        expect(Array.isArray(res.body)).toBe(true);
    });
    // fails for now, res undefined


    it('returns empty array if no games are in db', async  () => {
        const response = await request(server).get('/games');
        expect(response.body).toEqual({});
    })
    //I think it's working?
});

// ### GET /games

// - [ ] The `GET /games` endpoint should return the list of games and HTTP status code 200.
// - [ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. 
//    If there are no games to return, the endpoint should return an empty array.