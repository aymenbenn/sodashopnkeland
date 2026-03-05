import React from 'react';
export function AnimatedBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
      <div className="bubble bubble-6"></div>
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 4s ease-in-out infinite;
        }
        .bubble-1 {
          width: 80px;
          height: 80px;
          left: 10%;
          bottom: -100px;
          animation-delay: 0s;
          animation-duration: 4s;
        }
        .bubble-2 {
          width: 60px;
          height: 60px;
          left: 25%;
          bottom: -100px;
          animation-delay: 0.5s;
          animation-duration: 5s;
        }
        .bubble-3 {
          width: 100px;
          height: 100px;
          left: 45%;
          bottom: -100px;
          animation-delay: 1s;
          animation-duration: 6s;
        }
        .bubble-4 {
          width: 50px;
          height: 50px;
          left: 65%;
          bottom: -100px;
          animation-delay: 1.5s;
          animation-duration: 4.5s;
        }
        .bubble-5 {
          width: 70px;
          height: 70px;
          left: 80%;
          bottom: -100px;
          animation-delay: 2s;
          animation-duration: 5.5s;
        }
        .bubble-6 {
          width: 40px;
          height: 40px;
          left: 90%;
          bottom: -100px;
          animation-delay: 2.5s;
          animation-duration: 3.5s;
        }
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>);

}