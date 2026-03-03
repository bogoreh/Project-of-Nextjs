"use client";

import React, { useState, useEffect, useRef } from 'react';
import MemeDisplay from './MemeDisplay';
import MemeControls from './MemeControls';
import { Meme, MemeState } from '../types/meme.types';
import html2canvas from 'html2canvas';

const MemeGenerator: React.FC = () => {
  const [memeState, setMemeState] = useState<MemeState>({
    selectedMeme: null,
    topText: '',
    bottomText: '',
    textColor: '#ffffff',
    fontSize: 32,
    memes: []
  });

  const memeRef = useRef<HTMLDivElement>(null);

  // Fetch popular meme templates
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        if (data.success) {
          setMemeState(prev => ({
            ...prev,
            memes: data.data.memes.slice(0, 20) // Get first 20 memes
          }));
        }
      } catch (error) {
        console.error('Error fetching memes:', error);
      }
    };

    fetchMemes();
  }, []);

  const handleMemeSelect = (meme: Meme) => {
    setMemeState(prev => ({ ...prev, selectedMeme: meme }));
  };

  const handleTextChange = (type: 'top' | 'bottom', value: string) => {
    setMemeState(prev => ({
      ...prev,
      [type === 'top' ? 'topText' : 'bottomText']: value
    }));
  };

  const handleColorChange = (color: string) => {
    setMemeState(prev => ({ ...prev, textColor: color }));
  };

  const handleFontSizeChange = (size: number) => {
    setMemeState(prev => ({ ...prev, fontSize: size }));
  };

  const handleDownload = async () => {
    if (memeRef.current) {
      try {
        const canvas = await html2canvas(memeRef.current, {
          scale: 2,
          backgroundColor: null
        });
        
        const link = document.createElement('a');
        link.download = 'my-meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error downloading meme:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          🎭 Meme Generator
        </h1>

        {!memeState.selectedMeme ? (
          <div className="bg-white rounded-lg p-4 shadow-xl">
            <h2 className="text-lg font-semibold mb-3">Choose a Template:</h2>
            <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
              {memeState.memes.map((meme) => (
                <button
                  key={meme.id}
                  onClick={() => handleMemeSelect(meme)}
                  className="relative aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all"
                >
                  <img
                    src={meme.url}
                    alt={meme.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 truncate">
                    {meme.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <MemeDisplay
              ref={memeRef}
              meme={memeState.selectedMeme}
              topText={memeState.topText}
              bottomText={memeState.bottomText}
              textColor={memeState.textColor}
              fontSize={memeState.fontSize}
            />

            <MemeControls
              topText={memeState.topText}
              bottomText={memeState.bottomText}
              textColor={memeState.textColor}
              fontSize={memeState.fontSize}
              onTextChange={handleTextChange}
              onColorChange={handleColorChange}
              onFontSizeChange={handleFontSizeChange}
              onDownload={handleDownload}
              onReset={() => setMemeState(prev => ({ ...prev, selectedMeme: null }))}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MemeGenerator;