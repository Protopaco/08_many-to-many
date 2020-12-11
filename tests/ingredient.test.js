const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');
const { testDish, testDish2, testIngredient1, testIngredient2, testIngredient3, testIngredient4 } = require('./test-data.js')

describe('tests ingredient class', () => {
    beforeAll(() => {
        return pool.query(fs.readFileSync('./data/setup.sql', 'utf-8'));
    });

    afterAll(() => {
        return pool.end();
    });

    it('tests .post /ingredient, returns testIngredient1', async () => {
        const { body } = await fakeRequest(app)
            .post('/ingredient')
            .send(testIngredient1);

        expect(body).toEqual(testIngredient1);
    })

    it('tests .post /ingredient, returns testIngredient2', async () => {
        const { body } = await fakeRequest(app)
            .post('/ingredient')
            .send(testIngredient2);

        expect(body).toEqual(testIngredient2);
    })

    it('tests .post /ingredient, returns testIngredient3', async () => {
        const { body } = await fakeRequest(app)
            .post('/ingredient')
            .send(testIngredient3);

        expect(body).toEqual(testIngredient3);
    })

    it('tests .post /ingredient, returns testIngredient4', async () => {
        const { body } = await fakeRequest(app)
            .post('/ingredient')
            .send(testIngredient4);

        expect(body).toEqual(testIngredient4);
    });

    it('tests .get /ingredient, returns all ingredients', async () => {
        const { body } = await fakeRequest(app)
            .get('/ingredient')

        expect(body).toEqual([
            testIngredient1, testIngredient2, testIngredient3, testIngredient4
        ])

    })

    it('test .getById / ingredient, returns testIngredient1', async () => {
        const { body } = await fakeRequest(app)
            .get(`/ingredient/${testIngredient1}`);

        expect(body).toEqual(testIngredient1);


    })
})