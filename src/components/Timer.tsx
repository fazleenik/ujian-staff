import React from 'react';
import { TimerProps } from '../types';

export const Timer: React.FC<TimerProps> = ({ timeLeft }) => (
  <div className="text-xl font-bold">
    Time Left: {timeLeft}s
  </div>
);