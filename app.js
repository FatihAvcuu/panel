var fs = require("fs");
var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.send('api work 8000 port')
})

//api
app.post('/api/login', function (req, res) {
    let email = req.query.email;
    let pw = req.query.pw;
    var access = false;
    fs.readFile('json/user.json',async function (err, data) {
        let users = JSON.parse(data);
        await users.user.map(user => {
            if (email === user.email && pw === user.pw) {
                console.log(`${user.name} sektöre giriş yaptı!`)
                access = true;
                res.send(user)
            }
        })
        if(!access){
            res.send('incorrect')
        }
    })
})

app.listen(process.env.PORT || 8000)