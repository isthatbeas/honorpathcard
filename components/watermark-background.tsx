export function WatermarkBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-gold opacity-[0.07]"
    >
      <defs>
        <pattern id="honorpath-lattice" width="64" height="64" patternUnits="userSpaceOnUse">
          <path
            d="M32 0 L64 32 L32 64 L0 32 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M32 20 L44 32 L32 44 L20 32 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <circle cx="32" cy="32" r="1.5" fill="currentColor" />
          <circle cx="0" cy="0" r="2" fill="currentColor" />
          <circle cx="64" cy="0" r="2" fill="currentColor" />
          <circle cx="0" cy="64" r="2" fill="currentColor" />
          <circle cx="64" cy="64" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honorpath-lattice)" />
    </svg>
  )
}
