import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {PaperAirplaneIcon} from '@heroicons/react/24/solid';
import {Message} from '../utils/openaiClient';
import {messageSchema} from '../utils/validation';

const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([
        {role: 'assistant', content: 'Hello, I\'m here to listen. How are you feeling today?'}
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        try {
            messageSchema.parse({content: input});
            const userMessage: Message = {role: 'user', content: input};
            setMessages(prev => [...prev, userMessage]);
            setInput('');
            setIsLoading(true);

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                }),
            });

            if (response.status === 429) {
                const error = await response.json();
                throw new Error(error.error);
            }

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.message,
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error(error);
            // Add visual feedback for rate limiting
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: errorMessage
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div
            className="card max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
            <div className="h-[500px] overflow-y-auto mb-4 px-2">
                <AnimatePresence initial={false}>
                    {messages.map((msg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                        >
                            <div
                                className={`max-w-[80%] p-4 rounded-2xl ${
                                    msg.role === 'assistant'
                                        ? 'bg-blue-600/30 border border-blue-500/30'
                                        : 'bg-purple-600/30 border border-purple-500/30'
                                }`}
                            >
                                <p className="text-white">{msg.content}</p>
                            </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            className="flex justify-start mb-4"
                        >
                            <div className="bg-blue-600/30 border border-blue-500/30 rounded-2xl p-4">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"/>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"/>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"/>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="flex gap-2 items-center">
                <input
                    className="flex-grow px-4 py-3 bg-gray-700/50 rounded-lg border border-gray-600
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none 
                     transition duration-200 text-white"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                />
                <button
                    onClick={sendMessage}
                    disabled={isLoading || !input.trim()}
                    className="p-3 bg-blue-600 rounded-lg transition-all duration-200
                     hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed
                     focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <PaperAirplaneIcon className="h-5 w-5 text-white"/>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;