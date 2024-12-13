import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const MindfulnessPage = () => (
    <ResourceLayout
        title="Mindfulness Basics"
        subtitle="Simple practices to help you stay present and centered"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🧘‍♀️</span>
                            <div>
                                <h3 className="font-bold mb-1">Body Scan Meditation</h3>
                                <p>A gentle practice to develop body awareness and relaxation</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">👣</span>
                            <div>
                                <h3 className="font-bold mb-1">Mindful Walking</h3>
                                <p>Transform your daily walk into a mindfulness practice</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🫁</span>
                            <div>
                                <h3 className="font-bold mb-1">Breath Awareness</h3>
                                <p>Use your breath as an anchor to the present moment</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Daily Practices</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🌅</span>
                            <div>
                                <h3 className="font-bold mb-1">Morning Mindfulness</h3>
                                <p>Start your day with intention and awareness</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🍽️</span>
                            <div>
                                <h3 className="font-bold mb-1">Mindful Eating</h3>
                                <p>Transform your meals into moments of presence</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🌙</span>
                            <div>
                                <h3 className="font-bold mb-1">Evening Reflection</h3>
                                <p>End your day with gratitude and self-compassion</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
            >
                <div className="card p-6 bg-green-600/10 border border-green-500/30 sticky top-8">
                    <h2 className="text-2xl font-bold mb-4">Quick Tips</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💡</span>
                            <p>Start with just 5 minutes a day</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🎯</span>
                            <p>Focus on progress, not perfection</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🔄</span>
                            <p>Return to your breath whenever distracted</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🌿</span>
                            <p>Be gentle with yourself</p>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default MindfulnessPage;