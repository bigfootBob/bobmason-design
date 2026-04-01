import { useId } from 'react';

export default function Mlogo({
  width = 120,
  height = 120,
  radius = 6,
  className = '',
  ...props
}) {
  const id = useId();
  const bgGradId = `bgGrad-${id}`;
  const shadowId = `shadow-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Bob Mason Design Technologist logo"
      {...props}
    >
      <defs>
        <linearGradient id={bgGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b434a" />
          <stop offset="100%" stopColor="#1b2024" />
        </linearGradient>

        <filter id={shadowId} x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.4"/>
        </filter>
      </defs>

      <rect width="120" height="120" rx={radius} fill={`url(#${bgGradId})`} />

      <path
        d="M 28 88 L 28 28 L 44 28 L 60 44 L 76 28 L 92 28 L 92 88 L 76 88 L 76 48 L 60 64 L 44 48 L 44 88 Z"
        fill="#F8951D"
        filter={`url(#${shadowId})`}
      />

      <path
        d="M 48 60 L 60 72 L 72 60 L 72 80 L 60 92 L 48 80 Z"
        fill="#F8951D"
        filter={`url(#${shadowId})`}
      />
    </svg>
  );
}