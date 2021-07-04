const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const test = require('./routers/test');
app.use('/api', test);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`mock server listening at http://localhost:${port}`))
