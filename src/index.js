var express = require('express');
let path = require('path')
var app = express();
var hbs = require('hbs');


//const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../views");
const partialsPath = path.join(__dirname,"../templetes/partials");
//app.use(express.static(staticPath)); 
app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req,res) => {
    res.render("index");
})
app.get("/about", (req,res) => {
    res.render("about");
})
app.get("/", (req,res) => {
    res.send("Welcome to my home page")
})

//app.get("/about", (req,res) => {
   // res.send("hello from the about page")
//})

app.get("*", (req,res) => {
    res.render("404", {
        errorcomment: "Page not found"
    })
})

//app.get("/contact", (req,res) => {
 //   res.send("Welcome to my contact page")
//})

{/*app.get("/temp", (req,res) => {
    res.send([
        {
        id : 1,
        name: "prince"
    },
    {
        id : 1,
        name: "prince"
    },
    {
        id : 1,
        name: null
    },
])
})*/}

app.listen(8000, () => {
    console.log("hello")
})


