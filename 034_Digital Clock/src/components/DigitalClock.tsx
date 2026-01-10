'use client'

import { useState, useEffect } from 'react'

interface Time {
  hours: string
  minutes: string
  seconds: string
  ampm: string
  date: string
  day: string
}

export default function DigitalClock() {
  const [time, setTime] = useState<Time>({
    hours: '00',
    minutes: '00',
    seconds: '00',
    ampm: 'AM',
    date: '',
    day: ''
  })

  const updateTime = () => {
    const now = new Date()
    
    // Format hours, minutes, seconds
    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    
    // Convert to 12-hour format
    hours = hours % 12 || 12
    const formattedHours = hours.toString().padStart(2, '0')
    
    // Format date
    const dateOptions: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
    const date = now.toLocaleDateString('en-US', dateOptions)
    
    // Get day of week
    const day = now.toLocaleDateString('en-US', { weekday: 'long' })
    
    setTime({
      hours: formattedHours,
      minutes,
      seconds,
      ampm,
      date,
      day
    })
  }

  useEffect(() => {
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Background Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
      
      {/* Clock Container */}
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
        {/* Time Display */}
        <div className="flex flex-col items-center">
          {/* Main Time Display */}
          <div className="flex items-baseline gap-2 md:gap-4 mb-6">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono">
                {time.hours}
              </div>
              <div className="text-gray-400 text-sm mt-2">HOURS</div>
            </div>
            
            <div className="text-6xl md:text-8xl font-bold text-blue-400 font-mono">:</div>
            
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono">
                {time.minutes}
              </div>
              <div className="text-gray-400 text-sm mt-2">MINUTES</div>
            </div>
            
            <div className="text-6xl md:text-8xl font-bold text-blue-400 font-mono">:</div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-purple-300 to-pink-400 bg-clip-text text-transparent font-mono animate-pulse">
                {time.seconds}
              </div>
              <div className="text-gray-400 text-sm mt-2">SECONDS</div>
            </div>
            
            <div className="text-2xl md:text-4xl font-bold text-cyan-400 self-start ml-4 mt-2">
              {time.ampm}
            </div>
          </div>
          
          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-6"></div>
          
          {/* Date and Day Display */}
          <div className="text-center space-y-4">
            <div className="text-2xl md:text-3xl font-semibold text-cyan-300">
              {time.day}
            </div>
            <div className="text-lg text-gray-300">
              {time.date}
            </div>
          </div>
        </div>
        
        {/* Live Indicator */}
        <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-red-500/30">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-red-300 font-medium">LIVE</span>
        </div>
      </div>
    </div>
  )
}