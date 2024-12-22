import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const DepressionPage = () => (
    <ResourceLayout
        title="Depression Support"
        subtitle="Understanding and managing depression symptoms"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Understanding Depression</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Common Symptoms</h3>
                                <p>Recognizing signs of depression in daily life</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚕️</span>
                            <div>
                                <h3 className="font-bold mb-1">Types of Depression</h3>
                                <p>Different forms and their characteristics</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Treatment Options</h3>
                                <p>Various approaches to managing depression</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Coping Strategies</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Daily Routine</h3>
                                <p>Maintaining structure and healthy habits</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Social Support</h3>
                                <p>Staying connected with others</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Goal Setting</h3>
                                <p>Setting achievable daily goals</p>
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
                <div className="card p-6 bg-indigo-600/10 border border-indigo-500/30 sticky top-8">
                    <h2 className="text-2xl font-bold mb-4">Getting Help</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�‍⚕️</span>
                            <div>
                                <h3 className="font-bold mb-1">Professional Support</h3>
                                <p>When and how to seek professional help</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Treatment Options</h3>
                                <p>Understanding different treatment approaches</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�️</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Groups</h3>
                                <p>Finding and joining depression support groups</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default DepressionPage;