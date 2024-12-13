import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
    BookOpenIcon,
    ExclamationTriangleIcon,
    HandRaisedIcon,
    HeartIcon,
    LightBulbIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';

type GuideSection = {
    title: string;
    icon: JSX.Element;
    content: string[];
    emergency?: boolean;
};

const GuidePage = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const guides: GuideSection[] = [
        {
            title: "In Crisis? Read This First",
            icon: <ExclamationTriangleIcon className="h-6 w-6 text-red-500"/>,
            content: [
                "1. Remember: You are not alone",
                "2. Take slow, deep breaths",
                "3. Call emergency services if you're in immediate danger",
                "4. Reach out to a trusted person",
                "5. Use grounding techniques (5-4-3-2-1 method)",
            ],
            emergency: true
        },
        {
            title: "Coping Strategies",
            icon: <LightBulbIcon className="h-6 w-6 text-yellow-500"/>,
            content: [
                "• Practice mindfulness meditation",
                "• Exercise regularly",
                "• Maintain a regular sleep schedule",
                "• Write in a journal",
                "• Talk to friends or family"
            ]
        },
        {
            title: "Self-Care Guide",
            icon: <HeartIcon className="h-6 w-6 text-pink-500"/>,
            content: [
                "• Create a daily routine",
                "• Set healthy boundaries",
                "• Practice positive self-talk",
                "• Take regular breaks",
                "• Engage in activities you enjoy"
            ]
        },
        {
            title: "Warning Signs",
            icon: <ShieldCheckIcon className="h-6 w-6 text-blue-500"/>,
            content: [
                "• Changes in sleep patterns",
                "• Loss of interest in activities",
                "• Feeling hopeless or trapped",
                "• Withdrawal from others",
                "• Extreme mood changes"
            ]
        },
        {
            title: "How to Help Others",
            icon: <HandRaisedIcon className="h-6 w-6 text-green-500"/>,
            content: [
                "• Listen without judgment",
                "• Encourage professional help",
                "• Check in regularly",
                "• Learn about their condition",
                "• Know emergency contacts"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <Navbar/>
            <main className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="text-center mb-8"
                >
                    <BookOpenIcon className="h-16 w-16 text-blue-500 mx-auto mb-4"/>
                    <h1 className="text-4xl font-bold mb-4 text-white">Mental Health Guides</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Find helpful resources, coping strategies, and guidance for managing your mental health.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.1}}
                            className={`card cursor-pointer ${
                                guide.emergency ? 'border-red-500/50' : 'border-gray-700/50'
                            }`}
                            onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                        >
                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center space-x-3">
                                    {guide.icon}
                                    <h2 className="text-xl font-semibold text-white">
                                        {guide.title}
                                    </h2>
                                </div>
                                <svg
                                    className={`w-6 h-6 transition-transform duration-200 ${
                                        expandedSection === index ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                            <AnimatePresence>
                                {expandedSection === index && (
                                    <motion.div
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: "auto", opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{duration: 0.2}}
                                        className="px-4 pb-4"
                                    >
                                        <div className="border-t border-gray-700 pt-4">
                                            {guide.content.map((item, idx) => (
                                                <p key={idx} className="text-gray-300 mb-2">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default GuidePage;
