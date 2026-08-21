const val=document.getElementById('txt')
console.log(val.value.length)

const l=document.getElementById('no')
const p=document.createChild('p')
p.innertext=val.value.length
l.append(p)
