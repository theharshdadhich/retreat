import Navigation from '@/components/Navigation'
import { Target, Users, Award, TrendingUp, Heart, Lightbulb, Shield, Globe } from 'lucide-react'

const companyValues = [
  {
    icon: <Lightbulb className="text-[#F16522]" size={32} />,
    title: 'AI Precision',
    description: 'Leveraging cutting-edge AI to deliver data-driven insights and optimized GDC operations.'
  },
  {
    icon: <Users className="text-[#42C3D6]" size={32} />,
    title: 'Culture-First Talent',
    description: 'Building culturally aligned teams that thrive on innovation and collaboration.'
  },
  {
    icon: <Heart className="text-[#F16522]" size={32} />,
    title: 'Venture-Scale Impact',
    description: 'Delivering startup-like agility with enterprise-level results and scalability.'
  },
  {
    icon: <Target className="text-[#42C3D6]" size={32} />,
    title: 'Founders Playbook',
    description: 'Applying proven methodologies to build, operate, and transfer high-value GDCs.'
  }
]

const achievements = [
  {
    year: '2025',
    title: 'Odyssey 2025',
    description: 'Annual retreat celebrating the Build-Operate-Transfer journey with BOTians, leaders, clients, and partners.'
  },
  {
    year: '2024',
    title: 'Venture Studio Launch',
    description: 'Officially launched as a Venture Studio for GDCs, scaling high-performance delivery centers.'
  },
  {
    year: '2023',
    title: 'Ripper Mascot Introduction',
    description: 'Introduced Ripper as our mascot, embodying our bold, curious, and resilient spirit.'
  },
  {
    year: '2022',
    title: 'GDC Framework Established',
    description: 'Developed our proprietary Build-Operate-Transfer methodology for global delivery centers.'
  }
]

const teamMembers = [
  {
    name: "Manpreet Singh",
    role: "CEO, Co-Founder",
    image: "/images/about/team/manpreet.webp"
  },
  {
    name: "Deepali Puri",
    role: "Co-Founder",
    image: "/images/about/team/deepali.webp"
  },
  {
    name: "Daminder Kaur",
    role: "Director - Śrī",
    image: "/images/about/team/daminder.webp"
  },
  {
    name: "Abhinav Gehlot",
    role: "Director - Software Engineering",
    image: "/images/about/team/abhinav.webp"
  },
  {
    name: "Ajai Pal Singh",
    role: "Director - Integrations & Analytics",
    image: "/images/about/team/ajai.webp"
  },
  {
    name: "Mitul Vyas",
    role: "Director - Data Engineering & Analytics",
    image: "/images/about/team/mitul.webp"
  },
  {
    name: "Niharika Nagrath",
    role: "General Counsel",
    image: "/images/about/team/niharika.webp"
  },
  {
    name: "Saloni G Sharma",
    role: "Director - Digital Workflow Enterprise",
    image: "/images/about/team/saloni.webp"
  },
  {
    name: "Sulok Sharma",
    role: "Director - Finance & Operations",
    image: "/images/about/team/sulok.webp"
  }
]

const cabMembers = [
  {
    name: "Chris Barbin",
    company: "Tercera",
    image: "/images/about/cab/chris.webp"
  },
  {
    name: "Lisa Burton",
    company: "Tercera",
    image: "/images/about/cab/lisa.webp"
  },
  {
    name: "Michelle Swan",
    company: "Tercera",
    image: "/images/about/cab/michelle.webp"
  },
  {
    name: "Erik Duffield",
    company: "Hakkoda",
    image: "/images/about/cab/erik.webp"
  },
  {
    name: "Glenn Weinstein",
    company: "Cloudsmith",
    image: "/images/about/cab/glenn.webp"
  },
  {
    name: "Nick Peacock",
    company: "Cloudsmith",
    image: "/images/about/cab/nick.webp"
  },
  {
    name: "Colin Moynes",
    company: "Cloudsmith",
    image: "/images/about/cab/colin.webp"
  },
  {
    name: "Christian H Jensen",
    company: "Agentic First",
    image: "/images/about/cab/christian.webp"
  },
  {
    name: "Jacob Moller",
    company: "Agentic First",
    image: "/images/about/cab/jacob.webp"
  }
]


export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A Venture Studio for GDCs - We build, operate, and transfer high value GDCs as venture-scale assets!
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                BOT Consulting is a Venture Studio for GDCs - We build, operate, and transfer high-value GDCs as venture-scale assets! 
                Combining AI precision, culture-first talent, and our founders playbook to deliver startup-like agility with enterprise impact.
              </p>
              <p className="text-lg text-gray-600">
                We help global technology leaders build and scale high-performance Global Delivery Centers (GDCs) in record time. 
                With our expertise, we minimize the risk and complexity of global expansion, enabling your organization to accelerate innovation and growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#42C3D6]/10 to-[#42C3D6]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Our Mission</h3>
              <p className="text-[#2C2C2C]/70 mb-6">
                Our mission is to build high-performing Global Delivery Centers (GDCs) for the most ambitious tech companies, 
                combining tailored consulting, cutting-edge tech stacks, and startup-like agility. Through our venture studio model, 
                we assemble culturally aligned, innovation-driven teams that accelerate business outcomes.
              </p>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Our Vision</h3>
              <p className="text-[#2C2C2C]/70">
                Our vision is to transform how the world scales: faster, smarter, and with purpose. By reimagining Global Delivery Centers 
                as agile, innovation hubs, not back offices, we help businesses unlock speed-to-market, cultural cohesion, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Odyssey Section */}
      <section className="py-16 bg-gradient-to-r from-[#42C3D6]/10 to-[#F16522]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Odyssey: The BOT Way</h2>
              <p className="text-lg text-gray-600 mb-6">
              Odyssey is not just our annual retreat — it&apos;s our philosophy of the Build–Operate–Transfer journey. Just like an odyssey, every GDC engagement is a shared journey of growth, transformation, and discovery.
              </p>
              <p className="text-lg text-gray-600">
                At Odyssey 2025, we come together to celebrate this journey — bringing BOTians, leaders, clients, 
                and partners into one shared space of innovation and culture.
              </p>
            </div>
            <div className="text-center">
              {/* Ripper mascot image - Fixed to show full image */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/images/about/mascot.png" 
                  alt="Ripper Mascot"
                  className="rounded-lg max-h-80 w-auto object-contain" // Changed to object-contain and max-h-80
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mt-4 mb-2">Meet Ripper</h3>
              <p className="text-[#2C2C2C]/70">
                Ripper, our mascot, represents the spirit of BOT's venture studio approach — bold, curious, and resilient. 
                Much like our Build – Operate – Transfer model, Ripper embodies progress, adaptability, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR TEAM</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the leadership driving our venture studio forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Focus on the top part of the image to show heads */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top" // Added object-top
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAB & Distinguished Guests */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR CAB & DISTINGUISHED GUESTS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry leaders and advisors who guide our strategic direction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cabMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A4A4A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">BOT Consulting</h3>
          <p className="text-white/70">
            Annual Company Retreat 2025 • October 24-26
          </p>
        </div>
      </footer>
    </main>
  )
}

