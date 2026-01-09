import Stopwatch from "../components/Stopwatch";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-2 gradient-text">
          Stopwatch Timer
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          A precise and beautiful stopwatch with lap times
        </p>
        
        <Stopwatch />
        
        <div className="mt-12 text-gray-500 text-sm">
          <p>Built with Next.js 16, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}