import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const TeensPage = () => (
    <ResourceLayout
        title="Teen Mental Health"
        subtitle="Resources specifically for teenagers"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Common Challenges</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Academic Pressure</h3>
                                <p>Managing school stress and expectations</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Social Issues</h3>
                                <p>Navigating friendships and relationships</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Identity & Self-Image</h3>
                                <p>Building self-esteem and confidence</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Support Resources</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Teen Helplines</h3>
                                <p>24/7 support services for teens</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Online Communities</h3>
                                <p>Safe spaces to connect with peers</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�‍⚕️</span>
                            <div>
                                <h3 className="font-bold mb-1">Professional Help</h3>
                                <p>Finding teen-focused mental health support</p>
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
                    <h2 className="text-2xl font-bold mb-4">Coping Skills</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Stress Management</h3>
                                <p>Healthy ways to handle pressure</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�️</span>
                            <div>
                                <h3 className="font-bold mb-1">Communication</h3>
                                <p>Expressing feelings effectively</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�️</span>
                            <div>
                                <h3 className="font-bold mb-1">Setting Boundaries</h3>
                                <p>Standing up for yourself respectfully</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default TeensPage;
