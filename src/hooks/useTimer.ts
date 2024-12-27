import { useState, useEffect, useCallback } from 'react';

export const useTimer = (initialTime: number, onTimeUp: () => void, isActive: boolean) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timerId = window.setTimeout(() => {
      if (timeLeft <= 1) {
        onTimeUp();
      }
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [timeLeft, isActive, onTimeUp]);

  return { timeLeft, resetTimer };
};