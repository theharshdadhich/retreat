'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const targetDate = new Date('2025-10-24T00:00:00').getTime()

    // Calculate initial time immediately
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        return true
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return false
      }
    }

    // Set initial time immediately
    calculateTimeLeft()

    // Then set up the interval for updates
    const timer = setInterval(() => {
      calculateTimeLeft()
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isClient) {
    return (
      <div className="flex justify-center space-x-4 sm:space-x-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] animate-pulse border border-amber-100">
            <div className="h-8 sm:h-12 bg-amber-100 rounded mb-2"></div>
            <div className="h-4 bg-amber-100 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ]

  return (
    <div className="flex justify-center space-x-4 sm:space-x-8">
      {timeUnits.map((unit, index) => (
        <div 
          key={unit.label}
          className="bg-white rounded-xl p-6 sm:p-8 min-w-[100px] sm:min-w-[120px] text-center border border-amber-100 shadow-sm"
        >
          <div className="text-4xl sm:text-6xl font-bold text-[#4A4A4A] mb-2 sm:mb-3 tracking-tight">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm sm:text-base text-[#4A4A4A] font-semibold uppercase tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  )
}