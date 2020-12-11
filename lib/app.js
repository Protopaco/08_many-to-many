const express = require('express');
const app = express();
app.use(express.json());
const Dish = require('./models/dish.js')
const Ingredient = require('./models/ingredient.js')


app.get('/test', (req, res) => {
    try {
        res.send({ greeting: 'HELLO!' });
    } catch (e) {
        res.send(e.message);
    }
})

app.post('/ingredient', async (req, res) => {
    try {
        res.send(await Ingredient.insert(req.body))
    } catch (e) {
        res.send(e.message)
    }
})

app.get('/ingredient', async (req, res) => {
    try {
        res.send(await Ingredient.find());
    } catch (e) {
        res.send(e.message);
    }
})

app.get('/ingredient/:id', async (req, res) => {
    try {
        res.send(await Ingredient.findById(req.params.id));
    } catch (e) {
        res.send(e.message);
    }
})

app.put('/ingredient/:id', async (req, res) => {
    try {
        res.send(await Ingredient.update(req.params.id, req.body));
    } catch (e) {
        res.send(e.message);
    }
})

app.delete('/ingredient/:id', async (req, res) => {
    try {
        res.send(await Ingredient.delete(req.params.id))
    } catch (e) {
        res.send(e.message);
    }
})

app.post('/dish', async (req, res) => {
    try {
        res.send(await Dish.insert(req.body));
    } catch (e) {
        res.send(e.message);
    }
})

app.get('/dish', async (req, res) => {
    try {
        res.send(await Dish.find());
    } catch (e) {
        res.send(e.message);
    }
});

app.get('/dish/:id', async (req, res) => {
    try {
        res.send(await Dish.findById(req.params.id));
    } catch (e) {
        res.send(e.message);
    }
});

app.put('/dish/:id', async (req, res) => {
    try {
        res.send(await Dish.update(req.params.id, req.body));
    } catch (e) {
        res.send(e.message);
    }
})




module.exports = app;