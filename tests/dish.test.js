const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');
const { testDish, updatedTestDish1, testDish2 } = require('./test-data.js');
const { update } = require('../lib/models/dish.js');

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

        expect(body).toEqual([testDish, testDish2])
    });

    it('test .get /dish/:id, returns joined testDish1', async () => {
        const { body } = await fakeRequest(app)
            .get(`/dish/${testDish.id}`)

        expect(body).toEqual({
            name: 'cookies',
            ingredients: ['flour', 'water', 'sugar', 'butter']
        })
    })

    it('test .get /dish/:id, returns joined testDish2', async () => {
        const { body } = await fakeRequest(app)
            .get(`/dish/${testDish2.id}`)

        expect(body).toEqual({ name: 'roux', ingredients: ['flour', 'water', 'butter'] })
    });

    it('test .set /dish/:id, returns updatedTestDish1', async () => {
        const { body } = await fakeRequest(app)
            .put(`/dish/${updatedTestDish1.id}`)
            .send(updatedTestDish1);

        expect(body).toEqual(updatedTestDish1)
    })

    it('test .delete /dish/:id, returns updatedTestDish1', async () => {
        const { body } = await fakeRequest(app)
            .delete(`/dish/${updatedTestDish1.id}`);

        expect(body).toEqual(updatedTestDish1)
    })
})