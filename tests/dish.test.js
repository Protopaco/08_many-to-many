const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');
const { testDish, testDish2 } = require('./test-data.js');

describe('tests dish class', () => {
    afterAll(() => {
        return pool.end();
    });

    it('tests .post /dish, returns testDish', async () => {
        const { body } = await fakeRequest(app)
            .post('/dish')
            .send(testDish);

        expect(body).toEqual(testDish);
    });

    it('tests .post /dish, returns testDish2', async () => {
        const { body } = await fakeRequest(app)
            .post('/dish')
            .send(testDish2);

        expect(body).toEqual(testDish2);
    });

    it('tests .get /dish, returns [testDish, testDish2]', async () => {
        const { body } = await fakeRequest(app)
            .get('/dish');

        expect(body.toEqual([testDish, testDish2]))
    })
})