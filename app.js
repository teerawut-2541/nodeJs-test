var app = require('express')();
const fetch = require('node-fetch');
const http = require('https');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const url = require('url');
app.use(bodyParser.json());
app.listen(port, () => {
  console.log('server', port);
});
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get('/fetchdata', function (req, res) {
  const data = fetch('https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json')
    .then(res => res.json()
    )
    let userToken = data
console.log(userToken) // Promise { <pending> }

userToken.then(function(result) {
  res.status(200).send(result);
})
  })
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
  });