import React from 'react';
import { Timer } from './Timer';
import { ProgressBar } from './ProgressBar';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number;
  onTimeUp: () => void;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  currentQuestion,
  totalQuestions,
  timeLeft,
  onTimeUp
}) => (
  <>
    <div className="flex justify-between items-center mb-6">
      <div className="text-lg">
        Question {currentQuestion + 1}/{totalQuestions}
      </div>
      <Timer timeLeft={timeLeft} onTimeUp={onTimeUp} />
    </div>
    <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
  </>
);