'use client';

import { services } from '@/lib/services.config';
import { ServiceCard } from './ServiceCard';
import { useNotifyModal } from '@/store/useNotifyModal';

export function ServicesGrid() {
  const { openModal } = useNotifyModal();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.slug}
          service={service}
          onNotify={openModal}
        />
      ))}
    </div>
  );
}
// This component renders a grid of service cards using the ServiceCard component.
// It maps over the services array imported from services.config and passes each service object to the ServiceCard component.
// The onNotify prop is a function that opens a notification modal when the user interacts with the service card.