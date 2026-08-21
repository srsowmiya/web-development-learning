import React, { useState } from 'react';

const Example = () => {
    const [typ,setType]=useState('true')
    const [text,setText]=useState('')

    return (
        <div>
            <h1>Hello World</h1>
            <label htmlFor="">Enter password</label>
            <input type={typ?"password":"type"} value={text}onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>setType(!typ)}>Show password</button>

        </div>
    );
};

export default Example;