import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import MascotWrapper from './components/MascotWrapper';
import RecordingVisualizer from './components/RecordingVisualizer';
import { vocabulary } from './data/vocabulary';
import './styles/index.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);
  const [recordingStatus, setRecordingStatus] = useState('idle'); // idle, recording, analyzing, feedback
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [langMode, setLangMode] = useState('ES_EN'); // 'ES_EN' or 'EN_ES'

  const rawCard = vocabulary[currentIndex];
  const totalCards = vocabulary.length;

  // Transform card based on language mode
  const currentCard = {
    ...rawCard,
    word: langMode === 'ES_EN' ? rawCard.word : rawCard.translation,
    phonetic: langMode === 'ES_EN' ? rawCard.phonetic : '', // No phonetic for English side yet
    translation: langMode === 'ES_EN' ? rawCard.translation : `${rawCard.word} ${rawCard.phonetic}`,
  };

  const handleToggleLang = () => {
    setLangMode(prev => prev === 'ES_EN' ? 'EN_ES' : 'ES_EN');
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    setFeedbackMessage(null);
    setRecordingStatus('idle');
  };

  const handleMastered = () => {
    setMasteredCount(prev => prev + 1);
    handleNext();
  };

  const handleReview = () => {
    handleNext();
  };

  const handleRecord = () => {
    if (recordingStatus === 'idle') {
      // Start Recording
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          setRecordingStatus('recording');
          // In a real app, we'd start a MediaRecorder here
        })
        .catch(err => {
          console.error("Mic permission denied", err);
          alert("Please allow microphone access to record.");
        });
    } else if (recordingStatus === 'recording') {
      // Stop Recording
      setRecordingStatus('analyzing');

      // Mock Analysis
      setTimeout(() => {
        const isSuccess = Math.random() > 0.3; // 70% success rate
        setRecordingStatus('feedback');
        setFeedbackMessage(isSuccess ? "Great Job! ✨" : "Try Again! 💪");

        // Auto reset after feedback
        setTimeout(() => {
          setRecordingStatus('idle');
          // setFeedbackMessage(null); // Keep message until next action? Or clear it? Let's clear it manually or on next.
        }, 3000);

      }, 2000);
    }
  };

  return (
    <>
      <Header
        title="Spanish Vocab - Food"
        progress={currentIndex + 1}
        total={totalCards}
        langMode={langMode}
        onToggleLang={handleToggleLang}
      />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative' }}>
        <Flashcard card={currentCard} />

        {/* Feedback visual */}
        {recordingStatus === 'analyzing' && (
          <div className="feedback-overlay">Analyzing...</div>
        )}
        {recordingStatus === 'feedback' && (
          <div className={`feedback-overlay ${feedbackMessage.includes('Great') ? 'success' : 'retry'}`}>
            {feedbackMessage}
          </div>
        )}

        <RecordingVisualizer isRecording={recordingStatus === 'recording'} />

        <Controls
          onNext={handleNext}
          onMastered={handleMastered}
          onReview={handleReview}
          onRecord={handleRecord}
          isRecording={recordingStatus === 'recording'}
        />
      </main>

      <MascotWrapper />
    </>
  );
}

export default App;
