import React from 'react';
import './GridControls.css';

/**
 * PUBLIC_INTERFACE
 * GridControls renders a themed control panel with inputs to adjust:
 * - columns (2-6), gap (4-24px), cardSize (160-300px)
 * Props:
 * - columns: number
 * - setColumns: (n: number) => void
 * - gap: number
 * - setGap: (n: number) => void
 * - cardSize: number
 * - setCardSize: (n: number) => void
 */
function GridControls({ columns, setColumns, gap, setGap, cardSize, setCardSize }) {
  return (
    <section className="controls" aria-labelledby="controls-heading">
      <h2 id="controls-heading" className="controls-heading">Grid Controls</h2>
      <div className="controls-row">
        <label htmlFor="columns" className="controls-label">
          Columns
          <span className="controls-helper" aria-hidden="true">({columns})</span>
        </label>
        <input
          id="columns"
          type="range"
          min="2"
          max="6"
          value={columns}
          onChange={(e) => setColumns(parseInt(e.target.value, 10))}
          aria-valuemin={2}
          aria-valuemax={6}
          aria-valuenow={columns}
          aria-label="Columns"
        />
      </div>

      <div className="controls-row">
        <label htmlFor="gap" className="controls-label">
          Gap
          <span className="controls-helper" aria-hidden="true">({gap}px)</span>
        </label>
        <input
          id="gap"
          type="range"
          min="4"
          max="24"
          value={gap}
          onChange={(e) => setGap(parseInt(e.target.value, 10))}
          aria-valuemin={4}
          aria-valuemax={24}
          aria-valuenow={gap}
          aria-label="Gap"
        />
      </div>

      <div className="controls-row">
        <label htmlFor="size" className="controls-label">
          Card Size
          <span className="controls-helper" aria-hidden="true">({cardSize}px)</span>
        </label>
        <input
          id="size"
          type="range"
          min="160"
          max="300"
          step="10"
          value={cardSize}
          onChange={(e) => setCardSize(parseInt(e.target.value, 10))}
          aria-valuemin={160}
          aria-valuemax={300}
          aria-valuenow={cardSize}
          aria-label="Card size"
        />
      </div>
    </section>
  );
}

export default GridControls;
