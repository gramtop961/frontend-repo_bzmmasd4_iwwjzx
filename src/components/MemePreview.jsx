import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const MemePreview = forwardRef(function MemePreview(
  { topText, bottomText, template, width = 800, height = 800 },
  ref
) {
  const canvasRef = useRef(null);

  // Expose canvas and a dataURL method to parent
  useImperativeHandle(ref, () => ({
    getCanvas: () => canvasRef.current,
    toDataURL: (type = 'image/png') => canvasRef.current?.toDataURL(type),
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Draw template base
    template.draw(ctx, width, height);

    // Text styles
    const pad = Math.round(height * 0.05);
    const fontFamily = 'Inter, Helvetica Neue, Arial, system-ui, sans-serif';

    // Top text
    if (topText) {
      ctx.font = `700 ${Math.round(height * 0.065)}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      // Outline & fill depending on background
      drawHighContrastText(ctx, topText.toUpperCase(), width / 2, pad, width * 0.9, true);
    }

    // Bottom text
    if (bottomText) {
      ctx.font = `700 ${Math.round(height * 0.065)}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      drawHighContrastText(
        ctx,
        bottomText.toUpperCase(),
        width / 2,
        height - pad,
        width * 0.9,
        false
      );
    }

    // Watermark: NOTH bottom-right
    const wm = 'NOTH';
    ctx.font = `600 ${Math.round(height * 0.03)}px ${fontFamily}`;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText(wm, width - pad * 0.6, height - pad * 0.6);
  }, [topText, bottomText, template, width, height]);

  return (
    <div className="w-full aspect-square bg-black border border-zinc-800 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
});

export default MemePreview;

// Helper: draw text with automatic wrapping and contrast outline
function drawHighContrastText(ctx, text, centerX, y, maxWidth, isTop) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';
  for (let w of words) {
    const test = current ? current + ' ' + w : w;
    const m = ctx.measureText(test);
    if (m.width > maxWidth && current) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);

  const lineHeight = parseInt(ctx.font, 10) * 1.2;

  let startY = y;
  if (!isTop) {
    // bottom-aligned: stack upwards
    startY = y - lineHeight * (lines.length - 1);
  }

  for (let i = 0; i < lines.length; i++) {
    const ly = startY + i * lineHeight;
    // Outline for contrast
    ctx.lineWidth = Math.max(4, parseInt(ctx.font, 10) * 0.12);
    ctx.strokeStyle = 'rgba(0,0,0,0.9)';
    ctx.strokeText(lines[i], centerX, ly);
    ctx.fillStyle = '#fff';
    ctx.fillText(lines[i], centerX, ly);
  }
}
