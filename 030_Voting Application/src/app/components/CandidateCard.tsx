import { User, Award, Vote } from 'lucide-react'

interface CandidateCardProps {
  name: string
  party: string
  votes: number
  imageUrl: string
  isSelected: boolean
  hasVoted: boolean
  onSelect: () => void
}

export default function CandidateCard({
  name,
  party,
  votes,
  imageUrl,
  isSelected,
  hasVoted,
  onSelect
}: CandidateCardProps) {
  return (
    <div className={`
      relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-300
      ${isSelected ? 'ring-4 ring-blue-500 ring-opacity-50 transform scale-105' : 'hover:shadow-xl'}
      ${hasVoted ? 'opacity-90' : 'cursor-pointer hover:scale-[1.02]'}
    `}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Candidate Image */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
              <User size={60} className="text-blue-600" />
            </div>
          </div>
          {isSelected && (
            <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2">
              <Vote size={20} />
            </div>
          )}
        </div>

        {/* Candidate Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-blue-600 font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
            <Award size={18} />
            {party}
          </p>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">Current Votes</span>
              <span className="text-xl font-bold text-blue-700">{votes}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((votes / 100) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Select Button */}
          <button
            onClick={onSelect}
            disabled={hasVoted}
            className={`
              w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition-all
              ${isSelected 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                : hasVoted
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
              }
            `}
          >
            {isSelected ? '✓ Selected' : hasVoted ? 'Already Voted' : 'Select Candidate'}
          </button>
        </div>
      </div>
    </div>
  )
}