import React, { forwardRef } from 'react';
import { Meme } from '../types/meme.types';

interface MemeDisplayProps {
  meme: Meme;
  topText: string;
  bottomText: string;
  textColor: string;
  fontSize: number;
}

const MemeDisplay = forwardRef<HTMLDivElement, MemeDisplayProps>(
  ({ meme, topText, bottomText, textColor, fontSize }, ref) => {
    const textStyle = {
      color: textColor,
      fontSize: `${fontSize}px`,
      fontWeight: 'bold',
      textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
      WebkitTextStroke: '1px black',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px'
    };

    return (
      <div className="bg-white rounded-lg p-4 shadow-xl mb-4">
        <div 
          ref={ref}
          className="relative rounded-lg overflow-hidden"
          style={{ 
            maxWidth: '100%',
            aspectRatio: `${meme.width}/${meme.height}`
          }}
        >
          <img 
            src={meme.url} 
            alt="Meme template"
            className="w-full h-full object-contain"
          />
          
          {/* Top Text */}
          {topText && (
            <div 
              className="absolute top-4 left-0 right-0 text-center px-4 break-words"
              style={textStyle}
            >
              {topText}
            </div>
          )}
          
          {/* Bottom Text */}
          {bottomText && (
            <div 
              className="absolute bottom-4 left-0 right-0 text-center px-4 break-words"
              style={textStyle}
            >
              {bottomText}
            </div>
          )}
        </div>
      </div>
    );
  }
);

MemeDisplay.displayName = 'MemeDisplay';

export default MemeDisplay;