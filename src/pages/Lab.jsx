import React from 'react';

export default function Lab() {
  return (
    <div className="lab-scene">
      <style>{`
        :root {
          --fur-color: #5C4033;
          --eye-color: #FFD700;
        }

        .lab-scene {
          position: relative;
          width: 100vw;
          height: 100vh;
          background-color: #1a1a1a;
          overflow: hidden;
        }

        .character {
          position: absolute;
          bottom: 20%;
          width: 60px;
          height: 120px;
          
          /* --- RESIZING MAGIC --- */
          transform: scale(0.5); /* 50% size */
          transform-origin: bottom center; /* Keeps feet anchored to the ground */
          
          animation: walkAcross 20s linear infinite; /* Slowed down slightly for scale */
        }

        /* --- Shared Styles --- */
        .head, .torso, .arm, .leg, .leg::after {
           background-color: var(--fur-color);
           box-shadow: 0 0 8px 4px var(--fur-color);
        }

        .head {
          position: absolute;
          top: 15px; 
          left: 10px;
          width: 40px;
          height: 45px;
          border-radius: 50% 50% 40% 40%; 
          z-index: 4; 
        }

        .eye {
          position: absolute;
          top: 18px; 
          width: 6px;
          height: 6px;
          background-color: var(--eye-color);
          border-radius: 50%;
          box-shadow: 0 0 4px var(--eye-color);
          z-index: 5;
          animation: blink 4s infinite;
        }
        .eye.left { left: 8px; }
        .eye.right { left: 26px; }

        .mouth {
          position: absolute;
          top: 32px;
          left: 14px;
          width: 12px;
          height: 3px;
          background-color: #2a1a10;
          z-index: 5;
        }

        .torso {
          position: absolute;
          top: 35px;
          left: 10px;
          width: 40px;
          height: 50px;
          border-radius: 10px;
          z-index: 2;
        }

        .arm, .leg {
          position: absolute;
          width: 14px; 
          transform-origin: top center;
          border-radius: 7px;
        }

        .arm {
          top: 40px;
          height: 85px; 
          z-index: 3;
        }
        .arm.left {
          left: -2px;
          animation: heavyWalk 1.4s ease-in-out infinite alternate;
        }
        .arm.right {
          left: 48px;
          animation: heavyWalk 1.4s ease-in-out infinite alternate-reverse;
        }

        .leg {
          top: 75px; 
          height: 55px;
          z-index: 1;
        }
        .leg.left {
          left: 12px;
          animation: heavyWalk 1.4s ease-in-out infinite alternate-reverse;
        }
        .leg.right {
          left: 36px;
          animation: heavyWalk 1.4s ease-in-out infinite alternate;
        }

        .leg::after {
          content: '';
          position: absolute;
          bottom: -5px; 
          height: 18px; 
          width: 40px; 
          border-radius: 10px;
          left: -8px; 
          border-top-right-radius: 20px; 
          border-bottom-right-radius: 5px;
        }

        @keyframes walkAcross {
          from { left: -100px; }
          to { left: 100%; }
        }

        @keyframes heavyWalk {
          0% { transform: rotate(20deg); }
          100% { transform: rotate(-20deg); }
        }

        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
      `}</style>

      <div className="character">
        <div className="head">
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="mouth"></div>
        </div>
        <div className="torso"></div>
        <div className="arm left"></div>
        <div className="arm right"></div>
        <div className="leg left"></div>
        <div className="leg right"></div>
      </div>
    </div>
  );
}