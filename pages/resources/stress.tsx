import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const StressPage = () => (
    <ResourceLayout
        title="Stress Management"
        subtitle="Practical techniques for managing daily stress"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-green-600/10 border border-green-500/30">
                    <h2 className="text-2xl font-bold mb-4">Physical Techniques</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🫁</span>
                            <div>
                                <h3 className="font-bold mb-1">Deep Breathing</h3>
                                <p>Simple breathing exercises to calm your nervous system</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💪</span>
                            <div>
                                <h3 className="font-bold mb-1">Progressive Muscle Relaxation</h3>
                                <p>Release physical tension through systematic relaxation</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🚶</span>
                            <div>
                                <h3 className="font-bold mb-1">Regular Exercise</h3>
                                <p>Move your body to release stress and boost endorphins</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Mental Strategies</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🎯</span>
                            <div>
                                <h3 className="font-bold mb-1">Time Management</h3>
                                <p>Prioritize tasks and break them into manageable chunks</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🧠</span>
                            <div>
                                <h3 className="font-bold mb-1">Cognitive Restructuring</h3>
                                <p>Challenge and replace negative thought patterns</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⏸️</span>
                            <div>
                                <h3 className="font-bold mb-1">Setting Boundaries</h3>
                                <p>Learn to say no and protect your energy</p>
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
                <div className="card p-6 bg-purple-600/10 border border-purple-500/30 sticky top-8">
                    <h2 className="text-2xl font-bold mb-4">Daily Habits</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">☀️</span>
                            <div>
                                <h3 className="font-bold mb-1">Morning Routine</h3>
                                <p>Start your day with intention and self-care</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">📝</span>
                            <div>
                                <h3 className="font-bold mb-1">Journaling</h3>
                                <p>Process your thoughts and emotions through writing</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🎵</span>
                            <div>
                                <h3 className="font-bold mb-1">Relaxation Time</h3>
                                <p>Schedule regular breaks for activities you enjoy</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default StressPage;