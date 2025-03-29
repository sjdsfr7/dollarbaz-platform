import { services } from '@/lib/services.config';

export default function ServicesPage() {
  return (
    <main className="p-8 space-y-6 text-white">
      <h1 className="text-3xl font-bold mb-6">All Digital Services</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services
          .filter((s) => s.available)
          .map((service) => (
            <li key={service.slug}>
              <a
                href={`/services/${service.slug}`}
                className="block border border-border rounded-xl p-6 hover:bg-gray-800 transition"
              >
                <h2 className="text-xl font-semibold text-orange-400 mb-2">
                  {service.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
}
