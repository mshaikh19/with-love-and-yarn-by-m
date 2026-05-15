import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="flex flex-col animate-pulse">
      {/* Image Placeholder */}
      <div className="relative aspect-[3/4] bg-[#F0ECE8] rounded-sm mb-4">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>

      {/* Info Placeholders */}
      <div className="flex flex-col space-y-3 px-1">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            {/* Title Line */}
            <div className="h-5 bg-[#F0ECE8] rounded-md w-3/4" />
            {/* Subtitle Line */}
            <div className="h-3 bg-[#F0ECE8] rounded-md w-1/2" />
          </div>
          {/* Price Placeholder */}
          <div className="h-5 bg-[#F0ECE8] rounded-md w-12" />
        </div>
        
        {/* Description Line */}
        <div className="h-3 bg-[#F0ECE8] rounded-md w-full" />
        
        {/* Button Placeholder */}
        <div className="mt-2 h-10 bg-[#F0ECE8] rounded-sm w-full opacity-60" />
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SkeletonCard;
