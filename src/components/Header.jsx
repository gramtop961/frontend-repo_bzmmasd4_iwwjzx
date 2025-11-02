import React from 'react';

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-black">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 select-none">
          <div className="w-3 h-3 bg-white" aria-hidden />
          <h1 className="text-white font-bold tracking-tight text-lg sm:text-xl">
            $NOTH Meme Lab
          </h1>
        </div>
        <div className="text-zinc-400 text-xs sm:text-sm uppercase tracking-widest">
          Black • White • Fast
        </div>
      </div>
    </header>
  );
}
