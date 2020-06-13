const express = require('express');
const axios = require('axios');

const app = express();

app.get('/test', async (req, res) => {
    console.log('Test called');
    const ajaxRes = await axios.get('http://localhost:3000/hello');
    res.send(`Ajax Response: ${ajaxRes.data}`);
});

app.get('/healthcheck', (req, res) => {
    console.log('Healthcheck');
    res.send('Healthy');
});

app.listen(3001, () => console.log('Running'));