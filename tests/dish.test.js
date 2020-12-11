const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');
const { testDish } = require('./test-data.js');

describe('tests dish class', () => {
    beforeEach(() => {
        return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
    });

    afterAll(() => {
        return pool.end();
    });

    it('tests .post /dish, returns testDish', async () => {
        const { body } = await fakeRequest(app)
            .post('/dish')
            .send(testDish);

        expect(body).toEqual(testDish);
    })
})