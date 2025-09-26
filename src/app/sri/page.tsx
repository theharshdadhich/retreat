import Navigation from '@/components/Navigation'
import { Book, Heart, Users, Scissors, Paintbrush, Recycle, Volleyball } from 'lucide-react'

export default function SRIPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Navigation />

      <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Śrī Intiative</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Giving back to the community through meaningful activities that create lasting impact.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Activities</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join us in making a difference through these hands-on community service activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Worksheet Creation */}
            <div className="bg-white rounded-xl shadow-lg p-6 ">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <Book className="text-[#F97316]" />
            </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Education Worksheet Creation</h3>
              <p className="text-gray-600 mb-4">
                Volunteers, working in teams will design and compile interactive worksheet books for kindergarten children. 
                Each participant creates 5–10 pages and each team produces at least two spiral-bound books that foster 
                early learning, cognitive skills, and creativity for underserved students.
              </p>
            </div>

            {/* Bird Feeder Making */}
            <div className="bg-white rounded-xl shadow-lg p-6 ">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <Recycle className="text-[#F97316]" />
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bird Feeder Making</h3>
              <p className="text-gray-600 mb-4">
                Volunteers will join this eco-friendly initiative to craft bird feeders from recycled materials 
                such as plastic bottles, tins, and cardboard. An easy, creative activity that promotes sustainability, 
                reduces waste, and supports biodiversity by encouraging bird life in both urban and rural areas.
              </p>
            </div>

            {/* Cotton Bag Making */}
            <div className="bg-white rounded-xl shadow-lg p-6 ">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <Paintbrush className="text-[#F97316]" />
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cotton Bag Making</h3>
              <p className="text-gray-600 mb-4">
                Volunteers will complete stitching cotton bags (70% pre-stitched) and decorate them with traditional painting. 
                The finished bags will be donated to community or school. An activity that blends creativity with impact, 
                supporting sustainability and empowering underserved communities.
              </p>
            </div>
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