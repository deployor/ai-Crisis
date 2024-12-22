import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const WorkLifePage = () => (
    <ResourceLayout
        title="Work-Life Balance"
        subtitle="Managing stress and burnout at work"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-orange-600/10 border border-orange-500/30">
                    <h2 className="text-2xl font-bold mb-4">Setting Boundaries</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⏰</span>
                            <div>
                                <h3 className="font-bold mb-1">Time Management</h3>
                                <p>Creating clear work-life schedules</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</ span>
                            <div>
                                <h3 className="font-bold mb-1">Setting Limits</h3>
                                <p>Learning to say no professionally</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</ span>
                            <div>
                                <h3 className="font-bold mb-1">Digital Boundaries</h3>
                                <p>Managing work communications</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Stress Management</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</ span>
                            <div>
                                <h3 className="font-bold mb-1">Mindfulness at Work</h3>
                                <p>Quick stress relief techniques</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">☕</span>
                            <div>
                                <h3 className="font-bold mb-1">Break Management</h3>
                                <p>Taking effective work breaks</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</ span>
                            <div>
                                <h3 className="font-bold mb-1">Task Prioritization</h3>
                                <p>Managing workload effectively</p>
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
                    <h2 className="text-2xl font-bold mb-4">Burnout Prevention</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</ span>
                            <div>
                                <h3 className="font-bold mb-1">Energy Management</h3>
                                <p>Maintaining sustainable work patterns</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</ span>
                            <div>
                                <h3 className="font-bold mb-1">Personal Time</h3>
                                <p>Prioritizing hobbies and relaxation</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</ span>
                            <div>
                                <h3 className="font-bold mb-1">Self-Advocacy</h3>
                                <p>Speaking up for your needs at work</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default WorkLifePage;