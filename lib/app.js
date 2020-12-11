const express = require('express');
const app = express();
app.use(express.json());


app.get('/test', (req, res) => {
    try {
        res.send({ greeting: 'HELLO!' });
    } catch (e) {
        res.send(e.message)
    }
})





module.exports = app;