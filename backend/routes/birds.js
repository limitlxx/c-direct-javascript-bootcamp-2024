const express = require('express')
const router = express.Router()
 
// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

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