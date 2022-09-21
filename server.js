const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const port = 3000;

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));
app.listen(port, () => { console.log(`server is running at ${port}`) })

app.get('/apiFetch/:ipval', async (req, res) => {
    apiKey = "at_CHkmutpTHn8G9IAuv4ixZoQHxI3VV";
    let ipN = req.params.ipval;
    const lets = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=`+apiKey+`&ipAddress=`+ipN)
    try {
        var data = await lets.json();
        res.send(data)
        console.log("this is data" + data);
    } catch (err) {
        console.log(err)
    }
})
