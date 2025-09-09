// import Navigation from '@/components/Navigation'
// import { Users, Crown, Star, Heart, Building, User, Mail, Linkedin } from 'lucide-react'

// const attendeesData = {
//   founders: [
//     {
//       name: 'John Smith',
//       role: 'CEO & Founder',
//       department: 'Leadership',
//       image: '/api/placeholder/150/150',
//       bio: 'Visionary leader with 15+ years of experience in consulting and technology.',
//       email: 'john.smith@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/johnsmith'
//     },
//     {
//       name: 'Sarah Johnson',
//       role: 'CTO & Co-Founder',
//       department: 'Leadership',
//       image: '/api/placeholder/150/150',
//       bio: 'Technology expert driving innovation and digital transformation initiatives.',
//       email: 'sarah.johnson@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/sarahjohnson'
//     }
//   ],
//   cab: [
//     {
//       name: 'Michael Chen',
//       role: 'Chief Strategy Officer',
//       department: 'Strategy',
//       image: '/api/placeholder/150/150',
//       bio: 'Strategic advisor with expertise in business development and market expansion.',
//       email: 'michael.chen@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/michaelchen'
//     },
//     {
//       name: 'Emily Davis',
//       role: 'Chief Financial Officer',
//       department: 'Finance',
//       image: '/api/placeholder/150/150',
//       bio: 'Financial expert ensuring sustainable growth and operational excellence.',
//       email: 'emily.davis@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/emilydavis'
//     }
//   ],
//   botTeam: [
//     {
//       name: 'Alex Rodriguez',
//       role: 'Senior Consultant',
//       department: 'Technology',
//       image: '/api/placeholder/150/150',
//       bio: 'Full-stack developer and solution architect with expertise in modern technologies.',
//       email: 'alex.rodriguez@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/alexrodriguez'
//     },
//     {
//       name: 'Priya Patel',
//       role: 'Business Analyst',
//       department: 'Analytics',
//       image: '/api/placeholder/150/150',
//       bio: 'Data-driven analyst specializing in business process optimization.',
//       email: 'priya.patel@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/priyapatel'
//     },
//     {
//       name: 'David Kim',
//       role: 'Project Manager',
//       department: 'Operations',
//       image: '/api/placeholder/150/150',
//       bio: 'Experienced project manager delivering successful client engagements.',
//       email: 'david.kim@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/davidkim'
//     },
//     {
//       name: 'Lisa Wang',
//       role: 'UX Designer',
//       department: 'Design',
//       image: '/api/placeholder/150/150',
//       bio: 'Creative designer focused on user experience and interface design.',
//       email: 'lisa.wang@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/lisawang'
//     },
//     {
//       name: 'Robert Taylor',
//       role: 'DevOps Engineer',
//       department: 'Technology',
//       image: '/api/placeholder/150/150',
//       bio: 'Infrastructure expert ensuring reliable and scalable systems.',
//       email: 'robert.taylor@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/roberttaylor'
//     },
//     {
//       name: 'Maria Garcia',
//       role: 'Marketing Specialist',
//       department: 'Marketing',
//       image: '/api/placeholder/150/150',
//       bio: 'Marketing professional driving brand awareness and client acquisition.',
//       email: 'maria.garcia@botconsulting.com',
//       linkedin: 'https://linkedin.com/in/mariagarcia'
//     }
//   ],
//   guestSpeakers: [
//     {
//       name: 'Dr. James Wilson',
//       role: 'Industry Expert',
//       organization: 'Tech Innovation Institute',
//       image: '/api/placeholder/150/150',
//       bio: 'Renowned technology consultant and thought leader in digital transformation.',
//       email: 'james.wilson@techinnovation.org',
//       linkedin: 'https://linkedin.com/in/jameswilson'
//     },
//     {
//       name: 'Jennifer Lee',
//       role: 'Wellness Coach',
//       organization: 'Mindful Living Center',
//       image: '/api/placeholder/150/150',
//       bio: 'Certified wellness coach specializing in corporate wellness and mindfulness.',
//       email: 'jennifer.lee@mindfulliving.com',
//       linkedin: 'https://linkedin.com/in/jenniferlee'
//     }
//   ],
//   families: [
//     {
//       name: 'Family Members',
//       role: 'Guests',
//       department: 'Family',
//       image: '/api/placeholder/150/150',
//       bio: 'Spouses, children, and family members joining us for the retreat experience.',
//       email: 'families@botconsulting.com',
//       linkedin: null
//     }
//   ]
// }

// const AttendeeCard = ({ attendee, type }: { attendee: any, type: string }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//       <div className="text-center">
//         <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
//           <User className="text-gray-500" size={40} />
//         </div>
        
//         <h3 className="text-xl font-semibold text-gray-900 mb-1">
//           {attendee.name}
//         </h3>
        
//         <p className="text-[#42C3D6] font-medium mb-2">
//           {attendee.role}
//         </p>
        
//         {attendee.organization && (
//           <p className="text-[#2C2C2C]/70 text-sm mb-3">
//             {attendee.organization}
//           </p>
//         )}
        
//         <p className="text-[#2C2C2C]/70 text-sm mb-4">
//           {attendee.bio}
//         </p>
        
//         <div className="flex justify-center space-x-3">
//           <a 
//             href={`mailto:${attendee.email}`}
//             className="text-[#2C2C2C]/50 hover:text-[#42C3D6] transition-colors"
//           >
//             <Mail size={20} />
//           </a>
//           {attendee.linkedin && (
//             <a 
//               href={attendee.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#2C2C2C]/50 hover:text-[#42C3D6] transition-colors"
//             >
//               <Linkedin size={20} />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Attendees() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <Navigation />
      
//       {/* Header */}
//       <section className="pt-16 bg-gradient-to-r from-[#42C3D6] to-[#F16522]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//               Meet Our Team
//             </h1>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               The amazing people who make BOT Consulting special
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Founders Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center mb-4">
//               <Crown className="text-[#F16522] mr-3" size={32} />
//               <h2 className="text-3xl font-bold text-[#2C2C2C]">Founders & Leadership</h2>
//             </div>
//             <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
//               The visionary leaders who founded and guide BOT Consulting
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {attendeesData.founders.map((founder, index) => (
//               <AttendeeCard key={index} attendee={founder} type="founder" />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CAB Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center mb-4">
//               <Star className="text-[#42C3D6] mr-3" size={32} />
//               <h2 className="text-3xl font-bold text-[#2C2C2C]">Chief Advisory Board (CAB)</h2>
//             </div>
//             <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
//               Strategic advisors providing guidance and expertise
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {attendeesData.cab.map((member, index) => (
//               <AttendeeCard key={index} attendee={member} type="cab" />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BOT Team Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center mb-4">
//               <Building className="text-[#42C3D6] mr-3" size={32} />
//               <h2 className="text-3xl font-bold text-[#2C2C2C]">BOT Team</h2>
//             </div>
//             <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
//               Our talented professionals who deliver exceptional results
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {attendeesData.botTeam.map((member, index) => (
//               <AttendeeCard key={index} attendee={member} type="team" />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Guest Speakers Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center mb-4">
//               <Users className="text-[#F16522] mr-3" size={32} />
//               <h2 className="text-3xl font-bold text-[#2C2C2C]">Guest Speakers</h2>
//             </div>
//             <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
//               Special guests sharing their expertise and insights
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {attendeesData.guestSpeakers.map((speaker, index) => (
//               <AttendeeCard key={index} attendee={speaker} type="speaker" />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Families Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center mb-4">
//               <Heart className="text-[#42C3D6] mr-3" size={32} />
//               <h2 className="text-3xl font-bold text-[#2C2C2C]">Family Members</h2>
//             </div>
//             <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
//               Spouses, children, and family members joining our retreat
//             </p>
//           </div>
          
//           <div className="max-w-2xl mx-auto">
//             <AttendeeCard attendee={attendeesData.families[0]} type="family" />
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-[#42C3D6]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-white mb-8">Retreat Statistics</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               <div>
//                 <div className="text-4xl font-bold text-white mb-2">2</div>
//                 <div className="text-white/90">Founders</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-white mb-2">2</div>
//                 <div className="text-white/90">CAB Members</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-white mb-2">6</div>
//                 <div className="text-white/90">Team Members</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-white mb-2">2</div>
//                 <div className="text-white/90">Guest Speakers</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#2C2C2C] text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h3 className="text-2xl font-bold mb-4">BOT Consulting</h3>
//           <p className="text-white/70">
//             Annual Company Retreat 2024 • October 24-26
//           </p>
//         </div>
//       </footer>
//     </main>
//   )
// }


import Navigation from '@/components/Navigation'
import { Users, Crown, Star, Heart, Building, User, Mail, Linkedin } from 'lucide-react'

interface Attendee {
  name: string
  role: string
  department?: string
  organization?: string
  image: string
  bio: string
  email: string
  linkedin: string | null
}

const attendeesData = {
  founders: [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      department: 'Leadership',
      image: '/api/placeholder/150/150',
      bio: 'Visionary leader with 15+ years of experience in consulting and technology.',
      email: 'john.smith@botconsulting.com',
      linkedin: 'https://linkedin.com/in/johnsmith'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-Founder',
      department: 'Leadership',
      image: '/api/placeholder/150/150',
      bio: 'Technology expert driving innovation and digital transformation initiatives.',
      email: 'sarah.johnson@botconsulting.com',
      linkedin: 'https://linkedin.com/in/sarahjohnson'
    }
  ],
  cab: [
    {
      name: 'Michael Chen',
      role: 'Chief Strategy Officer',
      department: 'Strategy',
      image: '/api/placeholder/150/150',
      bio: 'Strategic advisor with expertise in business development and market expansion.',
      email: 'michael.chen@botconsulting.com',
      linkedin: 'https://linkedin.com/in/michaelchen'
    },
    {
      name: 'Emily Davis',
      role: 'Chief Financial Officer',
      department: 'Finance',
      image: '/api/placeholder/150/150',
      bio: 'Financial expert ensuring sustainable growth and operational excellence.',
      email: 'emily.davis@botconsulting.com',
      linkedin: 'https://linkedin.com/in/emilydavis'
    }
  ],
  botTeam: [
    {
      name: 'Alex Rodriguez',
      role: 'Senior Consultant',
      department: 'Technology',
      image: '/api/placeholder/150/150',
      bio: 'Full-stack developer and solution architect with expertise in modern technologies.',
      email: 'alex.rodriguez@botconsulting.com',
      linkedin: 'https://linkedin.com/in/alexrodriguez'
    },
    {
      name: 'Priya Patel',
      role: 'Business Analyst',
      department: 'Analytics',
      image: '/api/placeholder/150/150',
      bio: 'Data-driven analyst specializing in business process optimization.',
      email: 'priya.patel@botconsulting.com',
      linkedin: 'https://linkedin.com/in/priyapatel'
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      department: 'Operations',
      image: '/api/placeholder/150/150',
      bio: 'Experienced project manager delivering successful client engagements.',
      email: 'david.kim@botconsulting.com',
      linkedin: 'https://linkedin.com/in/davidkim'
    },
    {
      name: 'Lisa Wang',
      role: 'UX Designer',
      department: 'Design',
      image: '/api/placeholder/150/150',
      bio: 'Creative designer focused on user experience and interface design.',
      email: 'lisa.wang@botconsulting.com',
      linkedin: 'https://linkedin.com/in/lisawang'
    },
    {
      name: 'Robert Taylor',
      role: 'DevOps Engineer',
      department: 'Technology',
      image: '/api/placeholder/150/150',
      bio: 'Infrastructure expert ensuring reliable and scalable systems.',
      email: 'robert.taylor@botconsulting.com',
      linkedin: 'https://linkedin.com/in/roberttaylor'
    },
    {
      name: 'Maria Garcia',
      role: 'Marketing Specialist',
      department: 'Marketing',
      image: '/api/placeholder/150/150',
      bio: 'Marketing professional driving brand awareness and client acquisition.',
      email: 'maria.garcia@botconsulting.com',
      linkedin: 'https://linkedin.com/in/mariagarcia'
    }
  ],
  guestSpeakers: [
    {
      name: 'Dr. James Wilson',
      role: 'Industry Expert',
      organization: 'Tech Innovation Institute',
      image: '/api/placeholder/150/150',
      bio: 'Renowned technology consultant and thought leader in digital transformation.',
      email: 'james.wilson@techinnovation.org',
      linkedin: 'https://linkedin.com/in/jameswilson'
    },
    {
      name: 'Jennifer Lee',
      role: 'Wellness Coach',
      organization: 'Mindful Living Center',
      image: '/api/placeholder/150/150',
      bio: 'Certified wellness coach specializing in corporate wellness and mindfulness.',
      email: 'jennifer.lee@mindfulliving.com',
      linkedin: 'https://linkedin.com/in/jenniferlee'
    }
  ],
  families: [
    {
      name: 'Family Members',
      role: 'Guests',
      department: 'Family',
      image: '/api/placeholder/150/150',
      bio: 'Spouses, children, and family members joining us for the retreat experience.',
      email: 'families@botconsulting.com',
      linkedin: null
    }
  ]
}

const AttendeeCard = ({ attendee }: { attendee: Attendee }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="text-gray-500" size={40} />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {attendee.name}
        </h3>
        
        <p className="text-[#42C3D6] font-medium mb-2">
          {attendee.role}
        </p>
        
        {attendee.organization && (
          <p className="text-[#2C2C2C]/70 text-sm mb-3">
            {attendee.organization}
          </p>
        )}
        
        <p className="text-[#2C2C2C]/70 text-sm mb-4">
          {attendee.bio}
        </p>
        
        <div className="flex justify-center space-x-3">
          <a 
            href={`mailto:${attendee.email}`}
            className="text-[#2C2C2C]/50 hover:text-[#42C3D6] transition-colors"
          >
            <Mail size={20} />
          </a>
          {attendee.linkedin && (
            <a 
              href={attendee.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C2C2C]/50 hover:text-[#42C3D6] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Attendees() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#42C3D6] to-[#F16522]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              The amazing people who make BOT Consulting special
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Crown className="text-[#F16522] mr-3" size={32} />
              <h2 className="text-3xl font-bold text-[#2C2C2C]">Founders & Leadership</h2>
            </div>
            <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
              The visionary leaders who founded and guide BOT Consulting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {attendeesData.founders.map((founder, index) => (
              <AttendeeCard key={index} attendee={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* CAB Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="text-[#42C3D6] mr-3" size={32} />
              <h2 className="text-3xl font-bold text-[#2C2C2C]">Chief Advisory Board (CAB)</h2>
            </div>
            <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Strategic advisors providing guidance and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {attendeesData.cab.map((member, index) => (
              <AttendeeCard key={index} attendee={member} />
            ))}
          </div>
        </div>
      </section>

      {/* BOT Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Building className="text-[#42C3D6] mr-3" size={32} />
              <h2 className="text-3xl font-bold text-[#2C2C2C]">BOT Team</h2>
            </div>
            <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Our talented professionals who deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attendeesData.botTeam.map((member, index) => (
              <AttendeeCard key={index} attendee={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Guest Speakers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-[#F16522] mr-3" size={32} />
              <h2 className="text-3xl font-bold text-[#2C2C2C]">Guest Speakers</h2>
            </div>
            <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Special guests sharing their expertise and insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {attendeesData.guestSpeakers.map((speaker, index) => (
              <AttendeeCard key={index} attendee={speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Families Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-[#42C3D6] mr-3" size={32} />
              <h2 className="text-3xl font-bold text-[#2C2C2C]">Family Members</h2>
            </div>
            <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Spouses, children, and family members joining our retreat
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <AttendeeCard attendee={attendeesData.families[0]} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#42C3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Retreat Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-white/90">Founders</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-white/90">CAB Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6</div>
                <div className="text-white/90">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-white/90">Guest Speakers</div>
              </div>
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