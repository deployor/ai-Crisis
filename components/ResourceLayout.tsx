import Link from 'next/link';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import {ReactNode} from 'react';

interface ResourceLayoutProps {
    title: string;
    children: ReactNode;
    subtitle?: string;
}

const ResourceLayout = ({title, subtitle, children}: ResourceLayoutProps) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <main className="container mx-auto px-4 py-8 max-w-5xl">
            <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                <ArrowLeftIcon className="h-5 w-5 mr-2"/>
                Back to Home
            </Link>

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {title}
                </h1>
                {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
            </div>

            {children}
        </main>
    </div>
);

export default ResourceLayout;