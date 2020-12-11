const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const fakeRequest = require('supertest');
const app = require('../lib/app.js');


describe('tests basic server functionality', () => {
    it('tests /test endpoint', async () => {
        const { body } = await fakeRequest(app)
            .get('/test');

        expect(body).toEqual({ greeting: 'HELLO!' })
    })
})