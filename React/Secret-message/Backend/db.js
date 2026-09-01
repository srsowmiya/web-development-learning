const db=require('mysql2')

db.createConnection({
    host:localhost,
    username:root,
    password:sowmiyasr,
    database:notes_app
})


db.connect((err)=>{
    if(err)
    {
        console.log(err.message)
        return
    }
    console.log("Connection to db successful")
})

module.export=db