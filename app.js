const express = require('express');
const app = express();
const port =8080
app.get('/',  function (req, res) {
    res.send("Express Js Rest Web API");
});
app.listen(port, function() {
    console.log('Node server running at port 8080');
});