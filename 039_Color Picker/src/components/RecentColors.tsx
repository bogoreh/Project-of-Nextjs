'use client';

interface RecentColorsProps {
  colors: string[];
  onColorSelect: (hex: string) => void;
  maxDisplay?: number;
}

const RecentColors = ({ colors, onColorSelect, maxDisplay = 8 }: RecentColorsProps) => {
  const displayColors = colors.slice(0, maxDisplay);

  return (
    <div className="recent-colors">
      <h3 className="section-title">Recent Colors</h3>
      <div className="recent-grid">
        {displayColors.map((color, index) => (
          <button
            key={index}
            className="recent-color-btn"
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
            aria-label={`Select recent color ${color}`}
          />
        ))}
        {displayColors.length < maxDisplay && (
          Array(maxDisplay - displayColors.length).fill(0).map((_, index) => (
            <div key={`empty-${index}`} className="empty-color-slot" />
          ))
        )}
      </div>
    </div>
  );
};

export default RecentColors;