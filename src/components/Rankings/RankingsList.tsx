import React from 'react';
import { RankingItem } from './types';

interface RankingsListProps {
  rankings: RankingItem[];
}

export const RankingsList: React.FC<RankingsListProps> = ({ rankings }) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left">Kedudukan</th>
          <th className="px-4 py-2 text-left">Nama</th>
          <th className="px-4 py-2 text-left">Syarikat</th>
          <th className="px-4 py-2 text-left">Markah</th>
          <th className="px-4 py-2 text-left">Peratus</th>
        </tr>
      </thead>
      <tbody>
        {rankings.map((ranking, index) => (
          <tr key={ranking.id} className="border-b">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{ranking.name}</td>
            <td className="px-4 py-2">{ranking.company}</td>
            <td className="px-4 py-2">{ranking.score}</td>
            <td className="px-4 py-2">{ranking.percentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);