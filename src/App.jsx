import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';

const categories = [
    {
        title: "Ham Radio Tools",
        links: [
            { title: 'HAM Radio Callbook', url: 'https://callbook.hamradio.my/login' },
            { title: 'Callsign Search', url: 'https://callsign.hamradio.my/' },
            { title: 'DX Cluster', url: 'https://dx.hamradio.my/' },
            { title: 'Dashboard', url: 'https://dashboard.hamradio.my/' },
            { title: 'Calendar', url: 'https://calendar.hamradio.my/' },
            { title: 'Clock', url: 'https://clock.hamradio.my/live.html' },
            { title: 'Setpad', url: 'https://setpad.hamradio.my/' },
            { title: 'Pass', url: 'https://pass.hamradio.my/' },
        ]
    },
    {
        title: "Maps & Signal Analysis",
        links: [
            { title: 'Coverage Map', url: 'https://coverage.hamradio.my/' },
            { title: 'Line of Sight', url: 'https://los.hamradio.my/' },
            { title: 'QSO Map', url: 'https://qsomap.hamradio.my/' },
            { title: 'Antenna Calculator', url: 'https://antenna.hamradio.my' },
            { title: 'APRS Visualization', url: 'https://pjuwebaprs.hamradio.my/' },
            { title: 'Frequency', url: 'https://frequency.hamradio.my/' },
        ]
    },
    {
        title: "Activities",
        links: [
            { title: 'SOTA', url: 'https://sota.hamradio.my/' },
            { title: '9M BOTA', url: 'https://9mbota.hamradio.my/' },
        ]
    },
    {
        title: "Financial Tools",
        links: [
            { title: 'Zakat Calculator', url: 'https://zakat.hamradio.my/' },
            { title: 'Mortgage Calculator', url: 'https://mortgage.hamradio.my/' },
            { title: 'KWSP Calculator', url: 'https://kwsp.hamradio.my/' },
            { title: 'ASB Calculator', url: 'https://asb.hamradio.my/' },
        ]
    }
];

function App() {
    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '4rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '1rem' }}
            >
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: 'transparent',
                    border: 'none'
                }}>

                </div>

                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    margin: '0 0 0.5rem',
                    background: 'linear-gradient(to right, #fff, #aaa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    9M2PJU Projects
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Ham Radio Tools & Resources
                </p>
            </motion.div>

            <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {categories.map((category, catIndex) => (
                    <div key={category.title} style={{ width: '100%' }}>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (catIndex * 0.1) }}
                            style={{
                                fontSize: '1.25rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '1rem',
                                paddingLeft: '0.5rem',
                                borderLeft: '3px solid var(--accent-glow)'
                            }}
                        >
                            {category.title}
                        </motion.h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {category.links.map((link, index) => (
                                <LinkCard key={link.url} {...link} index={index + (catIndex * 5)} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            >
                © {new Date().getFullYear()} 9M2PJU
            </motion.footer>
        </div>
    );
}

export default App;
