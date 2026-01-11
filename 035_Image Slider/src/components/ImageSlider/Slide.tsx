import React from 'react';
import { Slide as SlideType } from '@/types/slider';

interface SlideProps {
  slide: SlideType;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  return (
    <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
        </div>

        {/* Floating Elements */}
        {isActive && (
          <>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex items-end p-8 md:p-12">
          <div className="max-w-3xl transform transition-all duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Featured</span>
            </div>

            {/* Title with Gradient */}
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
              {slide.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl drop-shadow-lg animate-fade-in">
              {slide.description}
            </p>

            {/* CTA Button */}
            {isActive && (
              <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
                <span className="relative z-10">Explore More →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            )}
          </div>
        </div>

        {/* Slide Number */}
        {isActive && (
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-3 border border-white/20 animate-fade-in">
            <span className="text-white font-bold text-lg">
              {slide.id.toString().padStart(2, '0')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;