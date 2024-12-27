import React, { useState } from 'react';
import { QuizHeader } from './components/QuizHeader';
import { QuestionCard } from './components/QuestionCard';
import { Results } from './components/Results';
import { Onboarding } from './components/Onboarding';
import { useQuiz } from './hooks/useQuiz';
import { questions } from './data/questions';
import { UserDetails } from './types';

const TIME_LIMIT = 30;

function App() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const {
    currentQuestion,
    score,
    timeLeft,
    showResults,
    selectedAnswer,
    handleAnswer,
    nextQuestion,
    restartQuiz
  } = useQuiz(questions, TIME_LIMIT);

  const handleStart = (details: UserDetails) => {
    setUserDetails(details);
  };

  const handleRestart = () => {
    setUserDetails(null);
    restartQuiz();
  };

  if (!userDetails) {
    return <Onboarding onStart={handleStart} />;
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <Results
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
            userDetails={userDetails}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <QuizHeader
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          timeLeft={timeLeft}
          onTimeUp={nextQuestion}
        />
        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}

export default App;