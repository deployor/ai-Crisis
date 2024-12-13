import ResourceLayout from '../../components/ResourceLayout';
import {motion} from 'framer-motion';

const AnxietyPage = () => (
    <ResourceLayout
        title="Understanding Anxiety"
        subtitle="Learn about different types of anxiety and effective coping strategies"
    >
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="space-y-8"
            >
                <div className="card p-6 bg-blue-600/10 border border-blue-500/30">
                    <h2 className="text-2xl font-bold mb-4">Common Types</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🤔</span>
                            <div>
                                <h3 className="font-bold mb-1">Generalized Anxiety (GAD)</h3>
                                <p>Persistent worrying about everyday concerns</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">👥</span>
                            <div>
                                <h3 className="font-bold mb-1">Social Anxiety</h3>
                                <p>Fear of social situations and interactions</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚡</span>
                            <div>
                                <h3 className="font-bold mb-1">Panic Disorder</h3>
                                <p>Recurring unexpected panic attacks</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card p-6 bg-purple-600/10 border border-purple-500/30">
                    <h2 className="text-2xl font-bold mb-4">Physical Symptoms</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💓</span>
                            <div>
                                <h3 class="font-bold mb-1">Physical Sensations</h3>
                                <p>Rapid heartbeat, sweating, trembling</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">😰</span>
                            <div>
                                <h3 class="font-bold mb-1">Breathing Changes</h3>
                                <p>Shortness of breath, hyperventilation</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🤢</span>
                            <div>
                                <h3 class="font-bold mb-1">Other Symptoms</h3>
                                <p>Nausea, dizziness, muscle tension</p>
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
                    <h2 className="text-2xl font-bold mb-4">Coping Strategies</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🫁</span>
                            <div>
                                <h3 class="font-bold mb-1">Breathing Exercises</h3>
                                <p>Practice deep, controlled breathing techniques</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🧘</span>
                            <div>
                                <h3 class="font-bold mb-1">Grounding Techniques</h3>
                                <p>Use your senses to stay present</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🎯</span>
                            <div>
                                <h3 class="font-bold mb-1">Challenge Thoughts</h3>
                                <p>Question and reframe anxious thinking</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🤝</span>
                            <div>
                                <h3 class="font-bold mb-1">Seek Support</h3>
                                <p>Talk to friends, family, or professionals</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </ResourceLayout>
);

export default AnxietyPage;