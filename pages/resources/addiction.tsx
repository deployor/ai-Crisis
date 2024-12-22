import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const AddictionPage = () => (
    <ResourceLayout
        title="Addiction Recovery"
        subtitle="Support for various types of addiction"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                {/* First card */}
                <div className="card p-6 bg-green-600/10 border border-green-500/30">
                    <h2 className="text-2xl font-bold mb-4">Understanding Addiction</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Types of Addiction</h3>
                                <p>Substance and behavioral addictions</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚠️</span>
                            <div>
                                <h3 className="font-bold mb-1">Warning Signs</h3>
                                <p>Recognizing addiction patterns</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Recovery Process</h3>
                                <p>Stages of addiction recovery</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Second card */}
                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Support Resources</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Groups</h3>
                                <p>AA, NA, and other recovery communities</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Helplines</h3>
                                <p>24/7 addiction support services</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Treatment Options</h3>
                                <p>Different approaches to recovery</p>
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
                    <h2 className="text-2xl font-bold mb-4">Recovery Tools</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Recovery Plan</h3>
                                <p>Creating a personalized recovery strategy</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Trigger Management</h3>
                                <p>Identifying and avoiding triggers</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Building Support</h3>
                                <p>Creating a recovery support network</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default AddictionPage;