// src/components/services/ServiceCard.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { DigitalService } from '@/lib/services.config';
import { motion } from 'framer-motion';

interface Props {
  service: DigitalService;
  onNotify: (slug: string) => void;
}

export function ServiceCard({ service, onNotify }: Props) {
  const router = useRouter();
  const { isSignedIn } = useUser();

  const handleClick = () => {
    if (service.comingSoon) return onNotify(service.name);
    if (service.requiresAuth && !isSignedIn) {
      return router.push(`/sign-in?redirect_url=/services/${service.slug}`);
    }
    router.push(`/services/${service.slug}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={handleClick}
      className="cursor-pointer border border-zinc-700 rounded-xl p-6 bg-black/30 text-center hover:bg-black/40 transition"
    >
      <h2 className="text-orange-500 font-bold text-lg mb-4">{service.name}</h2>
      <p className="text-sm text-gray-300 mb-4">{service.description}</p>
      <button className="px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-700">
        {service.comingSoon ? 'Notify Me' : 'Open'}
      </button>
    </motion.div>
  );
}
