'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/dashboard');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>

      {data ? (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Wallet Info</h2>
            <p>
              <b>TON Wallet:</b> {data.wallet?.tonAddress || 'Not Set'}
            </p>
            <p>
              <b>USDT Wallet:</b> {data.wallet?.usdtAddress || 'Not Set'}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Stars Exchanges</h2>
            {data.exchanges.length === 0 ? (
              <p>No exchanges yet.</p>
            ) : (
              <table className="w-full border border-gray-700 mt-4">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-2">Stars</th>
                    <th>Payout</th>
                    <th>Status</th>
                    <th>Ref</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {data.exchanges.map((ex: any) => (
                    <tr key={ex.id} className="border-b border-gray-700">
                      <td className="p-2">{ex.starsAmount}</td>
                      <td>{ex.payoutType}</td>
                      <td>{ex.status}</td>
                      <td>{ex.reference}</td>
                      <td>{new Date(ex.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
