const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/locadora"

MongoClient.connect(url, function(err, db){
        dbo = db.db("locadora");
        dbo.collection("usuarios").find({}).toArray(function(err, result) {
            console.log(result)
            db.close();
        });
});
