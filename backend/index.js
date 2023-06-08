const express = require('express');
const app = express();
const router = require('./router/router')

app.use(router);

app.listen(3000, function(req, res){
    console.log("Servidor rodando na porta 3000");
});