<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="metallic" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7f8c8d"/>
      <stop offset="100%" stop-color="#2c3e50"/>
    </linearGradient>
    <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff6f00" stop-opacity="1"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Outer Hexagon Frame -->
  <polygon points="256,32 448,144 448,368 256,480 64,368 64,144"
           fill="url(#metallic)" stroke="#ff6f00" stroke-width="4"/>

  <!-- Inner Stack (VPS / Layers) -->
  <g transform="translate(160, 210)">
    <rect x="0" y="0" width="192" height="24" rx="4" fill="url(#metallic)"/>
    <rect x="8" y="26" width="176" height="24" rx="4" fill="url(#metallic)"/>
    <rect x="16" y="52" width="160" height="24" rx="4" fill="url(#metallic)"/>
  </g>

  <!-- Credit Card Icon -->
  <g transform="translate(144, 120)">
    <rect x="0" y="0" width="224" height="96" rx="12" fill="url(#metallic)" stroke="#ff6f00" stroke-width="2"/>
    <rect x="20" y="28" width="40" height="28" fill="#2c3e50"/>
    <rect x="80" y="36" width="32" height="8" fill="#2c3e50"/>
    <rect x="120" y="36" width="32" height="8" fill="#2c3e50"/>
  </g>

  <!-- Glow accents -->
  <circle cx="256" cy="32" r="24" fill="url(#neonGlow)"/>
  <circle cx="256" cy="480" r="24" fill="url(#neonGlow)"/>
</svg>