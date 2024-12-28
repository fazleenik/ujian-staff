import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import { RankingsList } from './RankingsList';
import { RankingItem } from './types';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ShareButtons } from '../common/ShareButtons';

export const Rankings: React.FC = () => {
  const [rankings, setRankings] = useState<RankingItem[]>([]);
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
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Ranking Keseluruhan</h1>
        
        {rankings.length > 0 ? (
          <RankingsList rankings={rankings} />
        ) : (
          <p className="text-center text-gray-500 mt-4">No rankings available yet.</p>
        )}

        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Kongsi Ujian Ini</h2>
          <p className="text-center text-gray-600 mb-4">
            Jemput rakan-rakan anda untuk mengambil ujian ini dan bandingkan kedudukan anda!
          </p>
          <ShareButtons 
            url={window.location.href}
            title="Sertai Ujian Kompetensi Undang-Undang Kerja (Level 1) dan bandingkan kedudukan anda!"
          />
        </div>
      </div>
    </div>
  );
};