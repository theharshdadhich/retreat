"use client"
import { useState, useRef } from 'react';
import Navigation from '@/components/Navigation'
import { Calendar, Clock, Users, MapPin, Coffee, Utensils, Activity, Filter } from 'lucide-react'

// Updated itinerary data based on the PDF
const itineraryData = [
  {
    day: 1,
    date: 'October 24, Friday',
    activities: [
      {
        time: '10:30 – 12:00',
        title: 'Travel to Resort',
        participants: 'Everyone',
        type: 'travel',
        description: 'Group travel to the retreat venue'
      },
      {
        time: '12:00 – 13:00',
        title: 'Check-In',
        participants: 'Everyone',
        type: 'admin',
        description: 'Hotel check-in and room assignments'
      },
      {
        time: '13:00 – 14:00',
        title: 'Lunch',
        participants: 'Everyone',
        type: 'meal',
        description: 'Lunch at the resort'
      },
      {
        time: '14:15 – 14:30',
        title: 'Welcome Note',
        participants: 'Everyone',
        type: 'meeting',
        description: 'Opening ceremony and retreat overview'
      },
      {
        time: '14:30 – 17:30',
        title: 'Hackathon Prep',
        participants: 'BOT Team',
        type: 'workshop',
        description: 'Team formation and project planning'
      },
      {
        time: '14:30 – 17:30',
        title: 'Fun Workshops',
        participants: 'Kids & Families',
        type: 'activity',
        description: 'Interactive workshops and activities'
      },
      {
        time: '14:30 – 17:30',
        title: 'Board Meeting',
        participants: 'Founders, CAB',
        type: 'meeting',
        description: 'Strategic planning and company updates'
      },
      {
        time: '16:30 – 17:30',
        title: 'High Tea',
        participants: 'Everyone',
        type: 'meal',
        description: 'Afternoon refreshments and networking'
      },
      {
        time: '17:45 – 19:15',
        title: 'Fun Bug Friday',
        participants: 'Everyone',
        type: 'activity',
        description: 'Team building and fun activities'
      },
      {
        time: '19:30 – 22:30',
        title: 'Dinner and Cocktails',
        participants: 'Everyone',
        type: 'meal',
        description: 'Welcome dinner with cocktails and networking'
      }
    ]
  },
  {
    day: 2,
    date: 'October 25, Saturday',
    activities: [
      {
        time: '07:00 – 08:00',
        title: 'Wellness Activity',
        participants: 'Everyone',
        type: 'wellness',
        description: 'Morning yoga and meditation session'
      },
      {
        time: '08:00 – 10:00',
        title: 'Breakfast',
        participants: 'Everyone',
        type: 'meal',
        description: 'Healthy breakfast buffet'
      },
      {
        time: '11:00 – 12:30',
        title: 'Hackathon Presentations',
        participants: 'BOT Team',
        type: 'workshop',
        description: 'Main hackathon competition and coding challenges'
      },
      {
        time: '11:00 – 12:30',
        title: 'Fun Workshops',
        participants: 'Kids & Families',
        type: 'activity',
        description: 'Interactive workshops and activities for children and families'
      },
      {
        time: '12:30 – 14:30',
        title: 'Lunch',
        participants: 'Everyone',
        type: 'meal',
        description: 'Lunch break with team discussions'
      },
      {
        time: '15:00 – 15:40',
        title: 'Fireside Chat',
        participants: 'BOT Team',
        type: 'meeting',
        description: 'Company updates and future roadmap presentation'
      },
      {
        time: '16:00 – 17:00',
        title: 'Give Back - Śrī',
        participants: 'Everyone',
        type: 'meeting',
        description: 'Interactive Q&A session with leadership'
      },
      {
        time: '17:00 – 18:00',
        title: 'High Tea',
        participants: 'Everyone',
        type: 'meal',
        description: 'Afternoon tea and snacks'
      },
      {
        time: '19:15 – 22:30',
        title: 'Cultural Evening',
        participants: 'Everyone',
        type: 'celebration',
        description: 'Cultural performances and entertainment'
      },
      {
        time: '19:15 – 22:30',
        title: 'Annual R&R',
        participants: 'Everyone',
        type: 'celebration',
        description: 'Recognition and rewards ceremony'
      },
      {
        time: '19:15 – 22:30',
        title: 'Diwali Celebration',
        participants: 'Everyone',
        type: 'celebration',
        description: 'Traditional Diwali festivities and cultural activities'
      },
      {
        time: '19:15 – 22:30',
        title: 'Dinner and Cocktails',
        participants: 'Everyone',
        type: 'meal',
        description: 'Dinner with cocktails and networking'
      }
    ]
  },
  {
    day: 3,
    date: 'October 26, Sunday',
    activities: [
      {
        time: '07:00 – 08:00',
        title: 'Sports Activity',
        participants: 'Everyone',
        type: 'activity',
        description: 'Morning sports and fitness activities'
      },
      {
        time: '08:00 – 10:00',
        title: 'Breakfast',
        participants: 'Everyone',
        type: 'meal',
        description: 'Final breakfast together'
      },
      {
        time: '11:00 – 12:00',
        title: 'Check-Out',
        participants: 'Everyone',
        type: 'admin',
        description: 'Hotel check-out and departure preparations'
      },
      {
        time: '12:00 – 13:00',
        title: 'Travel Back',
        participants: 'Everyone',
        type: 'travel',
        description: 'Return journey to office'
      }
    ]
  }
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'meal':
      return <Utensils className="text-[#F16522]" size={20} />
    case 'meeting':
      return <Users className="text-[#F16522]" size={20} />
    case 'workshop':
      return <Activity className="text-[#F16522]" size={20} />
    case 'wellness':
      return <Coffee className="text-[#F16522]" size={20} />
    case 'travel':
      return <MapPin className="text-[#F16522]" size={20} />
    case 'celebration':
      return <Calendar className="text-[#F16522]" size={20} />
    case 'activity':
      return <Activity className="text-[#F16522]" size={20} />
    case 'admin':
      return <Clock className="text-[#F16522]" size={20} />
    default:
      return <Clock className="text-[#F16522]" size={20} />
  }
}

const getParticipantColor = (participants: string) => {
  if (participants.includes('Everyone')) return 'bg-[#EA580C]/20 text-[#EA580C]'
  if (participants.includes('BOT Team')) return 'bg-[#F16522]/20 text-[#F16522]'
  if (participants.includes('Founders')) return 'bg-[#4A4A4A]/20 text-[#4A4A4A]'
  if (participants.includes('Kids')) return 'bg-[#EA580C]/20 text-[#EA580C]'
  if (participants.includes('CAB')) return 'bg-[#4A4A4A]/20 text-[#4A4A4A]'
  return 'bg-[#4A4A4A]/20 text-[#4A4A4A]'
}

// Participant groups for filtering
const participantGroups = [
  { id: 'all', name: 'All Activities' },
  { id: 'botTeam', name: 'BOT Team' },
  { id: 'founders', name: 'Founders, CAB' },
  { id: 'kids', name: 'Kids & Families' }
]

export default function Itinerary() {
  const [activeFilter, setActiveFilter] = useState('all')
  const dayRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToDay = (index: number) => {
    if (typeof window === 'undefined') return
    const el = dayRefs.current[index]
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const filterActivities = (activities: any[]) => {
    if (activeFilter === 'all') return activities
    
    return activities.filter(activity => {
      if (activeFilter === 'everyone') return activity.participants.includes('Everyone')
      if (activeFilter === 'botTeam') return activity.participants.includes('BOT Team') || activity.participants.includes('Everyone')
      if (activeFilter === 'founders') return activity.participants.includes('Founders') || activity.participants.includes('CAB') || activity.participants.includes('Everyone')
      if (activeFilter === 'kids') return activity.participants.includes('Kids') || activity.participants.includes('Everyone')
      return true
    })
  }

  return (
    <main className="min-h-screen bg-orange-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Game Plan
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your playbook for 3 days of big ideas, mindful breaks, 
            </p>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
             and celebrations worth remembering.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter size={20} className="text-[#4A4A4A] mr-2" />
              <span className="font-medium text-[#4A4A4A]">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {participantGroups.map(group => (
                <button
                  key={group.id}
                  onClick={() => setActiveFilter(group.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === group.id
                      ? 'bg-[#F97316] text-white'
                      : 'bg-gray-100 text-[#4A4A4A] hover:bg-gray-200'
                  }`}
                >
                  {group.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day Headers - Clickable on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {itineraryData.map((day, idx) => (
              <div 
                key={day.day} 
                className="text-center bg-white rounded-lg shadow-sm p-4 sm:p-6 cursor-pointer active:scale-[0.98] transition md:cursor-default"
                onClick={() => scrollToDay(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') scrollToDay(idx) }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#4A4A4A] mb-2">
                  Day {day.day}
                </h2>
                <p className="text-sm sm:text-lg text-[#4A4A4A]">{day.date}</p>
              </div>
            ))}
          </div>

          {/* Activities Grid - Different layout for mobile vs desktop */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-6 space-y-8 lg:space-y-0">
            {itineraryData.map((day, dayIndex) => (
              <div 
                key={day.day} 
                className="flex flex-col"
                ref={(el) => { dayRefs.current[dayIndex] = el }}
              >
                {/* Day Label for Mobile - Only show on mobile */}
                <div className="lg:hidden bg-[#F97316] text-white px-4 py-3 rounded-lg text-center font-semibold text-lg mb-6">
                  <h2 className="font-bold">Day {day.day}</h2>
                  <p className="text-white/90">{day.date}</p>
                </div>
                
                {/* Activities Container - Simple column layout for mobile */}
                <div className="space-y-4 sm:space-y-6">
                  {filterActivities(day.activities).map((activity, activityIndex) => (
                    <div 
                      key={activityIndex}
                      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200 lg:hover:scale-105 flex flex-col"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            {getActivityIcon(activity.type)}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col space-y-1 mb-2">
                            <h3 className="text-sm font-semibold text-[#4A4A4A] leading-tight">
                              {activity.title}
                            </h3>
                            <span className="text-xs font-medium text-[#4A4A4A]">
                              {activity.time}
                            </span>
                          </div>
                          
                          <p className="text-xs text-[#4A4A4A] mb-3">
                            {activity.description}
                          </p>
                          
                          <div>
                            {activeFilter === 'all' && (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getParticipantColor(activity.participants)}`}>
                                {activity.participants}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add spacing between days on mobile */}
                {dayIndex < itineraryData.length - 1 && (
                  <div className="lg:hidden mt-8 mb-4 border-t border-orange-200/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-6 text-center">Activity Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3">
              <Utensils className="text-[#F16522]" size={20} />
              <span className="text-[#4A4A4A]">Meals & Refreshments</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="text-[#F16522]" size={20} />
              <span className="text-[#4A4A4A]">Meetings & Sessions</span>
            </div>
            <div className="flex items-center space-x-3">
              <Activity className="text-[#F16522]" size={20} />
              <span className="text-[#4A4A4A]">Workshops & Activities</span>
            </div>
            <div className="flex items-center space-x-3">
              <Coffee className="text-[#F16522]" size={20} />
              <span className="text-[#4A4A4A]">Wellness & Relaxation</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-[#F16522]" size={20} />
              <span className="text-[#4A4A4A]">Travel & Logistics</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-[#F16522]" size={20} />
              <span className="text-[#4A4A4A]">Celebrations & Events</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-[#F16522]" size={20} />
              <span className="text-[#4A4A4A]">Admin & Check-in/out</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A4A4A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">BOT Consulting</h3>
          <p className="text-white/70">
            Annual Company Retreat • October 24-26
          </p>
        </div>
      </footer>
    </main>
  )
}