import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ServiceCard from '@/components/ui/ServiceCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e0e] text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="mb-10">
          <img
            src="/logo-hex.svg"
            alt="Dollarbaz Symbol"
            className="mx-auto w-24 h-24"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
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
            href="/services/cards"
          />
          <ServiceCard
            title="TRADING"
            icon="/icon-lock.svg"
            content="Coming Soon"
            buttonLabel="Notify Me"
          />
          <ServiceCard
            title="EDUCATION"
            icon="/icon-edu.svg"
            content="Coming Soon"
            buttonLabel="Notify Me"
          />
        </div>
        <p className="mt-12 text-xs text-gray-500">
          Subtle animated cyberpunk background with neon effects
        </p>
      </main>
      <Footer />
    </div>
  );
}
