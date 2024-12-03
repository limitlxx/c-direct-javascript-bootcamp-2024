const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  let x = 7 * 7
  let y = `Get numbers os birds ${x}`
  res.send(y)
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router