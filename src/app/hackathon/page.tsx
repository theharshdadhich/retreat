import Navigation from '@/components/Navigation'
import { Trophy, Users, Clock, Award, CheckCircle } from 'lucide-react'

const hackathonThemes = [
  {
    id: 1,
    title: 'AI-Powered Business Solutions',
    description: 'Develop innovative AI solutions to solve real business challenges. Focus on automation, predictive analytics, or intelligent decision-making systems.',
    category: 'Artificial Intelligence',
    difficulty: 'Advanced',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
    prizes: ['1st Place: $2000', '2nd Place: $1000', '3rd Place: $500']
  },
  {
    id: 2,
    title: 'Sustainable Technology',
    description: 'Create applications that promote sustainability and environmental consciousness. Think green tech, carbon footprint tracking, or eco-friendly solutions.',
    category: 'Sustainability',
    difficulty: 'Intermediate',
    techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    prizes: ['1st Place: $1500', '2nd Place: $750', '3rd Place: $300']
  },
  {
    id: 3,
    title: 'Digital Wellness Platform',
    description: 'Build tools that promote mental health and work-life balance. Focus on mindfulness, productivity, or stress management applications.',
    category: 'Health & Wellness',
    difficulty: 'Beginner',
    techStack: ['React Native', 'Firebase', 'Node.js'],
    prizes: ['1st Place: $1200', '2nd Place: $600', '3rd Place: $250']
  },
  {
    id: 4,
    title: 'Smart City Solutions',
    description: 'Develop applications for smart city infrastructure, transportation, or community engagement. Focus on IoT, data visualization, or civic tech.',
    category: 'Smart Cities',
    difficulty: 'Advanced',
    techStack: ['Python', 'IoT', 'React', 'PostgreSQL'],
    prizes: ['1st Place: $1800', '2nd Place: $900', '3rd Place: $400']
  }
]

const hackathonRules = [
  {
    title: 'Team Formation',
    rules: [
      'Teams must consist of 2-4 members',
      'Cross-functional teams are encouraged',
      'Teams will be assigned randomly if needed'
    ]
  },
  {
    title: 'Development Guidelines',
    rules: [
      'All code must be original and written during the hackathon',
      'Open-source libraries and APIs are allowed',
      'No pre-built solutions or templates',
      'Code must be well-documented'
    ]
  },
  {
    title: 'Submission Requirements',
    rules: [
      'Working prototype or MVP',
      '5-minute presentation',
      'GitHub repository with README',
      'Demo video (optional but recommended)'
    ]
  },
  {
    title: 'Judging Criteria',
    rules: [
      'Innovation and creativity (30%)',
      'Technical implementation (25%)',
      'Business potential (20%)',
      'User experience (15%)',
      'Presentation quality (10%)'
    ]
  }
]

const judgingPanel = [
  {
    name: 'Dr. James Wilson',
    role: 'Technology Innovation Expert',
    organization: 'Tech Innovation Institute',
    expertise: 'AI/ML, Digital Transformation',
    bio: 'Renowned technology consultant with 20+ years of experience in emerging technologies.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & Co-Founder',
    organization: 'BOT Consulting',
    expertise: 'Software Architecture, Product Development',
    bio: 'Technology leader driving innovation and digital transformation initiatives.'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Strategy Officer',
    organization: 'BOT Consulting',
    expertise: 'Business Strategy, Market Analysis',
    bio: 'Strategic advisor with deep understanding of business potential and market fit.'
  },
  {
    name: 'Lisa Wang',
    role: 'UX Designer',
    organization: 'BOT Consulting',
    expertise: 'User Experience, Design Thinking',
    bio: 'Creative designer focused on user-centered design and product usability.'
  }
]

const timeline = [
  {
    time: 'Day 1 - 13:00',
    event: 'Hackathon Kickoff',
    description: 'Theme announcement, team formation, and project planning'
  },
  {
    time: 'Day 1 - 14:00',
    event: 'Development Begins',
    description: 'Start coding and building your innovative solution'
  },
  {
    time: 'Day 2 - 10:30',
    event: 'Main Hackathon',
    description: 'Intensive coding session with mentorship available'
  },
  {
    time: 'Day 2 - 16:00',
    event: 'Submission Deadline',
    description: 'All projects must be submitted with documentation'
  },
  {
    time: 'Day 2 - 17:00',
    event: 'Presentations',
    description: 'Teams present their solutions to the judging panel'
  },
  {
    time: 'Day 2 - 18:00',
    event: 'Awards Ceremony',
    description: 'Winners announced and prizes awarded'
  }
]

export default function Hackathon() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#F16522] to-[#42C3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              BOT Hackathon 2024
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Innovate. Create. Transform. Build the future with cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Hackathon Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hackathon Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for an exciting 24-hour coding challenge where teams will develop innovative 
              solutions to real-world problems. Showcase your skills, learn from peers, and win amazing prizes!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-[#42C3D6]/10">
              <div className="w-16 h-16 bg-[#42C3D6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">24 Hours</h3>
              <p className="text-[#2C2C2C]/70">
                Intense coding session with breaks for meals and networking
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-[#F16522]/10">
              <div className="w-16 h-16 bg-[#F16522] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">2-4 Members</h3>
              <p className="text-[#2C2C2C]/70">
                Cross-functional teams working together to solve challenges
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-[#42C3D6]/10">
              <div className="w-16 h-16 bg-[#42C3D6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">$5000+ Prizes</h3>
              <p className="text-[#2C2C2C]/70">
                Amazing rewards for the most innovative and impactful solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Themes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hackathon Themes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from these exciting themes and build something amazing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {hackathonThemes.map((theme) => (
              <div key={theme.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{theme.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    theme.difficulty === 'Advanced' ? 'bg-[#F16522]/20 text-[#F16522]' :
                    theme.difficulty === 'Intermediate' ? 'bg-[#42C3D6]/20 text-[#42C3D6]' :
                    'bg-[#2C2C2C]/20 text-[#2C2C2C]'
                  }`}>
                    {theme.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{theme.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#2C2C2C] mb-2">Category:</h4>
                  <span className="text-[#42C3D6]">{theme.category}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#2C2C2C] mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {theme.techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-[#2C2C2C]/10 text-[#2C2C2C] rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-2">Prizes:</h4>
                  <ul className="space-y-1">
                    {theme.prizes.map((prize, index) => (
                      <li key={index} className="text-sm text-[#2C2C2C]/70 flex items-center">
                        <Award className="text-[#F16522] mr-2" size={16} />
                        {prize}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules and Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules & Guidelines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important information to ensure a fair and successful hackathon
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {hackathonRules.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4 flex items-center">
                  <CheckCircle className="text-[#42C3D6] mr-2" size={24} />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#42C3D6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[#2C2C2C]">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Panel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Judging Panel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts who will evaluate your innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {judgingPanel.map((judge, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-gray-500" size={40} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {judge.name}
                </h3>
                
                <p className="text-[#42C3D6] font-medium mb-2">
                  {judge.role}
                </p>
                
                <p className="text-[#2C2C2C]/70 text-sm mb-3">
                  {judge.organization}
                </p>
                
                <div className="mb-3">
                  <h4 className="font-semibold text-[#2C2C2C] text-sm mb-1">Expertise:</h4>
                  <p className="text-[#2C2C2C]/70 text-sm">{judge.expertise}</p>
                </div>
                
                <p className="text-[#2C2C2C]/70 text-sm">
                  {judge.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hackathon Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important milestones and deadlines for the hackathon
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-[#42C3D6] rounded-full border-4 border-white shadow-md"></div>
                  <div className="ml-16 bg-[#2C2C2C]/5 rounded-lg p-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[#2C2C2C]">
                        {event.event}
                      </h3>
                      <span className="text-sm font-medium text-[#42C3D6]">
                        {event.time}
                      </span>
                    </div>
                    <p className="text-[#2C2C2C]/70">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F16522]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Hack?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for an incredible 24-hour journey of innovation, learning, and fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#F16522] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#F16522] transition-colors">
              Learn More
            </button>
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
