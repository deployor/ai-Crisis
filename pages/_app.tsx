import {AppProps} from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {router.pathname !== '/' && <Navbar/>}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;