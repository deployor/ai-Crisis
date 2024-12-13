import {useState} from 'react';
import {motion} from 'motion/react';

const GroundingTechnique = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {number: 5, sense: 'things you can see', color: 'blue'},
        {number: 4, sense: 'things you can touch', color: 'green'},
        {number: 3, sense: 'things you can hear', color: 'yellow'},
        {number: 2, sense: 'things you can smell', color: 'orange'},
        {number: 1, sense: 'thing you can taste', color: 'red'}
    ];

    return (
        <div className="card p-6">
            <h3 className="text-2xl font-bold mb-4">5-4-3-2-1 Grounding Technique</h3>
            <div className="space-y-4">
                {steps.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{opacity: 0}}
                        animate={{opacity: step >= i ? 1 : 0.5}}
                        className="flex items-center space-x-4"
                    >
                        <div className={`w-8 h-8 rounded-full bg-${s.color}-500/30 flex items-center justify-center`}>
                            {s.number}
                        </div>
                        <p>{s.sense}</p>
                    </motion.div>
                ))}
            </div>
            <button
                onClick={() => setStep(s => (s + 1) % 6)}
                className="mt-4 px-6 py-2 bg-blue-600 rounded-lg"
            >
                Next Step
            </button>
        </div>
    );
};

export default GroundingTechnique;