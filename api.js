const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //res.send('API SERVER IS WORKING');
    console.log("api.js 실행");
});