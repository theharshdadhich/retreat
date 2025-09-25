// 'use client'

// import { useState, useEffect } from 'react'

// interface TimeLeft {
//   days: number
//   hours: number
//   minutes: number
//   seconds: number
// }

// export default function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
    
//     const targetDate = new Date('2025-10-24T00:00:00').getTime()

//     // Calculate initial time immediately
//     const calculateTimeLeft = () => {
//       const now = new Date().getTime()
//       const difference = targetDate - now

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24))
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000)

//         setTimeLeft({ days, hours, minutes, seconds })
//         return true
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//         return false
//       }
//     }

//     // Set initial time immediately
//     calculateTimeLeft()

//     // Then set up the interval for updates
//     const timer = setInterval(() => {
//       calculateTimeLeft()
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   if (!isClient) {
//     return (
//       <div className="flex justify-center space-x-4 sm:space-x-6">
//         {[0, 1, 2, 3].map((i) => (
//           <div key={i} className="bg-white rounded-lg p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] animate-pulse border border-amber-100">
//             <div className="h-8 sm:h-12 bg-amber-100 rounded mb-2"></div>
//             <div className="h-4 bg-amber-100 rounded"></div>
//           </div>
//         ))}
//       </div>
//     )
//   }

//   const timeUnits = [
//     { value: timeLeft.days, label: 'Days' },
//     { value: timeLeft.hours, label: 'Hours' },
//     { value: timeLeft.minutes, label: 'Minutes' },
//     { value: timeLeft.seconds, label: 'Seconds' }
//   ]

//   return (
//     <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 md:space-x-8 gap-2 sm:gap-0">
//       {timeUnits.map((unit, index) => (
//         <div 
//           key={unit.label}
//           className="bg-white rounded-xl p-3 sm:p-6 md:p-8 min-w-[70px] sm:min-w-[100px] md:min-w-[120px] text-center border border-amber-100 shadow-sm flex-1 max-w-[90vw]"
//           style={{ flexBasis: '40%', maxWidth: '120px' }}
//         >
//           <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#4A4A4A] mb-1 sm:mb-2 md:mb-3 tracking-tight">
//             {unit.value.toString().padStart(2, '0')}
//           </div>
//           <div className="text-xs sm:text-sm md:text-base text-[#4A4A4A] font-semibold uppercase tracking-wider">
//             {unit.label}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

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

    calculateTimeLeft()

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
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
      {timeUnits.map((unit) => (
        <div 
          key={unit.label}
          className="bg-white rounded-xl p-4 sm:p-6 md:p-8 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] text-center border border-amber-100 shadow-sm flex flex-col items-center justify-center"
        >
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#4A4A4A] mb-2 sm:mb-3 flex items-center justify-center h-16 sm:h-20 md:h-24 w-full">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-[#4A4A4A] font-semibold uppercase tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  )
}