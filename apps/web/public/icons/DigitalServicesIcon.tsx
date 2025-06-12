import * as React from 'react';
const SvgDigitalServicesIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill="none"
    {...props}
  >
    <defs>
      <radialGradient id="b" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff6f00" />
        <stop offset="100%" stopOpacity={0} />
      </radialGradient>
      <linearGradient id="a" x1={0} x2={1} y1={0} y2={1}>
        <stop offset="0%" stopColor="#7f8c8d" />
        <stop offset="100%" stopColor="#2c3e50" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      stroke="#ff6f00"
      strokeWidth={4}
      d="m256 32 192 112v224L256 480 64 368V144z"
    />
    <g fill="url(#a)" transform="translate(160 210)">
      <rect width={192} height={24} rx={4} />
      <rect width={176} height={24} x={8} y={26} rx={4} />
      <rect width={160} height={24} x={16} y={52} rx={4} />
    </g>
    <g transform="translate(144 120)">
      <rect
        width={224}
        height={96}
        fill="url(#a)"
        stroke="#ff6f00"
        strokeWidth={2}
        rx={12}
      />
      <path
        fill="#2c3e50"
        d="M20 28h40v28H20zM80 36h32v8H80zM120 36h32v8h-32z"
      />
    </g>
    <circle cx={256} cy={32} r={24} fill="url(#b)" />
    <circle cx={256} cy={480} r={24} fill="url(#b)" />
  </svg>
);
export default SvgDigitalServicesIcon;
