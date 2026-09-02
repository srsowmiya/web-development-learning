const express=require('express')
const cors=require('cors')
const app=express()
const db = require('./db');

app.use(cors())
app.use(express.json());

app.post('/notes',(req,res)=>{
   const { title, content } = req.body;
  const sql=`INSERT INTO notes(title,content) values(?,?)`

  db.query(
    sql,
    [title, content],
    (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Failed to save note"
            });
        }

        res.status(201).json({
            message: "Note saved successfully",
            note_id: result.insertId
        });
    }
);

})

app.get('/notes',(req,res)=>{
    const SQL=`SELECT * FROM notes`

    db.query(SQL,[],(err,result)=>{
        if(err)
        {
            console.log(err);
            return res.json({
                message: "Failed to fetch data"
            });
        }
        else{
            return res.status(200).json({
                message:"fetched successfully",
                data:result
            })
        }
    })
})


app.listen(5000,()=>{
    console.log("server started listening on the port 5000")
})
