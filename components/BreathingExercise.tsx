import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

const BreathingExercise = () => {
    const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive) return;

        const timer = setInterval(() => {
            setPhase(p => {
                if (p === 'inhale') return 'hold';
                if (p === 'hold') return 'exhale';
                return 'inhale';
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [isActive]);

    return (
        <div className="card p-6 text-center h-full flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-4">Breathing Exercise</h3>
            <motion.div
                animate={{
                    scale: isActive
                        ? (phase === 'inhale' ? 1.5 : phase === 'exhale' ? 1 : 1.5)
                        : 1,
                    opacity: isActive ? 1 : 0.5,
                    borderColor: isActive ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.2)'
                }}
                transition={{duration: 4}}
                className="w-20 h-20 bg-blue-500/30 rounded-full mx-auto mb-4 border-4"
            />
            <p className="text-xl mb-4">{isActive ? phase.toUpperCase() : 'READY'}</p>
            <button
                onClick={() => setIsActive(!isActive)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {isActive ? 'Stop' : 'Start'} Exercise
            </button>
        </div>
    );
};

export default BreathingExercise;