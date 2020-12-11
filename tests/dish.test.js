const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');
const { testDish } = require('./test-data.js');

describe('tests dish class', () => {


    it('tests .post /dish, returns testDish', async () => {
        const { body } = await fakeRequest(app)
            .post('/dish')
            .send(testDish);
        console.log(body)
        expect(body).toEqual(testDish);
    })
})