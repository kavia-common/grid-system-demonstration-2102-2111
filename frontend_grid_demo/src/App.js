import React, { useState, useMemo } from 'react';
import './App.css';
import './theme/variables.css';
import GridControls from './components/GridControls';
import GridGallery from './components/GridGallery';

/**
 * PUBLIC_INTERFACE
 * App renders the grid demo with Ocean Professional theme.
 * Includes a control panel to adjust grid columns, gap, and card size.
 * Usage: Use the sliders on the left (or top on small screens) to tweak settings live.
 */
function App() {
  const [columns, setColumns] = useState(4);
  const [gap, setGap] = useState(12);
  const [cardSize, setCardSize] = useState(220);
  const [theme, setTheme] = useState('light');

  const items = useMemo(() => {
    // 12 curated Unsplash placeholder images (reliable, with width/height params).
    // These are not API calls; just static URLs with proper dimensions.
    const base = 'https://images.unsplash.com';
    const srcs = [
      `${base}/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&q=60`, // ocean wave
      `${base}/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop&auto=format&q=60`, // beach
      `${base}/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&q=60`, // wave repeat (intentional)
      `${base}/photo-1493558103817-58b2924bce98?w=800&h=600&fit=crop&auto=format&q=60`, // harbor
      `${base}/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format&q=60`, // island
      `${base}/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop&auto=format&q=60`, // cliff
      `${base}/photo-1493558103817-58b2924bce98?w=800&h=600&fit=crop&auto=format&q=60`, // harbor repeat
      `${base}/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&q=60`,
      `${base}/photo-1496483353456-90997957cf99?w=800&h=600&fit=crop&auto=format&q=60`, // sunset
      `${base}/photo-1496483353456-90997957cf99?w=800&h=600&fit=crop&auto=format&q=60`,
      `${base}/photo-1493558103817-58b2924bce98?w=800&h=600&fit=crop&auto=format&q=60`,
      `${base}/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop&auto=format&q=60`,
    ];

    return srcs.map((src, idx) => ({
      id: idx + 1,
      title: `Ocean Card ${idx + 1}`,
      caption: 'A sample image card in the responsive grid.',
      src,
      alt: `Ocean themed image ${idx + 1}`,
    }));
  }, []);

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    // Note: We keep theme local for now; colors are light-themed. Could extend to dark variables if needed.
  };

  return (
    <div className="App">
      <div className="app-shell">
        <header className="app-header">
          <div className="brand" role="img" aria-label="Ocean Professional demo">
            <div className="brand-badge" />
            <h1 className="brand-title">Grid System Demo</h1>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>

        <div className="app-content">
          <aside className="panel">
            <GridControls
              columns={columns}
              setColumns={setColumns}
              gap={gap}
              setGap={setGap}
              cardSize={cardSize}
              setCardSize={setCardSize}
            />
          </aside>

          <main>
            <div className="panel info" role="note" aria-live="polite">
              <span className="dot" aria-hidden="true" />
              <p>
                Use the controls to adjust the grid columns (2-6), the gap (4-24px),
                and the card size. Cards include hover elevation and smooth transitions.
              </p>
            </div>

            <section className="section">
              <GridGallery items={items} columns={columns} gap={gap} cardSize={cardSize} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
