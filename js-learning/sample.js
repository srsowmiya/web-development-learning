const pTag=document.createElement("p")
pTag.innerText="This is a paragraph added through js"

const cont=document.querySelector("#container")
cont.appendChild(pTag)

cont.remove(pTag)