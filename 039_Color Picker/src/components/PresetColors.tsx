'use client';

import { PresetColor } from '@/types/color';

interface PresetColorsProps {
  onColorSelect: (hex: string) => void;
}

const PresetColors = ({ onColorSelect }: PresetColorsProps) => {
  const presetColors: PresetColor[] = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Cyan', hex: '#00FFFF' },
    { name: 'Magenta', hex: '#FF00FF' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Gray', hex: '#808080' },
  ];

  return (
    <div className="preset-colors">
      <h3 className="section-title">Preset Colors</h3>
      <div className="preset-grid">
        {presetColors.map((color, index) => (
          <button
            key={index}
            className="preset-color-btn"
            style={{ backgroundColor: color.hex }}
            onClick={() => onColorSelect(color.hex)}
            title={color.name}
            aria-label={`Select ${color.name} color`}
          />
        ))}
      </div>
    </div>
  );
};

export default PresetColors;