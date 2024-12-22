import { useState } from 'react';
import { motion } from 'motion/react';

const questions = [
    {
        text: "Over the past 2 weeks, how often have you had little interest or pleasure in doing things?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        text: "How often have you felt down, depressed, or hopeless?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        text: "Have you had trouble falling asleep, staying asleep, or sleeping too much?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        text: "How often have you felt tired or had little energy?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        text: "Have you had poor appetite or been overeating?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    }
];

const DepressionScreener = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (score: number) => {
        const newAnswers = [...answers, score];
        if (currentQuestion < questions.length - 1) {
            setAnswers(newAnswers);
            setCurrentQuestion(c => c + 1);
        } else {
            setAnswers(newAnswers);
            setShowResults(true);
        }
    };

    const getResultMessage = () => {
        const totalScore = answers.reduce((a, b) => a + b, 0);
        const maxScore = questions.length * 3;
        const percentage = (totalScore / maxScore) * 100;

        if (percentage < 25) {
            return "Your responses suggest minimal signs of depression. However, if you're concerned, consider talking to someone you trust.";
        } else if (percentage < 50) {
            return "Your responses suggest mild signs of depression. Consider talking to a mental health professional for a proper assessment.";
        } else if (percentage < 75) {
            return "Your responses suggest moderate signs of depression. We recommend speaking with a mental health professional.";
        } else {
            return "Your responses suggest significant signs of depression. Please reach out to a mental health professional for support.";
        }
    };

    const handleReset = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResults(false);
    };

    return (
        <div className="card p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-2xl font-bold mb-6">Depression Screening Questionnaire</h2>
            
            {!showResults ? (
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <p className="mb-6 text-lg">{questions[currentQuestion].text}</p>
                    <div className="grid gap-3">
                        {questions[currentQuestion].options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(idx)}
                                className="p-3 bg-gray-700/50 hover:bg-blue-600/50 rounded-lg text-left transition-colors"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <p className="mb-6 text-lg">{getResultMessage()}</p>
                    <div className="mb-6 text-gray-300 text-sm">
                        <p className="mb-2">Remember: This is not a diagnostic tool.</p>
                        <p>If you're experiencing thoughts of self-harm or suicide, please seek immediate help:</p>
                        <p className="font-bold mt-2">Emergency: 911</p>
                        <p className="font-bold">Crisis Hotline: 988</p>
                    </div>
                    <button 
                        onClick={handleReset}
                        className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Take Again
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default DepressionScreener;