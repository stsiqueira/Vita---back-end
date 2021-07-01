import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';
// const express = require('express');
// const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 4000;


//mongoose connection
var MongoClient = mongodb.MongoClient;
const connectionString = 'mongodb+srv://vita:ElO5xv17hGqX@vita.cnehq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})

const routes = (app) => {
    app.route('/getAllFoods')
        .get((req, res, next) => {
            //middleware
            console.log("Req from:" + req.originalUrl);
            console.log("Req method:" + req.method);
            next();
        }, getAllFoods),

        app.route('/getAllNutrients')
        .get((req, res, next) => {
            //middleware
            console.log("Req from:" + req.originalUrl);
            console.log("Req method:" + req.method);
            next();
        }, getAllNutrients)

    // app.route('/Fruits/:name')
    // //get a specific contact
    // .get(getfruitbyName)  

}

const getAllFoods = (req, res) => {

    MongoClient.connect(connectionString, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Vita");
        dbo.collection("Food").find({}).toArray(function (err, result) {
            if (err) throw err;          
            db.close();
            res.json(result);
        });
    });

}

const getAllNutrients = (req, res) => {

    MongoClient.connect(connectionString, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Vita");
        dbo.collection("Nutrients").find({}).toArray(function (err, result) {
            if (err) throw err;          
            db.close();
            res.json(result);
        });
    });

}

routes(app);