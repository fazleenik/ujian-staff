import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

interface Ranking {
  id: string;
  name: string;
  company: string;
  score: number;
  percentage: number;
  created_at: string;
}

export const Rankings: React.FC = () => {
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRankings();
  }, []);

  const fetchRankings = async () => {
    try {
      const { data, error } = await supabase
        .from('rankings')
        .select('*')
        .order('percentage', { ascending: false });

      if (error) throw error;
      setRankings(data || []);
    } catch (error) {
      console.error('Error fetching rankings:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading rankings...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Ranking Keseluruhan</h1>
        
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

        {rankings.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No rankings available yet.</p>
        )}
      </div>
    </div>
  );
};