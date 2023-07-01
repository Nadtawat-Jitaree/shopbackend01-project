const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const router = require('./router/myRouter')
const app = express()


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(session({secret:"mysession",resave:false,saveUninitialized:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))

const port = process.env.PORT || 5002

app.get("/", (req,res)=>{
    res.redirect('/index')
})

app.listen(port, ()=>{
    console.log("server started")
})
        
        