import React, { useState, useEffect } from 'react';
import styles from './Flashcard.module.css';

const Flashcard = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Reset flip state when card changes
    useEffect(() => {
        setIsFlipped(false);
    }, [card]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleAudioClick = (e) => {
        e.stopPropagation();
        // Placeholder for audio playback
        console.log(`Playing audio for: ${card.word}`);
    };

    return (
        <div className={styles.scene}>
            <div
                className={`${styles.card} ${isFlipped ? styles.isFlipped : ''}`}
                onClick={handleFlip}
            >
                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                    <div className={styles.imageContainer}>
                        <img src={card.image} alt={card.word} className={styles.cardImage} />
                    </div>
                    <h2 className={styles.word}>{card.word}</h2>
                    {card.phonetic && <p className={styles.phonetic}>{card.phonetic}</p>}
                    <button className={styles.audioButton} onClick={handleAudioClick} aria-label="Play Audio">
                        &#9658; {/* Play Icon */}
                    </button>
                    <p className={styles.tapToFlip}>Tap to Flip &#8635;</p>
                </div>
                <div className={`${styles.cardFace} ${styles.cardBack}`}>
                    <h3 className={styles.translationLabel}>Translation</h3>
                    <p className={styles.translation}>{card.translation}</p>
                    {/* Optional Definition logic could go here */}
                    <p className={styles.tapToFlip}>Tap to Flip &#8635;</p>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
