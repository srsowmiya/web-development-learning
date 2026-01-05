document.querySelector('.parent').addEventListener('click',function(){
    console.log("parent clicked")
})

document.querySelector('.child').addEventListener('click',function(){
    console.log("child clicked")
    event.stopPropagation()
})