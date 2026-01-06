import { Trophy, TrendingUp, Users, PieChart } from 'lucide-react'

interface Candidate {
  id: number
  name: string
  party: string
  votes: number
}

interface ResultsProps {
  candidates: Candidate[]
  totalVotes: number
}

export default function Results({ candidates, totalVotes }: ResultsProps) {
  const winner = candidates.reduce((prev, current) => 
    prev.votes > current.votes ? prev : current
  )

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <Trophy className="text-yellow-500" size={28} />
          Live Results
        </h2>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full font-bold">
          <Users size={20} className="inline mr-2" />
          {totalVotes} Total Votes
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {candidates.map((candidate) => {
          const percentage = totalVotes > 0 ? (candidate.votes / totalVotes) * 100 : 0
          
          return (
            <div key={candidate.id} className="bg-white p-5 rounded-xl shadow-sm border">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{candidate.name}</h3>
                  <p className="text-blue-600 text-sm">{candidate.party}</p>
                </div>
                {candidate.id === winner.id && candidate.votes > 0 && (
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <Trophy size={14} className="inline mr-1" />
                    Leading
                  </span>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Votes: {candidate.votes}</span>
                  <span className="font-bold text-blue-700">{percentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PieChart className="text-indigo-600" size={24} />
            <div>
              <h4 className="font-bold text-gray-800">Real-time Updates</h4>
              <p className="text-sm text-gray-600">Results update instantly as votes come in</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="text-green-500" size={20} />
            <span className="text-lg font-bold text-gray-800">Live</span>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}