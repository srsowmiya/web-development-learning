import React, { useState } from 'react';

const App = () => {
    const [todo, setTodo] = useState('');
    const [arr, setArr] = useState([]);

    function handleClick() {
        setArr([...arr, todo]);
        setTodo('');
    }

    return (
        <div>
            <h1>Hello world</h1>

            <input
                type="text"
                placeholder="Add task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button onClick={handleClick}>Add</button>

            {arr.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </div>
    );
};

export default App;