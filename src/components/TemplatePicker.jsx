import React, { useEffect, useMemo, useRef } from 'react';
import { TEMPLATES } from './templates';

export default function TemplatePicker({ selectedId, onSelect }) {
  const items = useMemo(() => TEMPLATES, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs uppercase tracking-widest text-zinc-400">Choose Template</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((t) => (
          <TemplateThumb
            key={t.id}
            template={t}
            active={selectedId === t.id}
            onClick={() => onSelect(t)}
          />
        ))}
      </div>
    </div>
  );
}

function TemplateThumb({ template, active, onClick }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = 240;
    const h = 240;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    template.draw(ctx, w, h);
    // Minimal overlay grid for aesthetic
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    for (let i = 1; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo((w / 4) * i, 0);
      ctx.lineTo((w / 4) * i, h);
      ctx.stroke();
    }
  }, [template]);

  return (
    <button
      onClick={onClick}
      className={`group relative border ${
        active ? 'border-white' : 'border-zinc-800'
      } bg-black overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
    >
      <canvas ref={canvasRef} className="w-full h-auto block" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 text-white text-xs px-2 py-1 text-left">
        {template.name}
      </div>
    </button>
  );
}
