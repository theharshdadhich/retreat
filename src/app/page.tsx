import Navigation from '@/components/Navigation'
import { Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CountdownTimer from '@/components/CountdownTimer'

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-16 min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tan.png" // Your image path
            alt="Scenic landscape of Jaipur"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-orange-900/10"></div>
        </div>
        
        {/* Text content positioned directly in the sky area */}
        <div className="relative z-10 w-full mt-16 md:mt-24 px-4 sm:px-6 lg:px-8">
          <div className="ml-auto w-full md:w-2/3 lg:w-1/2 text-center">
            {/* First part of title at the top */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
            Odyssey 2025
            </h1>
            
            {/* Centered content container */}
            <div className="flex flex-col items-center justify-center mt-4">
              {/* Second part of title */}
              {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight drop-shadow-md text-center">
                Retreat
              </h1> */}
              
              {/* Subtitle */}
              <h2 className="text-2xl md:text-3xl text-amber-100 mb-6 font-medium drop-shadow-md text-center">
              Shaping Tomorrow, Together!
              </h2>
              
              {/* Action Button */}
              <Link 
                href="/itinerary"
                className="bg-white text-amber-800 px-8 py-4 rounded-full text-lg font-semibold 
                            hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 
                            shadow-lg hover:shadow-xl"
                >
                <Calendar size={20} />
                View Itinerary
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your content remains the same */}
      <div className="relative z-10">
        {/* Countdown Timer Section */}
        <section className="py-20 bg-[#FEF6EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Countdown to the Event
              </h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Join us on October 24th, 2025 for an unforgettable experience in the beautiful city of Jaipur
              </p>
            </div>
            
            {/* Countdown Timer Component */}
            <CountdownTimer />
          </div>
        </section>

        {/* Cultural Heritage Section */}
        <section className="py-20 bg-[#FEF6EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Annual Retreat of Ideas and Inspiration
            </h2>
            <p className="text-lg text-black mb-12 max-w-3xl mx-auto">
            A retreat dedicated to growth, culture, and the future we&apos;re building together.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 ring-1 ring-amber-100 shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-2">Hackathons</h3>
                <p className="text-black text-sm">Unleash innovation and creativity through problem-solving challenges</p>
              </div>
              <div className="bg-white rounded-xl p-6 ring-1 ring-amber-100 shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-2">Sports </h3>
                <p className="text-black text-sm">Experience the thrill of competition and team spirit in exciting games</p>
              </div>
              <div className="bg-white rounded-xl p-6 ring-1 ring-amber-100 shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-2">Cultural Night</h3>
                <p className="text-black text-sm">Immerse yourself in vibrant performances, traditions, and celebrations</p>
              </div>
              <div className="bg-white rounded-xl p-6 ring-1 ring-amber-100 shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-2">State of the Union</h3>
                <p className="text-black text-sm">Gain insights and inspiration from thought-provoking talks and discussions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#FEF6EC] text-black py-16 border-t border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Image src="/Asset 8@4x.png" alt="BOT Consulting" width={260} height={60} className="h-14 w-auto" />
              </div>
              <p className="text-black text-lg mb-8">
                Annual Company Retreat 2025 • October 24-26 • Jaipur, Rajasthan
              </p>
              <div className="flex justify-center space-x-8 mb-8">
                <Link href="/about" className="text-black hover:text-amber-900 transition-colors text-lg font-medium">About</Link>
                <Link href="/itinerary" className="text-black hover:text-amber-900 transition-colors text-lg font-medium">Itinerary</Link>
                <Link href="/hackathon" className="text-black hover:text-amber-900 transition-colors text-lg font-medium">Hackathon</Link>
                <Link href="/contact" className="text-black hover:text-amber-900 transition-colors text-lg font-medium">Contact</Link>
              </div>
              <div className="border-t border-amber-300/30 pt-6">
                <p className="text-black">Experience the Royal Heritage • Build • Operate • Transform</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}