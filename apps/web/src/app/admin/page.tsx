'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [exchanges, setExchanges] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/admin');
      const json = await res.json();
      setExchanges(json.exchanges);
    };
    load();
  }, []);

  const triggerPayout = async (id: string) => {
    const res = await fetch(`/api/admin/payout`, {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await res.json();
    alert(result.ok ? '✅ Payout sent!' : `❌ Failed: ${result.error}`);
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <table className="w-full border border-gray-700">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2">User</th>
            <th>Stars</th>
            <th>Payout Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exchanges.map((ex) => (
            <tr key={ex.id} className="border-b border-gray-700">
              <td className="p-2">{ex.username}</td>
              <td>{ex.starsAmount}</td>
              <td>{ex.payoutType}</td>
              <td>{ex.status}</td>
              <td>
                {ex.status === 'pending' ? (
                  <button
                    onClick={() => triggerPayout(ex.id)}
                    className="bg-green-600 text-white px-4 py-1 rounded"
                  >
                    Pay
                  </button>
                ) : (
                  '✅'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
