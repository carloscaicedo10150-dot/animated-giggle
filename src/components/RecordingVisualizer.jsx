import React from 'react';
import styles from './RecordingVisualizer.module.css';

const RecordingVisualizer = ({ isRecording }) => {
    if (!isRecording) return null;

    return (
        <div className={styles.visualizerContainer}>
            <div className={styles.pulseRing}></div>
            <div className={styles.pulseRing} style={{ animationDelay: '0.5s' }}></div>
            <div className={styles.pulseRing} style={{ animationDelay: '1s' }}></div>
            <div className={styles.micIcon}>&#127908;</div>
        </div>
    );
};

export default RecordingVisualizer;
