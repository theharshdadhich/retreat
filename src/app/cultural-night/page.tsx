import Navigation from '@/components/Navigation'
import { Music, Sparkles, CalendarHeart } from 'lucide-react'

export default function CulturalNightPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Navigation />

      <section className="pt-16 bg-gradient-to-r from-[#FF4400] to-[#FF6A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cultural Night</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            An evening of music, dance, and celebration to honor traditions and togetherness.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Music className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Live Performances</h3>
            <p className="text-amber-800">Enjoy folk music and dance highlighting the rich culture of Rajasthan.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Sparkles className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Traditional Attire</h3>
            <p className="text-amber-800">Dress up in ethnic wear; best-dressed recognitions and photo booths.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <CalendarHeart className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Festive Dinner</h3>
            <p className="text-amber-800">Relish a curated menu of regional specialties and sweets.</p>
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
