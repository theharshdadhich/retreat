import Navigation from '@/components/Navigation'
import { Trophy, Dumbbell, Volleyball } from 'lucide-react'

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Navigation />

      <section className="pt-16 bg-gradient-to-r from-[#FF4400] to-[#FF6A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sports Activity</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Team spirit, friendly competition, and lots of fun with curated games and activities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Volleyball className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Team Matches</h3>
            <p className="text-amber-800">Volleyball, football, and relay games to build collaboration and energy.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Dumbbell className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Fitness Challenges</h3>
            <p className="text-amber-800">Fun obstacle courses and strength challenges for all fitness levels.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Trophy className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Awards & Recognition</h3>
            <p className="text-amber-800">Celebrate team spirit with medals and shout-outs for standout performances.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70">Part of the BOT Consulting Annual Retreat 2025</p>
        </div>
      </footer>
    </main>
  )
}
