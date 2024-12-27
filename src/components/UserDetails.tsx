import React from 'react';
import { UserDetails as UserDetailsType } from '../types';

interface UserDetailsProps {
  details: UserDetailsType;
}

export const UserDetailsDisplay: React.FC<UserDetailsProps> = ({ details }) => (
  <div className="mb-6 text-left p-4 border rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Maklumat Peserta:</h3>
    <div className="space-y-2">
      <p><strong>Nama:</strong> {details.name}</p>
      <p><strong>Jawatan:</strong> {details.position}</p>
      <p><strong>No. Telefon:</strong> {details.phone}</p>
      <p><strong>Syarikat:</strong> {details.company}</p>
    </div>
  </div>
);