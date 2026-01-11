'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ImageSliderProps } from '@/types/slider';
import Slide from './Slide';
import SliderControls from './SliderControls';

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  slides, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isAutoPlaying || !isClient) return;

    const interval = setInterval(goToNextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNextSlide, autoPlayInterval, isClient]);

  // Keyboard navigation
  useEffect(() => {
    if (!isClient) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextSlide();
      if (e.key === 'ArrowLeft') goToPrevSlide();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, isClient]);

  if (!isClient) {
    return (
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-lg">Loading beautiful slides...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto group">
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}

        <SliderControls
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onNext={goToNextSlide}
          onPrev={goToPrevSlide}
          onDotClick={goToSlide}
          autoPlay={isAutoPlaying}
          toggleAutoPlay={toggleAutoPlay}
        />
      </div>

      {/* Hint */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 text-sm animate-pulse">
        ← Use arrow keys or click to navigate →
      </div>
    </div>
  );
};

export default ImageSlider;