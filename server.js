const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('IFT 458 Middleware Lab');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});