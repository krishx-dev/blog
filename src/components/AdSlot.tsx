/// <reference types="vite/client" />
import React, { useEffect } from 'react';

interface AdSlotProps {
  className?: string;
  slotId: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: 'true' | 'false';
  type?: 'sidebar' | 'in-feed' | 'horizontal-banner';
}

const AdSlot: React.FC<AdSlotProps> = ({ 
  className = '', 
  slotId, 
  format = 'auto', 
  responsive = 'true',
  type = 'in-feed' 
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  const getContainerStyles = () => {
    switch (type) {
      case 'sidebar':
        return 'min-h-[250px] w-full';
      case 'horizontal-banner':
        return 'min-h-[100px] w-full';
      default:
        return 'min-h-[280px] w-full';
    }
  };

  return (
    <div className={`ad-container my-10 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Advertisement</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>
      <div className={`bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center overflow-hidden ${getContainerStyles()}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX'}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </div>
  );
};

export default AdSlot;
