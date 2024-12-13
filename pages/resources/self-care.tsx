import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const SelfCarePage = () => (
    <ResourceLayout
        title="Self-Care Guide"
        subtitle="Essential practices for maintaining mental wellness"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Physical Self-Care</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💪</span>
                            <div>
                                <h3 className="font-bold mb-1">Exercise Regularly</h3>
                                <p>Find movement that brings you joy</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🥗</span>
                            <div>
                                <h3 className="font-bold mb-1">Nourish Your Body</h3>
                                <p>Eat balanced, nutritious meals</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">😴</span>
                            <div>
                                <h3 className="font-bold mb-1">Prioritize Sleep</h3>
                                <p>Maintain a consistent sleep schedule</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Emotional Self-Care</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">📝</span>
                            <div>
                                <h3 className="font-bold mb-1">Journal</h3>
                                <p>Process your thoughts and feelings</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🎨</span>
                            <div>
                                <h3 className="font-bold mb-1">Creative Expression</h3>
                                <p>Engage in artistic activities</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🧘‍♀️</span>
                            <div>
                                <h3 className="font-bold mb-1">Mindfulness</h3>
                                <p>Practice being present</p>
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
                    <h2 className="text-2xl font-bold mb-4">Daily Practices</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🌅</span>
                            <div>
                                <h3 className="font-bold mb-1">Morning Routine</h3>
                                <p>Start your day with intention</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🎯</span>
                            <div>
                                <h3 className="font-bold mb-1">Set Boundaries</h3>
                                <p>Learn to say no when needed</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🌿</span>
                            <div>
                                <h3 className="font-bold mb-1">Take Breaks</h3>
                                <p>Regular pauses throughout the day</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💝</span>
                            <div>
                                <h3 className="font-bold mb-1">Self-Compassion</h3>
                                <p>Treat yourself with kindness</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default SelfCarePage;