const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const aylien = require("aylien_textapi");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../../dist", "index.html"));
})

app.post("/evaluate", function (req, res) {
    const link = req.body.link;
    if (link) {
        const textapi = new aylien({
         application_id: process.env.API_ID,
         application_key: process.env.API_KEY
         });

        if (textapi) {
            textapi.classify({ url: link }, (error, response) => {
            if (error === null) {
            res.json(response);
            } else {
                console.log(error)
            const message = "Article isn't possible to classify.";
            res.json(JSON.stringify(message));
            }
        });
    }
        } else {
            const message = "Please enter a valid URL for evaluation.";
            res.json(JSON.stringify(message));
        }
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('App is listening on port 3000!')
})



