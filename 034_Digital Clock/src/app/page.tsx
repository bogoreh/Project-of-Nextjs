import DigitalClock from '@/components/DigitalClock'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Digital Clock
        </h1>
        <p className="text-gray-400 text-lg">
          Built with Next.js & TypeScript
        </p>
      </div>
      
      <DigitalClock />
      
      <footer className="mt-16 text-center text-gray-500">
        <p className="text-sm">
          Real-time digital clock with smooth animations
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-300"></div>
        </div>
      </footer>
    </div>
  )
}