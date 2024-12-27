import React, { useState } from 'react';
import { UserDetails, OnboardingProps } from '../types';

export const Onboarding: React.FC<OnboardingProps> = ({ onStart }) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    position: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(userDetails);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-6">SELAMAT DATANG KE UJIAN KOMPETENSI UNDANG-UNDANG KERJA (LEVEL 1)</h1>
          <div className="space-y-2 text-lg mb-6">
            <p>SILA ISI MAKLUMAT ANDA DI BAWAH</p>
            <p>UJIAN INI MEMPUNYAI 10 SOALAN OBJEKTIF</p>
            <p>MASA DIBERI UNTUK SETIAP SOALAN ADALAH 30 SAAT</p>
            <p>JIKA GAGAL JAWAB DALAM MASA YANG DIBERIKAN, ANDA AKAN MENDAPAT 0 BAGI SOALAN TERSEBUT</p>
            <p>MARKAH AKAN DIBERIKAN DI AKHIR UJIAN</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg"
              value={userDetails.name}
              onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jawatan</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg"
              value={userDetails.position}
              onChange={(e) => setUserDetails(prev => ({ ...prev, position: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">No. Telefon</label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded-lg"
              value={userDetails.phone}
              onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Syarikat</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg"
              value={userDetails.company}
              onChange={(e) => setUserDetails(prev => ({ ...prev, company: e.target.value }))}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mt-6"
          >
            MULA UJIAN
          </button>
        </form>
      </div>
    </div>
  );
};