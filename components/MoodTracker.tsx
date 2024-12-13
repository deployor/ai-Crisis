import {useState} from 'react';

const MoodTracker = () => {
    const [mood, setMood] = useState(5);

    const submitMood = () => {
        // Submit mood to Supabase
    };

    return (
        <div className="p-4">
            <h2 className="text-xl mb-2">How are you feeling today?</h2>
            <input
                type="range"
                min="1"
                max="10"
                value={mood}
                onChange={(e) => setMood(Number(e.target.value))}
            />
            <button className="p-2 bg-blue-600 ml-2" onClick={submitMood}>Submit</button>
        </div>
    );
};

export default MoodTracker;