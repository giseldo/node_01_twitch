const express = require("express");
const path = require("path")
const MongoClient = require("mongodb").MongoClient;

app = express();

let title = "Conteudo dinamico do titulo";

const url = "mongodb://127.0.0.1:27017/locadora"

let usuarios = {}



//app.use(express.static(path.join(__dirname + "/public/")));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/Cadastro", (req, res) => {

    MongoClient.connect(url, function(err, db){
        dbo = db.db("locadora");
        dbo.collection("usuarios").find({}).toArray(function(err, result) {
            usuarios = result;
            db.close();
        });
    });


    res.render("cadastro", {title: title, usuarios: usuarios})
});

app.get("/", (req, res) => {
    res.end("<html><body>Pagina HOME<body><html>")
});

app.listen(3000);