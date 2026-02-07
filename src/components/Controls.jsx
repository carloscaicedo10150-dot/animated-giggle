import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ onNext, onMastered, onReview, onRecord, isRecording }) => {
    return (
        <div className={styles.controlsContainer}>
            <div className={styles.actionButtons}>
                <button
                    className={`${styles.btn} ${styles.btnMastered}`}
                    onClick={onMastered}
                    disabled={isRecording}
                >
                    <span className={styles.icon}>&#128077;</span> Mastered
                </button>
                <button
                    className={`${styles.btn} ${styles.btnReview}`}
                    onClick={onReview}
                    disabled={isRecording}
                >
                    <span className={styles.icon}>&#11088;</span> Review Later
                </button>
            </div>

            <div className={styles.centerActions}>
                <button
                    className={`${styles.btnRecord} ${isRecording ? styles.isRecording : ''}`}
                    onClick={onRecord}
                >
                    <span className={styles.micIcon}>
                        {isRecording ? '\u23F9' : '\uD83C\uDF99'}
                    </span>
                    {isRecording ? "Stop Recording" : "Record Yourself"}
                </button>
            </div>

            <div className={styles.navigation}>
                <button
                    className={styles.btnNext}
                    onClick={onNext}
                    disabled={isRecording}
                >
                    Next <span className={styles.arrow}>&#10095;</span>
                </button>
            </div>
        </div>
    );
};

export default Controls;
