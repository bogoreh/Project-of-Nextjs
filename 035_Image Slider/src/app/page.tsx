import ImageSlider from '@/components/ImageSlider';
import { Suspense } from 'react';

const sampleSlides = [
  {
    id: 1,
    title: "Mountain Majesty",
    description: "Discover the world's most breathtaking peaks where clouds kiss the summits.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "#4F46E5"
  },
  {
    id: 2,
    title: "Ocean Serenity",
    description: "Waves whisper secrets of ancient seas in these tranquil coastal paradises.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "#3B82F6"
  },
  {
    id: 3,
    title: "Northern Lights",
    description: "Nature's most spectacular light show dancing across Arctic skies.",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "#10B981"
  },
  {
    id: 4,
    title: "Forest Dreams",
    description: "Ancient trees standing guard over magical woodland realms.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "#8B5CF6"
  },
  {
    id: 5,
    title: "Desert Mirage",
    description: "Golden sands that shift like oceans beneath endless starlit skies.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "#F59E0B"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white font-medium">Premium Gallery</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Visual Symphony
            </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience the world through breathtaking landscapes. 
            Each slide is a masterpiece waiting to be discovered.
          </p>
        </div>

        {/* Main Slider */}
        <div className="mb-16">
          <Suspense fallback={
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-lg animate-pulse">Loading Visual Symphony...</div>
                </div>
              </div>
            </div>
          }>
            <ImageSlider 
              slides={sampleSlides}
              autoPlay={true}
              autoPlayInterval={5000}
            />
          </Suspense>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visual Excellence</h3>
              <p className="text-white/70">High-resolution images with smooth animations and transitions</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Seamless Navigation</h3>
              <p className="text-white/70">Keyboard support, touch gestures, and intuitive controls</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Responsive</h3>
              <p className="text-white/70">Perfect experience on mobile, tablet, and desktop devices</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/60">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}