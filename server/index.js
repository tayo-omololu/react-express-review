const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const router = require('./router')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router)

app.get('/name', (req, res) => res.send('Tayo'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
