import React from 'react';

export default function GenerateBar({ onDownload }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
      <div className="text-zinc-500 text-xs sm:text-sm">
        Every image is watermarked with NOTH. Monochrome. No mercy.
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onDownload}
          className="px-5 py-3 bg-white text-black font-semibold tracking-wide uppercase border border-white hover:bg-black hover:text-white transition-colors duration-150"
        >
          Generate & Download
        </button>
      </div>
    </div>
  );
}
