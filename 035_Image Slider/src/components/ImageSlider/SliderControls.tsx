import React from 'react';

interface SliderControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
  autoPlay: boolean;
  toggleAutoPlay: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onDotClick,
  autoPlay,
  toggleAutoPlay
}) => {
  return (
    <>
      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        <button
          onClick={onPrev}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
          aria-label="Previous slide"
        >
          <svg className="w-7 h-7 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={onNext}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
          aria-label="Next slide"
        >
          <svg className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Dots with Labels */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotClick(index)}
                  className="flex flex-col items-center group"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 mb-2 ${currentSlide === index ? 'w-8 bg-white shadow-lg' : 'bg-white/50 group-hover:bg-white/80'}`} />
                  <span className={`text-xs font-medium transition-all duration-300 ${currentSlide === index ? 'text-white opacity-100' : 'text-white/50 opacity-0 group-hover:opacity-100'}`}>
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-3 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${autoPlay ? 'bg-green-400 animate-pulse' : 'bg-white'}`} />
                <span className="text-white">
                  {autoPlay ? 'Playing' : 'Paused'}
                </span>
              </button>

              <div className="w-px h-6 bg-white/30" />

              <div className="flex items-center gap-2">
                <span className="text-white/80 text-sm">Progress</span>
                <div className="w-32 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{ 
                      width: `${((currentSlide + 1) / totalSlides) * 100}%` 
                    }}
                  />
                </div>
                <span className="text-white font-bold min-w-[40px]">
                  {currentSlide + 1}/{totalSlides}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderControls;