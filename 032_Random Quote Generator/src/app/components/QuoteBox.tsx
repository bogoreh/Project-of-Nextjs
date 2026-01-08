import { Sparkles, Quote } from 'lucide-react'

interface QuoteBoxProps {
  quote: string
  author: string
}

export default function QuoteBox({ quote, author }: QuoteBoxProps) {
  return (
    <div className="glass-effect rounded-3xl p-8 md:p-12 fade-in max-w-3xl w-full mx-auto card-hover">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Quote className="w-7 h-7 text-white" />
            </div>
            <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-2 -right-2" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Daily Inspiration
            </h1>
            <p className="text-sm text-purple-200">Words that move your soul</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-white/80">Live</span>
        </div>
      </div>

      <div className="relative mb-10">
        <div className="quote-mark">
          <p className="text-2xl md:text-3xl leading-relaxed text-white font-light relative z-10 italic">
            {quote}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">{author}</p>
            <p className="text-sm text-purple-200">Author</p>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="w-3 h-3 rounded-full bg-yellow-400/30"></div>
            ))}
            <span className="text-sm text-white/60 ml-2">Wisdom Level</span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="flex items-center justify-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{new Date().getDate()}</div>
            <div className="text-xs text-purple-200">Day</div>
          </div>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{new Date().getMonth() + 1}</div>
            <div className="text-xs text-purple-200">Month</div>
          </div>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{new Date().getFullYear()}</div>
            <div className="text-xs text-purple-200">Year</div>
          </div>
        </div>
      </div>
    </div>
  )
}