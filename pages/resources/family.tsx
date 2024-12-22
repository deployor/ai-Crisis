import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const FamilyPage = () => (
    <ResourceLayout
        title="Family Support"
        subtitle="Resources for family mental health"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-pink-600/10 border border-pink-500/30">
                    <h2 className="text-2xl font-bold mb-4">Family Dynamics</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Healthy Communication</h3>
                                <p>Building open and honest dialogue</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Supporting Each Other</h3>
                                <p>Creating a supportive family environment</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Family Activities</h3>
                                <p>Strengthening bonds through shared experiences</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Crisis Management</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Emergency Planning</h3>
                                <p>Creating family crisis plans</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Services</h3>
                                <p>Finding professional family support</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Resource Navigation</h3>
                                <p>Accessing family mental health services</p>
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
                    <h2 className="text-2xl font-bold mb-4">Mental Health Education</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Understanding Signs</h3>
                                <p>Recognizing mental health concerns</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Prevention Strategies</h3>
                                <p>Promoting mental wellness at home</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Building Resilience</h3>
                                <p>Strengthening family coping skills</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default FamilyPage;
