import React, { useState } from 'react';

const Example = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <h1>Hello World</h1>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button>Submit</button>

            <p>{text.length}</p>
        </div>
    );
};

export default Example;