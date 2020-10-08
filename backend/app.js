const express = require('express')
const app = express()
const port = 5000

app.get('/hello', (req, res) => {
  res.json({data:'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})