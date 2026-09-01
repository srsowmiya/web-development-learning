const express=require('express')
const cors=require('cors')
const app=express()
const db = require('./db');

app.use(cors())

app.post('/notes',(req,res)=>{
  const notes=req.body.message
  const sql=`INSERT INTO notes(title,content,category,user_id) values(?,?,?,?)`

  db.query(
    sql,
    [title, content, category, user_id],
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


app.listen(5000,()=>{
    console.log("server started listening on the port 5000")
})
