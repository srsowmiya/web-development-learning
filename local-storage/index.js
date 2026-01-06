document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    const name=document.getElementById('name').value.trim();
    const mail=document.getElementById('mail').value.trim();
    
    const obj={
        name,mail
    }

    localStorage.setItem('user',JSON.stringify(obj));

    document.querySelector('.output').textContent="Response Submitted successfully";
})