import Navigation from '@/components/Navigation'
import { Music, Sparkles, CalendarHeart } from 'lucide-react'

export default function CulturalNightPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Navigation />

      <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
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
            <p className="text-amber-800">Immerse yourself in the vibrant spirit of Rajasthan with soulful folk music and graceful dance performances that bring its rich culture to life.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Sparkles className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Traditional Attire</h3>
            <p className="text-amber-800">Dress up in ethnic wear and join us in making the day eventful and festive.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <CalendarHeart className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Festive Dinner</h3>
            <p className="text-amber-800">Savor a specially curated feast of regional delicacies and authentic sweets, crafted to give you the true taste of Rajasthan.</p>
          </div>
        </div>
      </section>

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
