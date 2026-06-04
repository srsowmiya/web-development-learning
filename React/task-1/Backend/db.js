const mysql=require('mysql2')

const db=mysql.Connection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projects'
})