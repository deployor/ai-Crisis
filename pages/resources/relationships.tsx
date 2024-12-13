import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'framer-motion';

const RelationshipsPage = () => (
    <ResourceLayout
        title="Relationship Help"
        subtitle="Building and maintaining healthy relationships"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-orange-600/10 border border-orange-500/30">
                    <h2 className="text-2xl font-bold mb-4">Communication Skills</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">👂</span>
                            <div>
                                <h3 className="font-bold mb-1">Active Listening</h3>
                                <p>Focus on understanding rather than responding</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💭</span>
                            <div>
                                <h3 className="font-bold mb-1">Express Feelings</h3>
                                <p>Use "I" statements to communicate emotions</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🤝</span>
                            <div>
                                <h3 className="font-bold mb-1">Conflict Resolution</h3>
                                <p>Address issues calmly and seek solutions together</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Setting Boundaries</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🛡️</span>
                            <div>
                                <h3 className="font-bold mb-1">Personal Space</h3>
                                <p>Respect for individual needs and limits</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚖️</span>
                            <div>
                                <h3 className="font-bold mb-1">Balanced Give and Take</h3>
                                <p>Maintaining healthy reciprocity</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">✋</span>
                            <div>
                                <h3 className="font-bold mb-1">Saying No</h3>
                                <p>Setting limits without guilt</p>
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
                    <h2 className="text-2xl font-bold mb-4">Building Trust</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🤲</span>
                            <div>
                                <h3 className="font-bold mb-1">Be Reliable</h3>
                                <p>Follow through on commitments</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💝</span>
                            <div>
                                <h3 className="font-bold mb-1">Show Appreciation</h3>
                                <p>Express gratitude regularly</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🔄</span>
                            <div>
                                <h3 className="font-bold mb-1">Be Consistent</h3>
                                <p>Build trust through reliable behavior</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">❤️</span>
                            <div>
                                <h3 className="font-bold mb-1">Practice Empathy</h3>
                                <p>Try to understand others' perspectives</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default RelationshipsPage;