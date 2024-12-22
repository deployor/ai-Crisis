import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'motion/react';

const CrisisPlanPage = () => (
    <ResourceLayout
        title="Crisis Planning"
        subtitle="Creating a personal crisis management plan"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-red-600/10 border border-red-500/30">
                    <h2 className="text-2xl font-bold mb-4">Emergency Planning</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Crisis Numbers</h3>
                                <p>Important contacts for emergencies</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Network</h3>
                                <p>Identifying trusted people to call</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Safe Places</h3>
                                <p>Where to go during a crisis</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Prevention Strategies</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚠️</span>
                            <div>
                                <h3 className="font-bold mb-1">Warning Signs</h3>
                                <p>Recognizing crisis triggers</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�️</span>
                            <div>
                                <h3 className="font-bold mb-1">Safety Plan</h3>
                                <p>Steps to take when struggling</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Coping Tools</h3>
                                <p>Personal strategies that help</p>
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
                    <h2 className="text-2xl font-bold mb-4">After Crisis Care</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Recovery Steps</h3>
                                <p>Getting back to stability</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Plan Review</h3>
                                <p>Updating your crisis strategy</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">�</span>
                            <div>
                                <h3 className="font-bold mb-1">Support Check-in</h3>
                                <p>Following up with your support system</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default CrisisPlanPage;
