'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, Shield, Vote } from 'lucide-react'
import CandidateCard from './components/CandidateCard'
import VoteButton from './components/VoteButton'
import Results from './components/Results'

export default function Home() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Ismail Omar Guelleh", party: "People's Rally for Progress", votes: 120 },
    { id: 2, name: "Hassan Gouled Aptidon", party: "Democratic National Party", votes: 85 }
  ])
  
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [totalVotes, setTotalVotes] = useState(205)

  // Update total votes when candidate votes change
  useEffect(() => {
    const total = candidates.reduce((sum, candidate) => sum + candidate.votes, 0)
    setTotalVotes(total)
  }, [candidates])

  const handleVote = () => {
    if (selectedCandidate === null || hasVoted) return

    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      setCandidates(prevCandidates =>
        prevCandidates.map(candidate =>
          candidate.id === selectedCandidate
            ? { ...candidate, votes: candidate.votes + 1 }
            : candidate
        )
      )
      
      setIsLoading(false)
      setHasVoted(true)
      setShowConfirmation(true)
      setTotalVotes(prev => prev + 1)
      
      // Hide confirmation after 5 seconds
      setTimeout(() => setShowConfirmation(false), 5000)
    }, 1500)
  }

  const handleSelectCandidate = (id: number) => {
    if (!hasVoted) {
      setSelectedCandidate(id)
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Confirmation Message */}
      {showConfirmation && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
            <CheckCircle size={24} />
            <div>
              <p className="font-bold">Vote Submitted Successfully!</p>
              <p className="text-sm opacity-90">Thank you for participating in the democratic process.</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Vote className="text-blue-600" size={36} />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Presidential Election 2024
          </h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Cast your vote for the future leader. Your voice matters in shaping our nation's destiny.
        </p>
        
        {hasVoted && (
          <div className="inline-flex items-center gap-2 mt-4 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <Shield size={18} />
            <span className="font-medium">Your vote has been recorded securely</span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Candidates Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              name={candidate.name}
              party={candidate.party}
              votes={candidate.votes}
              imageUrl={`/${candidate.name.includes('Guelleh') ? 'guelleh' : 'hassan'}.jpg`}
              isSelected={selectedCandidate === candidate.id}
              hasVoted={hasVoted}
              onSelect={() => handleSelectCandidate(candidate.id)}
            />
          ))}
        </div>

        {/* Voting Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 mb-12 text-center border border-blue-200/30">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ready to Make Your Choice?</h2>
            
            <div className="mb-8">
              <VoteButton
                onClick={handleVote}
                disabled={selectedCandidate === null}
                isLoading={isLoading}
                hasVoted={hasVoted}
              />
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <AlertCircle size={16} />
                <span>You can only vote for one candidate</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield size={16} />
                <span>Your vote is anonymous and secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-12">
          <Results candidates={candidates} totalVotes={totalVotes} />
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm">
          <p>This is a demonstration voting application. All votes are simulated for educational purposes.</p>
          <p className="mt-2">Every vote counts in democracy. Vote wisely!</p>
        </div>
      </div>
    </div>
  )
}