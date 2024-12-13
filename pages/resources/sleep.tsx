import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'framer-motion';

const SleepPage = () => (
    <ResourceLayout
        title="Sleep Better"
        subtitle="Tips and techniques for improving your sleep quality"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-indigo-600/10 border border-indigo-500/30">
                    <h2 className="text-2xl font-bold mb-4">Sleep Hygiene</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🌙</span>
                            <div>
                                <h3 className="font-bold mb-1">Consistent Schedule</h3>
                                <p>Go to bed and wake up at the same time daily</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">📱</span>
                            <div>
                                <h3 className="font-bold mb-1">Screen Time</h3>
                                <p>Avoid blue light 1-2 hours before bed</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🛏️</span>
                            <div>
                                <h3 className="font-bold mb-1">Bedroom Environment</h3>
                                <p>Keep your space dark, quiet, and cool</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Evening Routine</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🫖</span>
                            <div>
                                <h3 className="font-bold mb-1">Relaxing Activities</h3>
                                <p>Reading, gentle stretching, or meditation</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">📝</span>
                            <div>
                                <h3 className="font-bold mb-1">Brain Dump</h3>
                                <p>Write down thoughts to clear your mind</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🧘‍♀️</span>
                            <div>
                                <h3 className="font-bold mb-1">Wind Down</h3>
                                <p>Practice calming breathing exercises</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                className="card p-6 bg-purple-600/10 border border-purple-500/30 sticky top-8"
            >
                <h2 className="text-2xl font-bold mb-4">Tips for Better Sleep</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                        <span className="text-2xl mr-3">☕</span>
                        <div>
                            <h3 className="font-bold mb-1">Watch Your Diet</h3>
                            <p>Avoid caffeine and heavy meals before bed</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-2xl mr-3">🏃‍♀️</span>
                        <div>
                            <h3 className="font-bold mb-1">Daily Exercise</h3>
                            <p>Regular physical activity improves sleep</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-2xl mr-3">🌞</span>
                        <div>
                            <h3 className="font-bold mb-1">Natural Light</h3>
                            <p>Get sunlight exposure during the day</p>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default SleepPage;
