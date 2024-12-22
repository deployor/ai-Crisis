import {useState} from 'react';
import {
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  LightBulbIcon,
  PhoneIcon
} from '@heroicons/react/24/solid';
import {motion} from 'motion/react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Resources from '../components/Resources';
import Chatbot from '../components/Chatbot';
import BreathingExercise from '../components/BreathingExercise';
import GroundingTechnique from '../components/GroundingTechnique';
import DepressionScreener from '../components/DepressionScreener';
import Image from 'next/image';
import AnxietyTest from '../components/AnxietyTest';

const resources = [
    {
        title: "Understanding Anxiety",
        description: "Learn about different types of anxiety and coping strategies",
        color: "blue",
        icon: "🧠",
        href: "/resources/anxiety"
    },
    {
        title: "Stress Management",
        description: "Practical techniques for managing daily stress",
        color: "green",
        icon: "🌱",
        href: "/resources/stress"
    },
    {
        title: "Self-Care Guide",
        description: "Essential practices for maintaining mental wellness",
        color: "purple",
        icon: "💜",
        href: "/resources/self-care"
    },
    {
        title: "Sleep Better",
        description: "Tips for improving your sleep quality",
        color: "indigo",
        icon: "😴",
        href: "/resources/sleep"
    },
    {
        title: "Mindfulness Basics",
        description: "Simple mindfulness practices for beginners",
        color: "pink",
        icon: "🧘",
        href: "/resources/mindfulness"
    },
    {
        title: "Relationship Help",
        description: "Building and maintaining healthy relationships",
        color: "orange",
        icon: "🤝",
        href: "/resources/relationships"
    },
    {
        title: "Depression Support",
        description: "Understanding and managing depression symptoms",
        color: "blue",
        icon: "💙",
        href: "/resources/depression"
    },
    {
        title: "Trauma & PTSD",
        description: "Resources for trauma recovery and healing",
        color: "purple",
        icon: "🌟",
        href: "/resources/trauma"
    },
    {
        title: "Addiction Recovery",
        description: "Support for various types of addiction",
        color: "green",
        icon: "🌱",
        href: "/resources/addiction"
    },
    {
        title: "Grief & Loss",
        description: "Coping with loss and bereavement",
        color: "indigo",
        icon: "🕊️",
        href: "/resources/grief"
    },
    {
        title: "Family Support",
        description: "Resources for family mental health",
        color: "pink",
        icon: "👨‍👩‍👧‍👦",
        href: "/resources/family"
    },
    {
        title: "Work-Life Balance",
        description: "Managing stress and burnout at work",
        color: "orange",
        icon: "⚖️",
        href: "/resources/work-life"
    },
    {
        title: "Teen Mental Health",
        description: "Resources specifically for teenagers",
        color: "blue",
        icon: "🎓",
        href: "/resources/teens"
    },
    {
        title: "LGBTQ+ Support",
        description: "Mental health resources for LGBTQ+ individuals",
        color: "purple",
        icon: "🌈",
        href: "/resources/lgbtq"
    },
    {
        title: "Crisis Planning",
        description: "Creating a personal crisis management plan",
        color: "red",
        icon: "🆘",
        href: "/resources/crisis-plan"
    }
];

const HomePage = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <Navbar/>

            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <motion.section
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className="text-center mb-16"
                >
                    <div className="relative w-[512px] h-64 mx-auto mb-12">
                        <Image 
                            src="/logo.png" 
                            alt="Herbert Logo" 
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    <HeartIcon className="h-20 w-20 text-red-500 mx-auto mb-6"/>
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Your Mental Health Matters
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Find immediate support, helpful resources, and tools to help you through difficult moments
                    </p>

                    <div className="flex justify-center gap-4 mb-8">
                        <motion.button
                            whileHover={{scale: 1.05}}
                            className="px-6 py-3 bg-red-600 rounded-lg flex items-center gap-2"
                            onClick={() => {
                                const crisisSection = document.querySelector('#crisis-resources');
                                crisisSection?.scrollIntoView({behavior: 'smooth'});
                            }}>
                            <PhoneIcon className="h-5 w-5"/>
                            Get Immediate Help
                        </motion.button>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            className="px-6 py-3 bg-blue-600 rounded-lg flex items-center gap-2"
                            onClick={() => {
                                const toolsSection = document.querySelector('#helpful-tools');
                                toolsSection?.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            <LightBulbIcon className="h-5 w-5"/>
                            Explore Tools
                        </motion.button>
                    </div>
                </motion.section>

                {/* Crisis Resources */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="mb-16"
                    id="crisis-resources"
                >
                    <Resources/>
                </motion.section>

                {/* Quick Tools */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                    className="mb-16"
                    id="helpful-tools"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Helpful Tools</h2>
                        <p className="text-gray-300 mb-8">Take a moment to check in with yourself</p>
                    </div>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <DepressionScreener/>
                            <AnxietyTest/>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <BreathingExercise/>
                            <GroundingTechnique/>
                        </div>
                    </div>
                </motion.section>

                {/* AI Support */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3}}
                    className="mb-16"
                >
                    <div className="text-center mb-8">
                        <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-blue-500 mx-auto mb-4"/>
                        <h2 className="text-3xl font-bold mb-4">Talk to Our AI Support Assistant</h2>
                        <p className="text-gray-300 mb-8">Share your thoughts and get supportive guidance</p>
                    </div>
                    <Chatbot/>
                </motion.section>

                {/* Educational Resources */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4}}
                    className="mb-16"
                >
                    <div className="text-center mb-8">
                        <BookOpenIcon className="h-16 w-16 text-purple-500 mx-auto mb-4"/>
                        <h2 className="text-3xl font-bold mb-4">Learn & Understand</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {resources.map((resource, i) => (
                            <Link href={resource.href} key={i}>
                                <motion.div
                                    whileHover={{scale: 1.03}}
                                    className={`card p-6 border-${resource.color}-500/30 hover:bg-gray-800/50 cursor-pointer`}
                                >
                                    <div className="text-4xl mb-4">{resource.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                                    <p className="text-gray-300">{resource.description}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.section>
            </main>
        </div>
    );
};

export default HomePage;