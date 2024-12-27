import React, { useRef } from 'react';
import { explanations } from '../data/explanations';
import { questions } from '../data/questions';
import { UserDetails } from '../types';
import { generatePDF } from '../utils/pdf';
import { UserDetailsDisplay } from './UserDetails';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  userDetails: UserDetails;
}

export const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onRestart, userDetails }) => {
  const percentage = (score / totalQuestions) * 100;
  const resultRef = useRef<HTMLDivElement>(null);
  
  const getRecommendation = () => {
    if (percentage >= 90) {
      return "Tahniah! Anda mempunyai pemahaman yang kukuh tentang undang-undang kerja.";
    } else if (percentage >= 70) {
      return "Bagus! Sila semak semula topik yang anda terlepas untuk mengukuhkan pengetahuan anda.";
    } else if (percentage >= 50) {
      return "Anda lulus, tetapi masih ada ruang untuk penambahbaikan. Fokus kepada konsep asas.";
    } else {
      return "Latihan tambahan diperlukan. Sila semak semula bahan dan cuba lagi.";
    }
  };

  const handleDownloadPDF = () => {
    generatePDF(resultRef.current);
  };

  return (
    <div ref={resultRef}>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Keputusan Ujian</h2>
        
        <UserDetailsDisplay details={userDetails} />

        <div className="mb-4">
          <p className="text-xl">Markah Anda: {score}/{totalQuestions}</p>
          <p className="text-lg">Peratus: {percentage}%</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Cadangan:</h3>
          <p className="text-gray-700">{getRecommendation()}</p>
        </div>

        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold mb-4 text-center">Penjelasan Jawapan:</h3>
          {questions.map((question, index) => (
            <div key={question.id} className="mb-4 p-4 border rounded-lg">
              <p className="font-semibold mb-2">Soalan {index + 1}: {question.text}</p>
              <p className="text-green-600 mb-2">
                Jawapan Betul: {question.options[question.correctAnswer]}
              </p>
              <p className="text-gray-700">{explanations[question.id as keyof typeof explanations]}</p>
            </div>
          ))}
        </div>

        <div className="flex space-x-4 justify-center mb-8">
          <button
            onClick={handleDownloadPDF}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Muat Turun Keputusan
          </button>
          <button
            onClick={onRestart}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Cuba Lagi
          </button>
        </div>

        {/* CTA Section */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Take Your Skills to the Next Level!</h3>
          <div className="mb-4">
            <img 
              src="https://strategistonboard.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-29-at-2.38.21-PM-1024x1024.jpeg"
              alt="HR Masterclass"
              className="mx-auto rounded-lg max-w-md w-full mb-4"
            />
          </div>
          <p className="text-lg mb-6">
            Enhance your HR knowledge and career prospects with our comprehensive HR Masterclass.
          </p>
          <a
            href="https://idahar.onpay.my/order/form/hrmb2hr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-block text-lg font-semibold"
          >
            Join HR Masterclass Now
          </a>
        </div>
      </div>
    </div>
  );
};