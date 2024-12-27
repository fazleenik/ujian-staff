import React from 'react';
import { QuestionCardProps } from '../types';

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswer
}) => (
  <div className="my-8">
    <h2 className="text-xl font-semibold mb-6">{question.text}</h2>
    <div className="space-y-4">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(index)}
          disabled={selectedAnswer !== null}
          className={`w-full p-4 text-left rounded-lg border transition-colors ${
            selectedAnswer === null
              ? 'hover:bg-blue-50 border-gray-200'
              : selectedAnswer === index
              ? index === question.correctAnswer
                ? 'bg-green-100 border-green-500'
                : 'bg-red-100 border-red-500'
              : index === question.correctAnswer
              ? 'bg-green-100 border-green-500'
              : 'border-gray-200'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);