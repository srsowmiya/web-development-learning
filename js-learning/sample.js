const child=document.querySelector("#child")
child.addEventListener("click",()=>{
    console.log("child Clicked")
})

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});