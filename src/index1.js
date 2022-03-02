const express = require('express');
const app = express();
const port = 8001;

app.get("/", (req,res) => {
    res.send("Here is my website")
})

app.listen(port, () => {
    console.log(`This is no ${port}`)
})