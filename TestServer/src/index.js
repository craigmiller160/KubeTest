const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    console.log('Hello Called');
    res.send('Hello World');
});

app.get('/healthcheck', (req, res) => {
    console.log('Healthcheck called');
    res.send('Healthy');
});

app.listen(3000, () => console.log('Running'));