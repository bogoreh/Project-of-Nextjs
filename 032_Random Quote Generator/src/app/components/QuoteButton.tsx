import { RefreshCw, Zap } from 'lucide-react'

interface QuoteButtonProps {
  onClick: () => void
  isLoading?: boolean
}

export default function QuoteButton({ onClick, isLoading }: QuoteButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed pulse-glow"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative flex items-center justify-center space-x-3">
        {isLoading ? (
          <RefreshCw className="w-6 h-6 animate-spin" />
        ) : (
          <>
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Generate New Inspiration</span>
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
          </>
        )}
      </div>
      
      <div className="absolute -bottom-1 left-1/2 w-20 h-1 bg-white/50 rounded-full transform -translate-x-1/2 group-hover:w-32 transition-all duration-300" />
    </button>
  )
}