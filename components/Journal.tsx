import {useState} from 'react';

const Journal = () => {
    const [entry, setEntry] = useState('');

    const saveEntry = () => {
        // Save journal entry to Supabase
    };

    return (
        <div className="p-4">
            <h2 className="text-xl mb-2">Your Journal</h2>
            <textarea
                className="w-full p-2 text-black"
                rows={10}
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Write your thoughts..."
            />
            <button className="p-2 bg-blue-600 mt-2" onClick={saveEntry}>Save Entry</button>
        </div>
    );
};

export default Journal;