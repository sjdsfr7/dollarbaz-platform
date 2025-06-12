import { ServicesGrid } from '@/components/services/ServicesGrid';

export default function ServicesPage() {
  return (
    <main className="p-8 space-y-6 text-white max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Digital Services</h1>
      <ServicesGrid />
    </main>
  );
}
// This page displays all digital services offered by the company.
// It uses the ServicesGrid component to display the services in a grid format.