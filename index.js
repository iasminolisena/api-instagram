const express = require('express');
require('dotenv').config(); // permite acessar as variáveos de ambiente (.env) 

const app = express();

app.get('/postagens', authorization, (req, res) => {
    res.json([
        "post 1",
        "post 2"
    ]);
});

app.get('/usuarios', authorization, (req, res) => {
    res.json([
        "Chiquim",
        "Juninho"
    ]);
});

function authorization(req, res, next){
    let chave = req.headers['authorization'];

    if (chave !== 'Bearer '+process.env.API_KEY){
        res.status(401).json({
            "error":"Não autorizado"
        });
        return;
    }

    next();
}

app.listen(8000, () => {
    console.log("Api rodando em http://localhost:8000")
});