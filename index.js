const { time } = require('console')
const express = require('express')
const http = require('http')
const app = express()
const morgan = require('morgan')
const { title } = require('process')

const PORT = process.env.PORT || 4000
const server = http.createServer(app)

app.use(morgan('dev'))
//stactic file: making public direct
app.use(express.static('public'))

//set view pug template engine
app.set('views','./views')
app.set('view engine','pug')

//register route:http://localhost:4000
app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + "/index.html")
})
app.get('/welcome',(req,res)=>{
    res.status(200).render("welcome",{title : 'Welcome page'})
})
app.get('/about',(req,res)=>{
    res.status(200).render("about",{title : 'About page'})
})
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})