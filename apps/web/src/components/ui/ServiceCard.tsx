import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  icon: string;
  content: React.ReactNode;
  buttonLabel?: string;
  href?: string;
}

export default function ServiceCard({
  title,
  icon,
  content,
  buttonLabel,
  href,
}: ServiceCardProps) {
  return (
    <div className="border border-gray-700 rounded-xl p-6 bg-black/30 text-center">
      <h2 className="text-orange-500 font-bold text-lg mb-4">{title}</h2>
      <img
        src={icon}
        alt={`${title} Icon`}
        className="mx-auto mb-4 w-12 h-12"
      />
      <div className="text-sm text-gray-300 mb-4">{content}</div>
      {buttonLabel && href && (
        <Link href={href}>
          <button className="px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-700">
            {buttonLabel}
          </button>
        </Link>
      )}
    </div>
  );
}
