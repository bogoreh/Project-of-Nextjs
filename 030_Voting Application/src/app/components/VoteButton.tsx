import { CheckCircle, Loader2 } from 'lucide-react'

interface VoteButtonProps {
  onClick: () => void
  disabled: boolean
  isLoading: boolean
  hasVoted: boolean
}

export default function VoteButton({ onClick, disabled, isLoading, hasVoted }: VoteButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading || hasVoted}
      className={`
        relative px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300
        ${hasVoted
          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl cursor-default'
          : disabled || isLoading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-2xl hover:scale-105 active:scale-95'
        }
      `}
    >
      <div className="flex items-center justify-center gap-3">
        {hasVoted ? (
          <>
            <CheckCircle size={24} />
            <span>Vote Submitted ✓</span>
          </>
        ) : isLoading ? (
          <>
            <Loader2 size={24} className="animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">✓</span>
            </div>
            <span>Submit Your Vote</span>
          </>
        )}
      </div>
      
      {!hasVoted && !isLoading && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-blue-400 blur-md opacity-50"></div>
      )}
    </button>
  )
}