interface LogoProps {
  variant?: 'color' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ variant = 'color', size = 'md', showText = true }: LogoProps) {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  const iconSize = sizeMap[size];
  const isWhite = variant === 'white';

  return (
    <div className="flex items-center gap-3">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* QR Code inspired background */}
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          rx="8"
          fill={isWhite ? 'white' : '#2563EB'}
          opacity="0.1"
        />

        {/* Shield shape with Q integrated */}
        <path
          d="M32 10C28 10 20 12 16 14C16 14 14 28 14 36C14 44 20 52 32 54C44 52 50 44 50 36C50 28 48 14 48 14C44 12 36 10 32 10Z"
          fill={isWhite ? 'white' : '#2563EB'}
        />

        {/* Q letter integrated with check mark */}
        <path
          d="M32 20C26 20 22 24 22 30C22 36 26 40 32 40C35 40 37.5 38.5 39 36.5L42 39.5L44 37.5L41 34.5C42 33 42.5 31.5 42.5 30C42.5 24 38.5 20 32 20ZM32 23C36.5 23 39.5 26 39.5 30C39.5 34 36.5 37 32 37C27.5 37 24.5 34 24.5 30C24.5 26 27.5 23 32 23Z"
          fill={isWhite ? '#2563EB' : 'white'}
        />

        {/* Check mark accent */}
        <path
          d="M38 34L36 36L40 40L48 32L46 30L40 36L38 34Z"
          fill={isWhite ? '#06B6D4' : '#06B6D4'}
          opacity="0.8"
        />

        {/* QR Code dots accent */}
        <circle cx="18" cy="18" r="2" fill={isWhite ? 'white' : '#2563EB'} opacity="0.6" />
        <circle cx="46" cy="18" r="2" fill={isWhite ? 'white' : '#2563EB'} opacity="0.6" />
        <circle cx="18" cy="46" r="2" fill={isWhite ? 'white' : '#2563EB'} opacity="0.6" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`text-2xl font-bold tracking-tight ${isWhite ? 'text-white' : 'text-blue-600'}`}>
            QRStudy
          </span>
        </div>
      )}
    </div>
  );
}

export function AppIcon({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="14" fill="#2563EB" />

      <path
        d="M32 14C28 14 20 16 16 18C16 18 14 32 14 40C14 48 20 56 32 58C44 56 50 48 50 40C50 32 48 18 48 18C44 16 36 14 32 14Z"
        fill="white"
      />

      <path
        d="M32 24C26 24 22 28 22 34C22 40 26 44 32 44C35 44 37.5 42.5 39 40.5L42 43.5L44 41.5L41 38.5C42 37 42.5 35.5 42.5 34C42.5 28 38.5 24 32 24ZM32 27C36.5 27 39.5 30 39.5 34C39.5 38 36.5 41 32 41C27.5 41 24.5 38 24.5 34C24.5 30 27.5 27 32 27Z"
        fill="#2563EB"
      />

      <path
        d="M38 38L36 40L40 44L48 36L46 34L40 40L38 38Z"
        fill="#06B6D4"
      />
    </svg>
  );
}
