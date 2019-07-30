var mysqldb = require('mysql')


var connection = mysqldb.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'projectProduct'

})

connection.connect((error) => {
    if (error) {
        throw error
    }
    console.log("Connected to projectProduct database!..")
    var multipleInsert = "insert into products (product_name, product_description, product_image) values ?"
    var records = [
        ['Apple', 'Costly', 'Appleimage.jpg'],
        ['Sony', 'Moderate', 'Sonyimage.jpg'],
        ['HP', 'Moderate', 'HPimage.jpg'],
        ['Dell', 'Costly', 'Dellimage.jpg'],
        ['Samsung','Costly','Samsungimage.jpg']
    ]
connection.query(multipleInsert, [records], (error, success)=>{ 
    if(error){
        throw error
    }
    console.log(success)
})


})