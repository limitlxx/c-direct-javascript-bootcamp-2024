const express = require('express')
const app = express()

const birds = require('./routes/birds')
const books = require('./routes/books')
const port = 3000

app.use('/birds', birds)
app.use('/books', books) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})