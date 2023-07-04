var express = require("express")
var dl = require('ytdl-core')
var body = require("body-parser")
var session = require('express-session')

var app = express()
app.set("view engine", 'ejs')
app.use(body.urlencoded({extended: false}))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'cu',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get("/", (req, res)=>{
   res.render("home.ejs")
   app
})
app.get("/marcelly", function(req, res){
  res.send("<h1>vai tomar no cu filha da putaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>")
})
app.get("/kauan", function(req, res){
  res.send("<h1>gordoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</h1>")
})
app.post("/", function(req, res){
  req.session.url = req.body.url
  if(dl.validateURL(req.session.url)){
    res.header("Content-Disposition", 'attachmentt; filename='+ Date.now()+'.mp3')
    return dl(req.session.url, {filter: "audioonly"}).pipe(res)
  }else{
    res.send("<h1>error</h1>" + "<br> <a href='/'>retornar</a>")
  }
})


app.listen(8080)