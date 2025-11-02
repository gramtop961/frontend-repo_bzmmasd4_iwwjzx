import React, { useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import MemePreview from './components/MemePreview';
import MemeControls from './components/MemeControls';
import TemplatePicker from './components/TemplatePicker';
import GenerateBar from './components/GenerateBar';
import { TEMPLATES } from './components/templates';

function App() {
  const [topText, setTopText] = useState('WHEN THE MVP IS MINIMAL');
  const [bottomText, setBottomText] = useState('BUT THE VIBES ARE MAXIMAL');
  const [selected, setSelected] = useState(TEMPLATES[0]);
  const previewRef = useRef(null);

  const onChange = ({ topText: t, bottomText: b }) => {
    if (typeof t === 'string') setTopText(t);
    if (typeof b === 'string') setBottomText(b);
  };

  const handleDownload = () => {
    const dataUrl = previewRef.current?.toDataURL('image/png');
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'noth-meme.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            <MemePreview
              ref={previewRef}
              topText={topText}
              bottomText={bottomText}
              template={selected}
              width={1000}
              height={1000}
            />
            <GenerateBar onDownload={handleDownload} />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <MemeControls
                topText={topText}
                bottomText={bottomText}
                onChange={onChange}
              />
            </div>

            <TemplatePicker
              selectedId={selected.id}
              onSelect={(t) => setSelected(t)}
            />

            <div className="text-xs text-zinc-500 leading-relaxed border-t border-zinc-800 pt-4">
              Notes: This is a minimalist, black-and-white meme lab. Live preview updates in real-time as you type. Download produces a high-resolution PNG with an embedded NOTH watermark in the bottom-right corner.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
