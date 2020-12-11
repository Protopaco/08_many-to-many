const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');
const { testDish, testDish2, testIngredient1 } = require('./test-data.js');

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
        console.log(body)
        expect(body).toEqual([testDish, testDish2])
    });

    it('test .get /dish/:id, returns joined testDish', async () => {
        const { body } = await fakeRequest(app)
            .get(`/dish/${testDish.id}`)

        expect(body).toEqual({ ...testDish, ...testIngredient1, ...testIngredient2, ...testIngredient3, ...testIngredient4 })
    })
})