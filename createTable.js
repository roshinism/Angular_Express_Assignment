var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'projectProduct'
    
})

connection.connect((error)=>{
    if(error){
        throw error
    }
    console.log("Connected to database!..")
    
       var createTableQuery = "create table products (product_name varchar(65), product_description varchar(200), product_image varchar(65), product_id int(8) auto_increment, primary key (product_id))"
        connection.query(createTableQuery, (error, success)=>{
            if(error){
                throw error
            }
      console.log("Table - products created!!..")
    })
 })

