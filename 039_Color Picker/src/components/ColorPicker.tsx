'use client';

import { useState, useEffect, useCallback } from 'react';
import { Color } from '@/types/color';
import { hexToRgb, rgbToHsl, rgbToHex } from '@/utils/colorUtils';
import ColorInfo from './ColorInfo';
import RecentColors from './RecentColors';
import PresetColors from './PresetColors';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<Color>({
    hex: '#3498db',
    rgb: { r: 52, g: 152, b: 219 },
    hsl: { h: 204, s: 70, l: 53 }
  });
  
  const [hue, setHue] = useState(204);
  const [saturation, setSaturation] = useState(70);
  const [lightness, setLightness] = useState(53);
  const [recentColors, setRecentColors] = useState<string[]>([]);

  // Convert HSL to RGB and Hex
  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    
    let r = 0, g = 0, b = 0;
    
    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else {
      r = c; g = 0; b = x;
    }
    
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  };

  const updateColorFromHSL = useCallback((h: number, s: number, l: number) => {
    const rgb = hslToRgb(h, s, l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    
    setSelectedColor({
      hex,
      rgb,
      hsl: { h, s, l }
    });
  }, []);

  // Update color when HSL sliders change
  useEffect(() => {
    updateColorFromHSL(hue, saturation, lightness);
  }, [hue, saturation, lightness, updateColorFromHSL]);

  const handleColorSelect = (hex: string) => {
    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    
    setSelectedColor({ hex, rgb, hsl });
    setHue(hsl.h);
    setSaturation(hsl.s);
    setLightness(hsl.l);
    
    // Add to recent colors
    setRecentColors(prev => {
      const filtered = prev.filter(color => color !== hex);
      return [hex, ...filtered].slice(0, 8);
    });
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let hex = e.target.value;
    if (!hex.startsWith('#')) {
      hex = '#' + hex;
    }
    
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
      handleColorSelect(hex);
    }
  };

  return (
    <div className="color-picker-container">
      <ColorInfo color={selectedColor} />
      
      <div className="color-sliders">
        <div className="slider-group">
          <label className="slider-label">
            Hue: <span>{hue}°</span>
          </label>
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(parseInt(e.target.value))}
            className="slider hue-slider"
            style={{
              background: `linear-gradient(to right, 
                #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)`
            }}
          />
        </div>
        
        <div className="slider-group">
          <label className="slider-label">
            Saturation: <span>{saturation}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={saturation}
            onChange={(e) => setSaturation(parseInt(e.target.value))}
            className="slider saturation-slider"
            style={{
              background: `linear-gradient(to right, 
                hsl(${hue}, 0%, ${lightness}%), 
                hsl(${hue}, 100%, ${lightness}%))`
            }}
          />
        </div>
        
        <div className="slider-group">
          <label className="slider-label">
            Lightness: <span>{lightness}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={lightness}
            onChange={(e) => setLightness(parseInt(e.target.value))}
            className="slider lightness-slider"
            style={{
              background: `linear-gradient(to right, 
                #000, hsl(${hue}, ${saturation}%, 50%), #fff)`
            }}
          />
        </div>
      </div>

      <div className="hex-input-group">
        <label htmlFor="hex-input" className="input-label">Hex Color:</label>
        <div className="input-with-prefix">
          <span className="input-prefix">#</span>
          <input
            id="hex-input"
            type="text"
            value={selectedColor.hex.replace('#', '')}
            onChange={handleHexChange}
            className="hex-input"
            maxLength={6}
            pattern="[0-9A-Fa-f]{6}"
          />
        </div>
      </div>

      <PresetColors onColorSelect={handleColorSelect} />
      <RecentColors colors={recentColors} onColorSelect={handleColorSelect} />
    </div>
  );
};

export default ColorPicker;