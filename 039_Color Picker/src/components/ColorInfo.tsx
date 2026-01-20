'use client';

import { Color, ColorFormat } from '@/types/color';
import { useState } from 'react';

interface ColorInfoProps {
  color: Color;
}

const ColorInfo = ({ color }: ColorInfoProps) => {
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [copied, setCopied] = useState(false);

  const getColorString = () => {
    switch (format) {
      case 'hex':
        return color.hex;
      case 'rgb':
        return `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
      case 'hsl':
        return `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getColorString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="color-info">
      <div className="color-preview" style={{ backgroundColor: color.hex }} />
      
      <div className="color-values">
        <div className="format-selector">
          {(['hex', 'rgb', 'hsl'] as ColorFormat[]).map((fmt) => (
            <button
              key={fmt}
              className={`format-btn ${format === fmt ? 'active' : ''}`}
              onClick={() => setFormat(fmt)}
            >
              {fmt.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="color-value-display">
          <span className="color-value">{getColorString()}</span>
          <button
            className={`copy-btn ${copied ? 'copied' : ''}`}
            onClick={copyToClipboard}
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        
        <div className="color-details">
          <div className="detail-item">
            <span className="detail-label">RGB:</span>
            <span className="detail-value">{color.rgb.r}, {color.rgb.g}, {color.rgb.b}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">HSL:</span>
            <span className="detail-value">{color.hsl.h}°, {color.hsl.s}%, {color.hsl.l}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorInfo;