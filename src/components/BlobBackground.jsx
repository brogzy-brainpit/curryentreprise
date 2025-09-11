"use client";

export default function BlobBackground({ children, className = "" }) {
  return (
    <div className={`${className} relative w-full h-screen flex items-center justify-center overflow-hidden`}>
      {/* --- Blurry gradient blobs --- */}
      <div className="absolute inset-0 z-0">
        {/* First blob */}
        <div className="absolute top-1/4 left-1/3 w-[240px] h-[240px] rounded-full bg-emerald-600 opacity-30 blur-[100px] animate-blob"></div>
        {/* Second blob */}
        <div className="absolute top-1/2 left-[38%] w-[350px] h-[350px] rounded-full bg-purple-500 opacity-20 blur-[120px] animate-blob animation-delay-2000"></div>
        {/* Third blob */}
        <div className="absolute top-1/3 left-[40%] w-[230px] h-[230px] rounded-full bg-indigo-500 opacity-20 blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* --- Your content --- */}
      <div className="relative z-10 text-white text-center">
        {children}
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}
