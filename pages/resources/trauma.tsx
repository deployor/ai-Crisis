import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const TraumaPage = () => (
    <ResourceLayout
        title="Trauma & PTSD"
        subtitle="Resources for trauma recovery and healing"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Understanding Trauma</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Types of Trauma</h3>
                                <p>Different forms of trauma and their impacts</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚡</span>
                            <div>
                                <h3 className="font-bold mb-1">PTSD Symptoms</h3>
                                <p>Recognizing signs of post-traumatic stress</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Triggers</h3>
                                <p>Identifying and managing trauma triggers</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Recovery Tools</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Grounding Techniques</h3>
                                <p>Methods to stay present and centered</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Coping Strategies</h3>
                                <p>Healthy ways to manage trauma responses</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�️</span>
                            <div>
                                <h3 className="font-bold mb-1">Safety Planning</h3>
                                <p>Creating a personal safety and coping plan</p>
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
                    <h2 className="text-2xl font-bold mb-4">Professional Support</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�‍⚕️</span>
                            <div>
                                <h3 className="font-bold mb-1">Trauma Therapy</h3>
                                <p>Different therapeutic approaches for trauma</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Groups</h3>
                                <p>Finding trauma-informed support communities</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Crisis Resources</h3>
                                <p>Emergency contacts and crisis support</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default TraumaPage;