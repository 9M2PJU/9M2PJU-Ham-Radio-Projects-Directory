import React from 'react';
import { motion } from 'framer-motion';

const LinkCard = ({ title, url, index }) => {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
            }}
            whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '600px',
                padding: '1.25rem 2rem',
                margin: '0.75rem 0',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.5px' }}>{title}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{new URL(url).hostname}</span>
            </div>

            <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </motion.div>
        </motion.a>
    );
};

export default LinkCard;
