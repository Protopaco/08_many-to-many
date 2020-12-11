const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');
const { testIngredient1, updatedTestIngredient1, testIngredient2, testIngredient3, testIngredient4, testIngredient5 } = require('./test-data.js');
const { update } = require('../lib/models/ingredient.js');

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

    it('tests .post /ingredient, returns testIngredient5', async () => {
        const { body } = await fakeRequest(app)
            .post('/ingredient')
            .send(testIngredient5);

        expect(body).toEqual(testIngredient5);
    });

    it('tests .get /ingredient, returns all ingredients', async () => {
        const { body } = await fakeRequest(app)
            .get('/ingredient')

        expect(body).toEqual([
            testIngredient1, testIngredient2, testIngredient3, testIngredient4, testIngredient5
        ])

    })

    it('test .getById /ingredient, returns testIngredient1', async () => {
        const { body } = await fakeRequest(app)
            .get(`/ingredient/${testIngredient1.id}`);

        expect(body).toEqual(testIngredient1);


    });

    it('test .update /ingredient, returns updatedTestIngredient1', async () => {
        const { body } = await fakeRequest(app)
            .put(`/ingredient/${updatedTestIngredient1.id}`)
            .send(updatedTestIngredient1);

        expect(body).toEqual(updatedTestIngredient1)
    })

    it('test .delete /ingredient, returns testIngredient5', async () => {
        const { body } = await fakeRequest(app)
            .delete(`/ingredient/${testIngredient5.id}`)

        expect(body).toEqual(testIngredient5);
    })
})