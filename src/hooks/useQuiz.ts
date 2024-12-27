import { useState, useCallback } from 'react';
import { Question } from '../types';
import { useTimer } from './useTimer';

export const useQuiz = (questions: Question[], timeLimit: number) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const nextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  }, [currentQuestion, questions.length]);

  const { timeLeft, resetTimer } = useTimer(
    timeLimit,
    nextQuestion,
    !showResults && selectedAnswer === null
  );

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
    setTimeout(() => {
      nextQuestion();
      resetTimer();
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    resetTimer();
  };

  return {
    currentQuestion,
    score,
    timeLeft,
    showResults,
    selectedAnswer,
    handleAnswer,
    nextQuestion,
    restartQuiz
  };
};