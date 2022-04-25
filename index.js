const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send((parseFloat(req.query.num1) + parseFloat(req.query.num2)).toString())
   console.log("solved " + req.query.num1 + " + " + req.query.num2 + " and sent data")
})

app.listen(port)
console.log("listening on port: " + port)