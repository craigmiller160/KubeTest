const express = require('express');
const axios = require('axios');

const app = express();

app.get('/test', async (req, res) => {
    console.log('Test called');
    try {
        const ajaxRes = await axios.get('http://testserver:3000/hello', { timeout: 2 });
        res.send(`Ajax Response: ${ajaxRes.data}`);
    } catch (ex) {
        res.status(500).send(ex.message);
    }
});

app.get('/healthcheck', (req, res) => {
    console.log('Healthcheck');
    res.send('Healthy');
});

app.listen(3001, () => console.log('Running'));