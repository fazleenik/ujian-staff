export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What is the primary goal of workplace safety protocols?",
    options: [
      "A. To slow down work",
      "B. To protect employees and prevent accidents",
      "C. To comply with paperwork",
      "D. To increase costs"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Which of these is a best practice for customer service?",
    options: [
      "A. Ignoring customer complaints",
      "B. Speaking quickly to serve more customers",
      "C. Active listening and empathy",
      "D. Transferring all calls to supervisors"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    text: "What is the correct way to handle confidential information?",
    options: [
      "A. Share it only with trusted colleagues",
      "B. Store it on personal devices",
      "C. Follow security protocols strictly",
      "D. Email it to yourself for backup"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    text: "How should you respond to a workplace conflict?",
    options: [
      "A. Address it professionally and seek resolution",
      "B. Ignore it and hope it resolves itself",
      "C. Complain to other colleagues",
      "D. Take sides immediately"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "What is the best approach to time management?",
    options: [
      "A. Multitask constantly",
      "B. Prioritize tasks and set realistic deadlines",
      "C. Work overtime regularly",
      "D. Handle tasks as they come"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "Which communication style is most effective in a professional setting?",
    options: [
      "A. Clear, concise, and respectful",
      "B. Casual and informal",
      "C. Brief and minimal",
      "D. Lengthy and detailed"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    text: "What should you do if you make a mistake at work?",
    options: [
      "A. Hide it and hope no one notices",
      "B. Blame others",
      "C. Acknowledge it and take corrective action",
      "D. Only tell your closest colleague"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    text: "How should you handle feedback from supervisors?",
    options: [
      "A. Defend yourself immediately",
      "B. Ignore it if you disagree",
      "C. Take it personally",
      "D. Listen and use it for improvement"
    ],
    correctAnswer: 3
  },
  {
    id: 9,
    text: "What is the best way to contribute to team success?",
    options: [
      "A. Work independently always",
      "B. Collaborate and support team goals",
      "C. Focus only on your tasks",
      "D. Compete with teammates"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "How should you handle tight deadlines?",
    options: [
      "A. Rush and cut corners",
      "B. Panic and work overtime",
      "C. Plan, prioritize, and communicate",
      "D. Request extensions always"
    ],
    correctAnswer: 2
  }
];