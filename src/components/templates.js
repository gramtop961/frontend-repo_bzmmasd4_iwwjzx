// Monochrome template definitions with canvas draw functions

export const TEMPLATES = [
  {
    id: 'big-brain',
    name: 'Big Brain',
    draw(ctx, w, h) {
      // Background
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = '#fff';
      ctx.lineWidth = Math.max(2, w * 0.006);

      // Head outline
      const cx = w * 0.28;
      const cy = h * 0.58;
      const r = Math.min(w, h) * 0.22;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      // Big brain bulge
      ctx.beginPath();
      ctx.ellipse(cx, cy - r * 0.85, r * 1.1, r * 0.7, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Veins/grid
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(cx - r * 1.1, cy - r * 0.85 + i * r * 0.25);
        ctx.quadraticCurveTo(cx, cy - r * 1.2 + i * r * 0.25, cx + r * 1.1, cy - r * 0.85 + i * r * 0.25);
        ctx.stroke();
      }

      // Subject frame right
      ctx.strokeRect(w * 0.5, h * 0.15, w * 0.42, h * 0.7);
      // Divider
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.5);
      ctx.lineTo(w * 0.92, h * 0.5);
      ctx.stroke();

      // Title bars
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, w, h * 0.12);
      ctx.fillRect(0, h - h * 0.12, w, h * 0.12);
      ctx.strokeStyle = '#444';
      ctx.strokeRect(0, 0, w, h * 0.12);
      ctx.strokeRect(0, h - h * 0.12, w, h * 0.12);
    },
  },
  {
    id: 'wojak',
    name: 'Wojak',
    draw(ctx, w, h) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = Math.max(2, w * 0.006);

      // Face outline
      ctx.beginPath();
      ctx.moveTo(w * 0.25, h * 0.75);
      ctx.quadraticCurveTo(w * 0.15, h * 0.4, w * 0.35, h * 0.3);
      ctx.quadraticCurveTo(w * 0.6, h * 0.15, w * 0.7, h * 0.35);
      ctx.quadraticCurveTo(w * 0.85, h * 0.6, w * 0.65, h * 0.78);
      ctx.quadraticCurveTo(w * 0.5, h * 0.9, w * 0.25, h * 0.75);
      ctx.stroke();

      // Eyes
      ctx.beginPath();
      ctx.moveTo(w * 0.42, h * 0.5);
      ctx.lineTo(w * 0.52, h * 0.5);
      ctx.moveTo(w * 0.6, h * 0.5);
      ctx.lineTo(w * 0.7, h * 0.5);
      ctx.stroke();

      // Nose
      ctx.beginPath();
      ctx.moveTo(w * 0.55, h * 0.5);
      ctx.quadraticCurveTo(w * 0.5, h * 0.62, w * 0.57, h * 0.62);
      ctx.stroke();

      // Mouth
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.68);
      ctx.quadraticCurveTo(w * 0.55, h * 0.72, w * 0.62, h * 0.68);
      ctx.stroke();

      // Panel lines
      ctx.strokeStyle = '#000';
      ctx.strokeRect(w * 0.05, h * 0.06, w * 0.9, h * 0.88);
      ctx.beginPath();
      ctx.moveTo(w * 0.05, h * 0.52);
      ctx.lineTo(w * 0.95, h * 0.52);
      ctx.stroke();
    },
  },
  {
    id: 'two-buttons',
    name: 'Two Buttons',
    draw(ctx, w, h) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = Math.max(2, w * 0.006);

      // Control panel
      ctx.strokeRect(w * 0.08, h * 0.1, w * 0.84, h * 0.6);
      // Buttons
      const btnW = w * 0.32;
      const btnH = h * 0.14;
      ctx.strokeRect(w * 0.14, h * 0.2, btnW, btnH);
      ctx.strokeRect(w * 0.54, h * 0.2, btnW, btnH);

      // Hand
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.56);
      ctx.quadraticCurveTo(w * 0.6, h * 0.5, w * 0.68, h * 0.64);
      ctx.quadraticCurveTo(w * 0.7, h * 0.7, w * 0.6, h * 0.74);
      ctx.quadraticCurveTo(w * 0.5, h * 0.78, w * 0.46, h * 0.64);
      ctx.closePath();
      ctx.stroke();

      // Title strip
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, h * 0.78, w, h * 0.12);
      ctx.strokeStyle = '#444';
      ctx.strokeRect(0, h * 0.78, w, h * 0.12);
    },
  },
  {
    id: 'blank',
    name: 'Blank Minimal',
    draw(ctx, w, h) {
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.03, h * 0.03, w * 0.94, h * 0.94);
    },
  },
];
