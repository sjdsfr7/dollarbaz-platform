'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ServiceCard from '@/components/services/ServiceCard';
import NotifyModal from '@/components/common/NotifyMeModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [platformInterest, setPlatformInterest] = useState<
    null | 'trading' | 'education'
  >(null);

  const openModal = (platform: 'trading' | 'education') => {
    setPlatformInterest(platform);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPlatformInterest(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e0e] text-white relative overflow-hidden">
      {/* Framer Motion background glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        style={{
          background:
            'radial-gradient(circle at center, #00ffff55, #ff00ff22, transparent)',
          filter: 'blur(100px)',
        }}
      />

      <Header />
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="mb-10">
          <img
            src="/logo-hex.svg"
            alt="Dollarbaz Symbol"
            className="mx-auto w-24 h-24"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {/* Digital Services Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ServiceCard
              title="DIGITAL SERVICES"
              icon="/icon-card.svg"
              content={
                <ul className="space-y-2">
                  <li>Virtual Cards</li>
                  <li>VPS / VPN</li>
                  <li>Currency Exchange</li>
                  <li>Virtual Numbers</li>
                </ul>
              }
              buttonLabel="Explore"
              href="/services"
            />
          </motion.div>

          {/* Trading Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ServiceCard
              title="TRADING"
              icon="/icon-lock.svg"
              content="Coming Soon"
              buttonLabel="Notify Me"
              onClick={() => openModal('trading')}
            />
          </motion.div>

          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ServiceCard
              title="EDUCATION"
              icon="/icon-edu.svg"
              content="Coming Soon"
              buttonLabel="Notify Me"
              onClick={() => openModal('education')}
            />
          </motion.div>
        </div>

        <p className="mt-12 text-xs text-gray-500">
          Cyberpunk glow powered by Framer Motion
        </p>
      </main>
      <Footer />

      {/* Shared Notify Modal */}
      <NotifyModal
        open={isModalOpen}
        onClose={closeModal}
        platform={platformInterest}
      />
    </div>
  );
}
