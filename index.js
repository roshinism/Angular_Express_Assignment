var express = require('express')
var mysql = require ('mysql')
var bodyparser = require('body-parser')
var cors = require('cors')

var connection = mysql.createConnection({
    host:'localhost',
user:'root',
password:'',
database:'projectProduct',
port:'3306'
})

connection.connect((error)=>{
    if(error){
        throw error
    }
    console.log("Connected to projectProduct database")
})

var expressApp = express()
expressApp.use(bodyparser.json())
expressApp.use(cors())


expressApp.get('/all', (request, response)=>{
    var qry = "select * from products"
    connection.query(qry, (error, success)=>{
        if(error){
            throw error
        }
        console.log(JSON.stringify(success))
        response.send(JSON.stringify(success))
        response.end()
    })
})

expressApp.listen(1234)