import {HeartIcon} from '@heroicons/react/24/solid';

const Navbar = () => (
    <header className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-center">
                <HeartIcon className="h-8 w-8 text-red-500 mr-3"/>
                <h1 className="text-2xl font-bold">Herbert - Mental Health</h1>
            </div>
        </div>
    </header>
);

export default Navbar;