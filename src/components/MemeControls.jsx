import React from 'react';

export default function MemeControls({ topText, bottomText, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-zinc-400">Top text</label>
        <input
          value={topText}
          onChange={(e) => onChange({ topText: e.target.value })}
          placeholder="TYPE SOMETHING WITTY"
          className="w-full bg-black text-white placeholder-zinc-600 border border-zinc-800 focus:border-zinc-500 outline-none px-3 py-2 rounded-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-zinc-400">Bottom text</label>
        <input
          value={bottomText}
          onChange={(e) => onChange({ bottomText: e.target.value })}
          placeholder="PUNCHLINE GOES HERE"
          className="w-full bg-black text-white placeholder-zinc-600 border border-zinc-800 focus:border-zinc-500 outline-none px-3 py-2 rounded-none"
        />
      </div>
    </div>
  );
}
