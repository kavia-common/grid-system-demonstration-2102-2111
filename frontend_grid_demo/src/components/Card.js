import React from 'react';
import './Card.css';

/**
 * PUBLIC_INTERFACE
 * Card renders an image-based card with title and optional caption.
 * Props:
 * - imageSrc: string - source URL of the image
 * - title: string - title text
 * - caption?: string - optional caption/description
 * - alt: string - alt text for image (required for accessibility)
 * - size: number - base size hint (px) for width/height constraints
 */
function Card({ imageSrc, title, caption, alt, size = 220 }) {
  return (
    <article
      className="card"
      style={{ width: `${size}px` }}
      tabIndex={0}
      aria-label={title}
    >
      <div className="card-imageWrap">
        <img src={imageSrc} alt={alt || title} loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {caption ? <p className="card-caption">{caption}</p> : null}
      </div>
    </article>
  );
}

export default Card;
