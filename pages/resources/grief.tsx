import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const GriefPage = () => (
    <ResourceLayout
        title="Grief & Loss"
        subtitle="Coping with loss and bereavement"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                {/* First card */}
                <div className="card p-6 bg-indigo-600/10 border border-indigo-500/30">
                    <h2 className="text-2xl font-bold mb-4">Understanding Grief</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Types of Loss</h3>
                                <p>Different forms of grief and loss</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Grief Stages</h3>
                                <p>Understanding the grieving process</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Common Reactions</h3>
                                <p>Normal responses to loss</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Second card */}
                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Coping Strategies</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Journaling</h3>
                                <p>Processing emotions through writing</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Groups</h3>
                                <p>Connecting with others who understand</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Self-Care</h3>
                                <p>Taking care of yourself while grieving</p>
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
                <div className="card p-6 bg-blue-600/10 border border-blue-500/30 sticky top-8">
                    <h2 className="text-2xl font-bold mb-4">Finding Support</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Professional Help</h3>
                                <p>When to seek grief counseling</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Network</h3>
                                <p>Building a network of support</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�️</span>
                            <div>
                                <h3 className="font-bold mb-1">Memorial Activities</h3>
                                <p>Healthy ways to remember and honor</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default GriefPage;
