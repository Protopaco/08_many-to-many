const app = require('./lib/app.js');
const PORT = process.env.PORT || 1234;


app.listen(PORT, () => {
    console.log(`LISTENING AT ${PORT}`);
});