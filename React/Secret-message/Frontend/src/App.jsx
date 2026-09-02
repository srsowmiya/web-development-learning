import { useState } from 'react';

const App = () => {
    const [message, setMessage] = useState('');
    const [notes, setNotes] = useState([]);

    async function handleMessage() {
        const title = message.split("\n")[0].trim() || "No Subject";

        const res = await fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: message
            })
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data);

            setMessage('');
            handleViewNotes();
        }
    }

    async function handleViewNotes() {
        const res = await fetch('http://localhost:5000/notes');

        if (res.ok) {
            const data = await res.json();

            console.log("Fetched notes:", data);

            setNotes(data.data);
        } else {
            console.log("Failed to fetch notes");
        }
    }

    return (
        <div>
            <h1>Notes-App</h1>

            <textarea
                placeholder="Enter your note"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <br />

            <button onClick={handleMessage}>
                Send
            </button>

            <button onClick={handleViewNotes}>
                View Notes
            </button>

            <h2>Notes</h2>

            {notes.map((note) => (
                <div key={note.note_id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    );
};

export default App;