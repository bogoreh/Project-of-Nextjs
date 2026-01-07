import Calculator from '../components/Calculator';
import { Cpu, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800">
            <Cpu className="w-8 h-8 text-indigo-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Professional Calc
          </h1>
        </div>
        <p className="text-slate-400 max-w-md mx-auto">
          A sophisticated calculator with professional dark theme design. 
          Supports keyboard input for efficient calculations.
        </p>
      </header>
      
      {/* Calculator */}
      <Calculator />
      
      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full">
        <div className="glass-effect rounded-xl p-5 border border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-indigo-900/30">
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="font-semibold text-slate-200">Fast & Responsive</h3>
          </div>
          <p className="text-sm text-slate-400">
            Optimized calculations with instant results and smooth animations
          </p>
        </div>
        
        <div className="glass-effect rounded-xl p-5 border border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-900/30">
              <Shield className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-semibold text-slate-200">Error Protected</h3>
          </div>
          <p className="text-sm text-slate-400">
            Built-in error handling for division by zero and invalid operations
          </p>
        </div>
        
        <div className="glass-effect rounded-xl p-5 border border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-slate-800">
              <span className="text-slate-300 font-mono text-sm">⌨️</span>
            </div>
            <h3 className="font-semibold text-slate-200">Keyboard Support</h3>
          </div>
          <p className="text-sm text-slate-400">
            Full keyboard accessibility with shortcut keys for all operations
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 text-center">
        <div className="text-slate-500 text-sm">
          <p className="mb-2">Press <kbd className="px-2 py-1 bg-slate-900 rounded text-xs border border-slate-800">ESC</kbd> to clear • <kbd className="px-2 py-1 bg-slate-900 rounded text-xs border border-slate-800">Enter</kbd> for equals</p>
          <p className="text-slate-600">Built with Next.js • TypeScript • Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}