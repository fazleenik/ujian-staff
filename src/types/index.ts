export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface UserDetails {
  name: string;
  position: string;
  phone: string;
  company: string;
}

export interface OnboardingProps {
  onStart: (userDetails: UserDetails) => void;
}

export interface TimerProps {
  timeLeft: number;
  onTimeUp?: () => void;
}

export interface ProgressBarProps {
  current: number;
  total: number;
}

export interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  userDetails: UserDetails;
}

export interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
}