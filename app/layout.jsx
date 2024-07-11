import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            {children}
        </html>
    );
}
