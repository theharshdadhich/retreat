import Navigation from '@/components/Navigation'
import { Calendar, Users, Code, Heart, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-[#42C3D6]/10 to-[#42C3D6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#2C2C2C] mb-6">
              BOT Consulting
              <span className="block text-[#42C3D6]">Annual Retreat 2024</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#2C2C2C]/70 mb-8 max-w-3xl mx-auto">
              Join us for an unforgettable 3-day experience filled with innovation, 
              wellness, and celebration. October 24-26, 2024
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/itinerary"
                className="bg-[#42C3D6] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#42C3D6]/90 transition-colors flex items-center justify-center gap-2"
              >
                View Itinerary
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/hackathon"
                className="bg-white text-[#42C3D6] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#42C3D6] hover:bg-[#42C3D6]/10 transition-colors flex items-center justify-center gap-2"
              >
                Hackathon Details
                <Code size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At BOT Consulting, we believe in fostering innovation, collaboration, and personal growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-[#42C3D6]/10">
              <div className="w-16 h-16 bg-[#42C3D6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Wellness & Balance</h3>
              <p className="text-[#2C2C2C]/70">
                Promoting physical and mental well-being through wellness activities and mindful practices
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-[#F16522]/10">
              <div className="w-16 h-16 bg-[#F16522] rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Innovation</h3>
              <p className="text-[#2C2C2C]/70">
                Encouraging creative thinking and problem-solving through hackathons and collaborative projects
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-[#42C3D6]/10">
              <div className="w-16 h-16 bg-[#42C3D6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Team Building</h3>
              <p className="text-[#2C2C2C]/70">
                Strengthening bonds through fun activities, cultural celebrations, and shared experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Special Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes This Retreat Special</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a unique blend of professional development, cultural celebration, and personal growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#42C3D6]/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-[#42C3D6]" size={24} />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">3-Day Experience</h3>
              <p className="text-[#2C2C2C]/70 text-sm">
                Comprehensive schedule from October 24-26 with activities for everyone
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#F16522]/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-[#F16522]" size={24} />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">Hackathon</h3>
              <p className="text-[#2C2C2C]/70 text-sm">
                Collaborative coding challenges with exciting themes and prizes
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#42C3D6]/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-[#42C3D6]" size={24} />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">Cultural Night</h3>
              <p className="text-[#2C2C2C]/70 text-sm">
                Diwali celebration with traditional festivities and cultural activities
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#F16522]/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-[#F16522]" size={24} />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">Wellness Activities</h3>
              <p className="text-[#2C2C2C]/70 text-sm">
                Yoga, meditation, and wellness workshops for mind and body
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#42C3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss out on this incredible opportunity to connect, innovate, and celebrate with the BOT family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/attendees"
              className="bg-white text-[#42C3D6] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Meet the Team
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#42C3D6] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">BOT Consulting</h3>
            <p className="text-white/70 mb-6">
              Annual Company Retreat 2024 • October 24-26
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/itinerary" className="text-white/70 hover:text-white transition-colors">
                Itinerary
              </Link>
              <Link href="/hackathon" className="text-white/70 hover:text-white transition-colors">
                Hackathon
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
