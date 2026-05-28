import { useState, useEffect } from 'react';

const TARGET = new Date('2026-06-01T08:00:00');

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000)  / 60000);
  const seconds = Math.floor((diff % 60000)    / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n) => String(n).padStart(2, '0');

/* ─── Full-page wave background ─── */
const WaveBackground = () => (
  <>
    <style>{`
      @keyframes wave1-move {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes wave2-move {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes wave3-move {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .wave-bg-container {
        position: fixed;
        inset: 0;
        overflow: hidden;
        z-index: 0;
        background: #F4F1EA;
      }
      .wave-svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 200%;
        height: 100%;
      }
      .wave-path-1 {
        fill: rgba(74, 93, 35, 0.18);
        animation: wave1-move 7s linear infinite;
      }
      .wave-path-2 {
        fill: rgba(212, 175, 55, 0.22);
        animation: wave2-move 10s linear infinite reverse;
      }
      .wave-path-3 {
        fill: rgba(248, 149, 29, 0.15);
        animation: wave3-move 13s linear infinite;
      }
    `}</style>
    <div className="wave-bg-container" aria-hidden="true">
      {/* Wave layer 1 — olive */}
      <svg className="wave-svg" style={{ bottom: '-5%' }} viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g className="wave-path-1">
          <path d="M0,160 C120,200 240,120 360,160 C480,200 600,120 720,160 C840,200 960,120 1080,160 C1200,200 1320,120 1440,160 L1440,320 L0,320 Z" />
          <path d="M1440,160 C1560,200 1680,120 1800,160 C1920,200 2040,120 2160,160 C2280,200 2400,120 2520,160 C2640,200 2760,120 2880,160 L2880,320 L1440,320 Z" />
        </g>
      </svg>

      {/* Wave layer 2 — gold, reversed, higher up */}
      <svg className="wave-svg" style={{ bottom: '5%' }} viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g className="wave-path-2">
          <path d="M0,200 C180,240 360,160 540,200 C720,240 900,160 1080,200 C1260,240 1380,160 1440,200 L1440,320 L0,320 Z" />
          <path d="M1440,200 C1620,240 1800,160 1980,200 C2160,240 2340,160 2520,200 C2700,240 2820,160 2880,200 L2880,320 L1440,320 Z" />
        </g>
      </svg>

      {/* Wave layer 3 — orange, slowest */}
      <svg className="wave-svg" style={{ bottom: '15%' }} viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g className="wave-path-3">
          <path d="M0,240 C90,260 180,220 270,240 C360,260 450,220 540,240 C630,260 720,220 810,240 C900,260 990,220 1080,240 C1170,260 1260,220 1350,240 C1395,250 1420,235 1440,240 L1440,320 L0,320 Z" />
          <path d="M1440,240 C1530,260 1620,220 1710,240 C1800,260 1890,220 1980,240 C2070,260 2160,220 2250,240 C2340,260 2430,220 2520,240 C2610,260 2700,220 2790,240 C2835,250 2862,235 2880,240 L2880,320 L1440,320 Z" />
        </g>
      </svg>
    </div>
  </>
);

/* ─── Countdown units ─── */
const unitStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '80px',
};
const numStyle = {
  fontSize: 'clamp(2.5rem, 7vw, 4rem)',
  fontWeight: 700,
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontVariantNumeric: 'tabular-nums',
  lineHeight: 1,
  color: '#2B2B2B',
};
const labelStyle = {
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  marginTop: '0.4rem',
  color: '#4A5D23',
  fontWeight: 600,
};
const sepStyle = {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 300,
  paddingBottom: '0.4rem',
  color: '#D4AF37',
  alignSelf: 'flex-end',
};

const Timer = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <WaveBackground />
      <main
        id="main-content"
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(3rem, 12vw, 8rem)',
          color: '#2B2B2B',
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          Bob Timer
        </h1>

        <p style={{
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#5C4033',
          fontWeight: 600,
        }}>
          Countdown to Monday, June 1 — 8:00 AM
        </p>

        {time ? (
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '1rem',
            background: 'rgba(244, 241, 234, 0.7)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            border: '1px solid rgba(74, 93, 35, 0.15)',
          }}>
            <div style={unitStyle}>
              <span style={numStyle}>{pad(time.days)}</span>
              <span style={labelStyle}>Days</span>
            </div>
            <span style={sepStyle}>:</span>
            <div style={unitStyle}>
              <span style={numStyle}>{pad(time.hours)}</span>
              <span style={labelStyle}>Hours</span>
            </div>
            <span style={sepStyle}>:</span>
            <div style={unitStyle}>
              <span style={numStyle}>{pad(time.minutes)}</span>
              <span style={labelStyle}>Minutes</span>
            </div>
            <span style={sepStyle}>:</span>
            <div style={unitStyle}>
              <span style={numStyle}>{pad(time.seconds)}</span>
              <span style={labelStyle}>Seconds</span>
            </div>
          </div>
        ) : (
          <p style={{ fontSize: '2rem', fontWeight: 600, color: '#2B2B2B' }}>🎉 It&apos;s time!</p>
        )}
      </main>
    </>
  );
};

export default Timer;
