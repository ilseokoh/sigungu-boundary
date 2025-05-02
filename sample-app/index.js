const express = require('express');
const app = express();

app.use(express.static('public'));

var server = app.listen(3002, () => { 

    console.log('Server running at http://localhost:3002')
});