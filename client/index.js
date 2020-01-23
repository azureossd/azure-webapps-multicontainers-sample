const express = require('express')
const app = express()
const port = 3000

app.get('/',function(req,res){
    var request = require('request');
    var apiURL = process.env.apiURL +  '/api/items';
    console.log("Requesting: " + apiURL)
    request(apiURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      } else {
        res.send(error);
      }
    });
});

app.listen(port, () => console.log(`Client app listening on port ${port}!`))