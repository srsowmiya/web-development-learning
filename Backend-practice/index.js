const express = require('express')
const cors=require('cors')

const app=express()

app.use(cors({
    origin:'*'
}))

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Home page request") 
})

const jokes = {
    programming: [
        "Why do programmers prefer dark mode? Because light attracts bugs! 😂",
        "Why do Java developers wear glasses? Because they don't C#!",
        "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
        "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!"
    ],
    dad: [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised!",
        "Why can't you give Elsa a balloon? Because she'll let it go!",
        "What do you call a fish without eyes? A fsh!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!"
    ],
    dark: [
        "I have a joke about construction, but I'm still working on it!",
        "I told a joke about paper... it was tearable!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
        "I used to hate facial hair, but then it grew on me!"
    ],
    school: [
        "Why did the student eat his homework? Because the teacher told him it was a piece of cake!",
        "Why did the math book look so sad? Because it had too many problems!",
        "What do you call a student who never pays attention? A graduation risk!",
        "Why did the teacher wear sunglasses? Because her students were so bright!",
        "What's a math teacher's favorite season? Sum-mer!"
    ],
    animals: [
        "Why don't elephants use computers? Because they're afraid of the mouse!",
        "What do you call a sleeping dinosaur? A dino-snore!",
        "Why did the cat sit on the computer? To keep an eye on the mouse!",
        "What do you call a fish that wears a crown? King of the sea-bass!",
        "Why did the dog sit in the shade? Because he didn't want to be a hot dog!"
    ]
}

app.post('/joke',(req,res)=>{
    const {mood} =req.body
    const arr=jokes[mood]
    let ind=Math.floor(Math.random()*5)
    const joke=arr[ind]
    res.json(joke)
})




app.post('/recommend',(req,res)=>{
    let ind=Math.floor(Math.random()*5)
    const m=req.body.mood
    let arr=advices[m]
    let ad=arr[ind]
    res.send(ad)
})


app.listen(3000,()=>{
    console.log("backend started listening on the port 3000")
})