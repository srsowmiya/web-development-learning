const express=require('express')
const  cors=require('cors')
const bcrypt=require('bcrypt')

const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

const arr=[]

app.post('/login', async (req, res) => {
    console.log(arr)
    const { email, password } = req.body;

    try {

        const user = arr.find(
            l => l.email === email
        );

        if (!user) {
            return res.status(404).send("User not found");
        }

        const match = await bcrypt.compare(
            password,
            user.password
        );

        if (match) {
            res.send("Login successful");
        } else {
            res.status(401).send("Invalid password");
        }

    } catch (err) {
        res.status(500).send("Server Error");
    }

});

app.post('/signin',async(req,res)=>{
    const {email,password} = req.body
    const hashed=await bcrypt.hash(password,10)
    try{
        arr.push({
            email,
            password:hashed
        })
        res.send(arr[0]);
    }
    catch(e)
    {
        res.status(500).send(e.message)
    }
})


app.listen(3000,()=>{
    console.log("port started listening on 3000")
})