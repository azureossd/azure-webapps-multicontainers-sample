const express = require('express')
const app = express()
const port = 3001

app.get('/api/items',function(req,res){
    res.json({ status: 'Response from api.'});
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`))