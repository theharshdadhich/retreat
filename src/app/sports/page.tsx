import Navigation from '@/components/Navigation'
import { Trophy, Dumbbell, Volleyball } from 'lucide-react'

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Navigation />

      <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
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
            <p className="text-amber-800">Get ready for friendly competition! Whether you’re a pro player or just in for the fun, our team-based matches promise action, laughter, and unforgettable moments on the field.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Dumbbell className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">What to Expect?</h3>
            <p className="text-amber-800">Bring your team spirit, build lasting bonds on the field, and show up in your retreat swag to keep the energy high.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Trophy className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Win Prizes</h3>
            <p className="text-amber-800">It&apos;s not just about glory—it&apos;s about rewards too! From fun goodies to bragging rights, every effort counts.</p>
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
