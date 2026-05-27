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

const advices = {
    happy: [
        "Spread your happiness to others around you!",
        "Use this energy to tackle your pending tasks!",
        "Call a friend and make their day too!",
        "Start that project you've been procrastinating!",
        "Celebrate small wins, you deserve it!"
    ],
    sad: [
        "It's okay to cry, let it all out!",
        "Talk to someone you trust!",
        "Go for a walk, fresh air helps!",
        "Watch your favorite comfort movie!",
        "Remember, this feeling is temporary!"
    ],
    angry: [
        "Take 10 deep breaths before reacting!",
        "Go for a run, burn that energy!",
        "Write down what's bothering you!",
        "Don't make decisions when you're angry!",
        "Drink some cold water and calm down!"
    ],
    anxious: [
        "Focus on what you can control!",
        "Try the 5-4-3-2-1 grounding technique!",
        "Breathe in for 4 seconds, out for 4 seconds!",
        "Break your problems into smaller tasks!",
        "Avoid caffeine, it makes anxiety worse!"
    ],
    bored: [
        "Learn something new today!",
        "Pick up a book you've been ignoring!",
        "Try cooking a new recipe!",
        "Go outside and touch some grass! 😂",
        "Start a side project!"
    ],
    tired: [
        "Take a 20 minute power nap!",
        "Hydrate yourself, drink more water!",
        "Don't fight it, rest when needed!",
        "Light stretching can boost your energy!",
        "Step away from screens for a while!"
    ]
}




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