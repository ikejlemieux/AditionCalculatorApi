const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send((parseFloat(req.query.num1) + parseFloat(req.query.num2)).toString())
})

app.listen(port)
console.log("listening on port:" + port)