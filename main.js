const express = require('express')
const app = express()
const port = 3000
app.use(express.static('src'))
app.get('/', (req, res) => {
  res.sendFile('src/index.html',{root: __dirname})
})
app.get('/Premium', (req, res) => {
  res.sendFile('src/premium.html',{root: __dirname})
})
app.get('/Support', (req, res) => {
  res.sendFile('src/support.html',{root: __dirname})
})
app.get('/SignUp', (req, res) => {
  res.sendFile('src/SignUp.html',{root: __dirname})
})
app.get('/LogIn', (req, res) => {
  res.sendFile('src/LogIn.html',{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})