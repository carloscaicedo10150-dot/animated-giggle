import React from 'react';
import styles from './MascotWrapper.module.css';

const MascotWrapper = () => {
    return (
        <div className={styles.mascotContainer}>
            <div className={styles.chatBubble}>
                Hi! Ask me anything about this word!
                <div className={styles.bubbleArrow}></div>
            </div>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1000/1000844.png" // Slightly different bee for mascot
                alt="EchoMoji Mascot"
                className={styles.mascotImage}
            />
        </div>
    );
};

export default MascotWrapper;
