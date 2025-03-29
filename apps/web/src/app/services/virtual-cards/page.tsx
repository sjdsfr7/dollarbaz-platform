'use client';

import { useState } from 'react';

export default function VirtualCardsPage() {
  const [amount, setAmount] = useState('');
  const [cardType, setCardType] = useState('standard');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify({ service: 'virtual-cards', amount, cardType }),
    });

    if (res.ok) {
      alert('Order placed!');
      setAmount('');
      setCardType('standard');
    } else {
      alert('Error placing order');
    }
  };

  return (
    <main className="p-8 text-white max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Order Virtual Card</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Card Type</label>
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
          >
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black rounded"
        >
          Submit Order
        </button>
      </form>
    </main>
  );
}
