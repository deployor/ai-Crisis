import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const LGBTQPage = () => (
    <ResourceLayout
        title="LGBTQ+ Support"
        subtitle="Mental health resources for LGBTQ+ individuals"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Identity & Self-Acceptance</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Coming Out Support</h3>
                                <p>Resources for coming out safely</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Self-Discovery</h3>
                                <p>Understanding and accepting yourself</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Building Confidence</h3>
                                <p>Developing positive self-identity</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Community Resources</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Groups</h3>
                                <p>Finding LGBTQ+ affirming communities</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�️‍�</span>
                            <div>
                                <h3 className="font-bold mb-1">LGBTQ+ Centers</h3>
                                <p>Local resources and organizations</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Crisis Support</h3>
                                <p>LGBTQ+ specific crisis services</p>
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
                <div className="card p-6 bg-pink-600/10 border border-pink-500/30 sticky top-8">
                    <h2 className="text-2xl font-bold mb-4">Healthcare & Support</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚕️</span>
                            <div>
                                <h3 className="font-bold mb-1">Affirming Healthcare</h3>
                                <p>Finding LGBTQ+ friendly providers</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Mental Health</h3>
                                <p>LGBTQ+ specialized therapy options</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Advocacy</h3>
                                <p>Standing up for your rights</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default LGBTQPage;