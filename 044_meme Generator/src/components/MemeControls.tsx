import React from 'react';

interface MemeControlsProps {
  topText: string;
  bottomText: string;
  textColor: string;
  fontSize: number;
  onTextChange: (type: 'top' | 'bottom', value: string) => void;
  onColorChange: (color: string) => void;
  onFontSizeChange: (size: number) => void;
  onDownload: () => void;
  onReset: () => void;
}

const MemeControls: React.FC<MemeControlsProps> = ({
  topText,
  bottomText,
  textColor,
  fontSize,
  onTextChange,
  onColorChange,
  onFontSizeChange,
  onDownload,
  onReset
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-xl space-y-4">
      {/* Top Text Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Top Text
        </label>
        <input
          type="text"
          value={topText}
          onChange={(e) => onTextChange('top', e.target.value)}
          placeholder="Enter top text..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Bottom Text Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bottom Text
        </label>
        <input
          type="text"
          value={bottomText}
          onChange={(e) => onTextChange('bottom', e.target.value)}
          placeholder="Enter bottom text..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Color Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Text Color
        </label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => onColorChange(e.target.value)}
          className="w-full h-10 rounded-lg cursor-pointer"
        />
      </div>

      {/* Font Size Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Font Size: {fontSize}px
        </label>
        <input
          type="range"
          min="16"
          max="72"
          value={fontSize}
          onChange={(e) => onFontSizeChange(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          onClick={onDownload}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          📥 Download
        </button>
        <button
          onClick={onReset}
          className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          🔄 New Meme
        </button>
      </div>
    </div>
  );
};

export default MemeControls;