//Load express module with `require` directive
var express = require('express')
var app = express()
const port = 8090;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  const name = req.query.name ? req.query.name: 'World'
  res.send(`Hello, ${name}`)
})

app.get('/about', function (req, res) {
  res.send(`<h3>About page is so cool</h3>`)
})

// Launch listening server on a port
app.listen(port, function () {
  console.log('App listening on port ' + port)
})
