const express = require('express')
var path = require('path');
const app = express()

const birds = require('./routes/birds')
const books = require('./routes/books')

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

const port = 3000
app.use(myLogger)
app.use(requestTime)

app.use('/app', express.static(path.join(__dirname, 'public')));

app.use('/birds', birds)
app.use('/books', books)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})