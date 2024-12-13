import {GlobeAltIcon, PhoneIcon} from '@heroicons/react/24/solid';
import {motion} from 'motion/react';

const Resources = () => {
    const helplines = [
        {
            country: 'United States',
            number: '1-800-273-8255',
            name: 'National Suicide Prevention Lifeline',
            icon: <GlobeAltIcon className="h-6 w-6"/>
        },
        {
            country: 'United Kingdom',
            number: '116 123',
            name: 'Samaritans',
            icon: <GlobeAltIcon className="h-6 w-6"/>
        }
        // TODO: ADD MORE
    ];

    return (
        <div className="card max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
                <PhoneIcon className="h-8 w-8 text-red-500 mr-3"/>
                <h2 className="text-2xl font-bold">Emergency Support</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {helplines.map((helpline, index) => (
                    <motion.a
                        key={helpline.number}
                        href={`tel:${helpline.number}`}
                        className="card hover:bg-gray-700/50 transition-colors"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: index * 0.1}}
                    >
                        <div className="flex items-center">
                            {helpline.icon}
                            <div className="ml-3">
                                <h3 className="font-bold">{helpline.country}</h3>
                                <p className="text-blue-400">{helpline.number}</p>
                                <p className="text-sm text-gray-400">{helpline.name}</p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Resources;