import Navigation from '@/components/Navigation'
import { Calendar, Clock, Users, MapPin, Coffee, Utensils, Activity } from 'lucide-react'

const itineraryData = [
  {
    day: 1,
    date: 'October 24, Friday',
    activities: [
      {
        time: '07:00 - 08:00',
        title: 'Travel to Resort',
        participants: 'Everyone',
        type: 'travel',
        description: 'Departure from office to the retreat venue'
      },
      {
        time: '08:00 - 10:00',
        title: 'Check-In',
        participants: 'Everyone',
        type: 'admin',
        description: 'Hotel check-in and room assignments'
      },
      {
        time: '10:30 - 12:00',
        title: 'Welcome Note',
        participants: 'Everyone',
        type: 'meeting',
        description: 'Opening ceremony and retreat overview'
      },
      {
        time: '12:00 - 13:00',
        title: 'Lunch',
        participants: 'Everyone',
        type: 'meal',
        description: 'Welcome lunch at the resort'
      },
      {
        time: '13:00 - 14:00',
        title: 'Hackathon Prep',
        participants: 'BOT Team',
        type: 'workshop',
        description: 'Team formation and project planning'
      },
      {
        time: '14:15 - 14:30',
        title: 'Fun Workshops',
        participants: 'Kids & Families',
        type: 'activity',
        description: 'Creative activities for children and families'
      },
      {
        time: '15:00 - 16:00',
        title: 'Board Meeting',
        participants: 'Founders, CAB',
        type: 'meeting',
        description: 'Strategic planning and company updates'
      },
      {
        time: '16:15 - 17:00',
        title: 'High Tea',
        participants: 'Everyone',
        type: 'meal',
        description: 'Afternoon refreshments and networking'
      },
      {
        time: '17:00 - 18:00',
        title: 'Fun Bug Friday',
        participants: 'BOT Team',
        type: 'activity',
        description: 'Team building and fun activities'
      },
      {
        time: '19:15 - 22:30',
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
        time: '07:00 - 08:00',
        title: 'Wellness Activity',
        participants: 'Everyone',
        type: 'wellness',
        description: 'Morning yoga and meditation session'
      },
      {
        time: '08:00 - 10:00',
        title: 'Breakfast',
        participants: 'Everyone',
        type: 'meal',
        description: 'Healthy breakfast buffet'
      },
      {
        time: '10:30 - 12:00',
        title: 'Hackathon',
        participants: 'BOT Team',
        type: 'workshop',
        description: 'Main hackathon competition and coding challenges'
      },
      {
        time: '11:00 - 12:00',
        title: 'Fun Workshops',
        participants: 'Kids & Families',
        type: 'activity',
        description: 'Interactive workshops and activities'
      },
      {
        time: '12:00 - 13:00',
        title: 'Lunch',
        participants: 'Everyone',
        type: 'meal',
        description: 'Lunch break with team discussions'
      },
      {
        time: '13:00 - 14:00',
        title: 'State of the Union',
        participants: 'Everyone',
        type: 'meeting',
        description: 'Company updates and future roadmap presentation'
      },
      {
        time: '14:30 - 17:30',
        title: 'Fireside Chat',
        participants: 'Everyone',
        type: 'meeting',
        description: 'Interactive Q&A session with leadership'
      },
      {
        time: '16:30 - 17:30',
        title: 'High Tea',
        participants: 'Everyone',
        type: 'meal',
        description: 'Afternoon tea and snacks'
      },
      {
        time: '17:45 - 18:45',
        title: 'Diwali Celebration',
        participants: 'Everyone',
        type: 'celebration',
        description: 'Traditional Diwali festivities and cultural activities'
      },
      {
        time: '19:30 - 22:30',
        title: 'Cultural Evening',
        participants: 'Everyone',
        type: 'celebration',
        description: 'Cultural performances and dinner'
      }
    ]
  },
  {
    day: 3,
    date: 'October 26, Sunday',
    activities: [
      {
        time: '07:00 - 08:00',
        title: 'Sports Activity',
        participants: 'Everyone',
        type: 'activity',
        description: 'Morning sports and fitness activities'
      },
      {
        time: '08:00 - 10:00',
        title: 'Breakfast',
        participants: 'Everyone',
        type: 'meal',
        description: 'Final breakfast together'
      },
      {
        time: '10:00 - 11:00',
        title: 'Check-Out',
        participants: 'Everyone',
        type: 'admin',
        description: 'Hotel check-out and departure preparations'
      },
      {
        time: '11:00 - 12:00',
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
      return <Users className="text-[#42C3D6]" size={20} />
    case 'workshop':
      return <Activity className="text-[#F16522]" size={20} />
    case 'wellness':
      return <Coffee className="text-[#42C3D6]" size={20} />
    case 'travel':
      return <MapPin className="text-[#2C2C2C]" size={20} />
    case 'celebration':
      return <Calendar className="text-[#F16522]" size={20} />
    case 'activity':
      return <Activity className="text-[#42C3D6]" size={20} />
    case 'admin':
      return <Clock className="text-[#2C2C2C]" size={20} />
    default:
      return <Clock className="text-[#2C2C2C]" size={20} />
  }
}

const getParticipantColor = (participants: string) => {
  if (participants.includes('Everyone')) return 'bg-[#42C3D6]/20 text-[#42C3D6]'
  if (participants.includes('BOT Team')) return 'bg-[#F16522]/20 text-[#F16522]'
  if (participants.includes('Founders')) return 'bg-[#2C2C2C]/20 text-[#2C2C2C]'
  if (participants.includes('Kids')) return 'bg-[#42C3D6]/20 text-[#42C3D6]'
  return 'bg-[#2C2C2C]/20 text-[#2C2C2C]'
}

export default function Itinerary() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#42C3D6] to-[#42C3D6]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Retreat Itinerary
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A comprehensive 3-day schedule filled with innovation, wellness, and celebration
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {itineraryData.map((day, dayIndex) => (
            <div key={day.day} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Day {day.day}
                </h2>
                <p className="text-xl text-gray-600">{day.date}</p>
              </div>
              
              <div className="space-y-6">
                {day.activities.map((activity, activityIndex) => (
                  <div 
                    key={activityIndex}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          {getActivityIcon(activity.type)}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {activity.title}
                          </h3>
                          <span className="text-sm font-medium text-gray-500">
                            {activity.time}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">
                          {activity.description}
                        </p>
                        
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getParticipantColor(activity.participants)}`}>
                            {activity.participants}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legend */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Activity Types</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <Utensils className="text-[#F16522]" size={20} />
                <span className="text-[#2C2C2C]">Meals & Refreshments</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-[#42C3D6]" size={20} />
                <span className="text-[#2C2C2C]">Meetings & Sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Activity className="text-[#F16522]" size={20} />
                <span className="text-[#2C2C2C]">Workshops & Activities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="text-[#42C3D6]" size={20} />
                <span className="text-[#2C2C2C]">Wellness & Relaxation</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#2C2C2C]" size={20} />
                <span className="text-[#2C2C2C]">Travel & Logistics</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-[#F16522]" size={20} />
                <span className="text-[#2C2C2C]">Celebrations & Events</span>
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">BOT Consulting</h3>
          <p className="text-white/70">
            Annual Company Retreat 2024 • October 24-26
          </p>
        </div>
      </footer>
    </main>
  )
}
