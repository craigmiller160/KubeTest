const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    console.log('Hello Called');
    res.send('Hello World');
});

let counter = 0;

app.get('/healthcheck', (req, res) => {
    if (counter === 10) {
        console.log('Unhealthy Healthcheck');
        res.status(500).send('Unhealthy');
    } else {
        counter++;
        console.log('Healthy Healthcheck ' + counter);
        res.send('Healthy');
    }
});

app.listen(3000, () => console.log('Running'));