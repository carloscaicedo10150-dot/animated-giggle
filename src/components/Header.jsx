import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, progress, total, langMode, onToggleLang }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <span className={styles.beeIcon}>&#128029;</span>
                <h1 className={styles.title}>EchoMoji</h1>
                <span className={styles.beeIcon}>&#128029;</span>
            </div>

            <div className={styles.progressSection}>
                <div className={styles.progressBarContainer}>
                    <div
                        className={styles.progressBarFill}
                        style={{ width: `${(progress / total) * 100}%` }}
                    ></div>
                </div>
                <span className={styles.progressText}>{progress}/{total} cards</span>
            </div>

            <div className={styles.settingsSection}>
                <button
                    className={styles.langToggle}
                    onClick={onToggleLang}
                    title="Switch Language Mode"
                >
                    {langMode === 'ES_EN' ? '🇪🇸 \u27A1 🇬🇧' : '🇬🇧 \u27A1 🇪🇸'}
                </button>
                <button className={styles.settingsButton} aria-label="Settings">
                    &#9881;
                </button>
            </div>
        </header>
    );
};

export default Header;
