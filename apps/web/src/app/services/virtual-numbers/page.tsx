interface PageProps {
  params: { slug: string };
}

const displayNames: Record<string, string> = {
  cards: 'Virtual Cards',
  vps: 'VPS & VPN',
  numbers: 'Virtual Numbers',
};

export default function ServicePage({ params }: PageProps) {
  const name = displayNames[params.slug] || 'Unknown Service';

  return (
    <main className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-muted-foreground mb-6">
        Here you’ll offer {name.toLowerCase()} with pricing, order flow, and
        service automation.
      </p>
      <div className="border border-gray-700 p-4 rounded bg-gray-900/30">
        <p>
          This is a placeholder. Replace this with the real module for:{' '}
          <strong>{params.slug}</strong>
        </p>
      </div>
    </main>
  );
}

