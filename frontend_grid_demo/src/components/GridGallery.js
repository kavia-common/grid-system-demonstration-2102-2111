import React from 'react';
import Card from './Card';
import './GridGallery.css';

/**
 * PUBLIC_INTERFACE
 * GridGallery renders a responsive grid of Card elements.
 * Props:
 * - items: Array<{ id: string|number, title: string, caption?: string, src: string, alt?: string }>
 * - columns: number
 * - gap: number (px)
 * - cardSize: number (px)
 */
function GridGallery({ items, columns, gap, cardSize }) {
  return (
    <section
      className="grid-gallery"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: `${gap}px`,
      }}
      aria-label="Image gallery"
    >
      {items.map((item) => (
        <Card
          key={item.id}
          imageSrc={item.src}
          title={item.title}
          caption={item.caption}
          alt={item.alt || item.title}
          size={cardSize}
        />
      ))}
    </section>
  );
}

export default GridGallery;
