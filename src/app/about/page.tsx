import Navigation from '@/components/Navigation'
import { Target, Users, Award, TrendingUp, Heart, Lightbulb, Shield, Globe } from 'lucide-react'

const companyValues = [
  {
    icon: <Lightbulb className="text-[#F16522]" size={32} />,
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
  },
  {
    icon: <Users className="text-[#42C3D6]" size={32} />,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and foster an environment where diverse perspectives thrive.'
  },
  {
    icon: <Heart className="text-[#F16522]" size={32} />,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards and build trust through transparent relationships.'
  },
  {
    icon: <Target className="text-[#42C3D6]" size={32} />,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering exceptional value to our clients.'
  },
  {
    icon: <Shield className="text-[#2C2C2C]" size={32} />,
    title: 'Trust',
    description: 'We build lasting partnerships based on reliability, security, and mutual respect.'
  },
  {
    icon: <Globe className="text-[#42C3D6]" size={32} />,
    title: 'Global Impact',
    description: 'We create solutions that make a positive difference in the world and society.'
  }
]

const achievements = [
  {
    year: '2024',
    title: 'Rapid Growth',
    description: 'Expanded team to 20+ professionals and opened new office locations.'
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Named "Top Consulting Firm" by Tech Business Review for innovative solutions.'
  },
  {
    year: '2022',
    title: 'Client Success',
    description: 'Helped 50+ clients achieve digital transformation with 95% satisfaction rate.'
  },
  {
    year: '2021',
    title: 'Company Founded',
    description: 'BOT Consulting was established with a vision to transform businesses through technology.'
  }
]

const services = [
  {
    title: 'Digital Transformation',
    description: 'Comprehensive digital transformation strategies to modernize your business operations.',
    icon: <TrendingUp className="text-[#42C3D6]" size={24} />
  },
  {
    title: 'Technology Consulting',
    description: 'Expert guidance on technology selection, architecture, and implementation.',
    icon: <Lightbulb className="text-[#F16522]" size={24} />
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    icon: <Target className="text-[#42C3D6]" size={24} />
  },
  {
    title: 'Data Analytics',
    description: 'Advanced analytics and insights to drive data-informed business decisions.',
    icon: <Award className="text-[#F16522]" size={24} />
  }
]

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#42C3D6] to-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About BOT Consulting
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transforming businesses through innovative technology solutions and strategic consulting
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2021, BOT Consulting emerged from a vision to bridge the gap between 
                traditional business practices and cutting-edge technology solutions. Our founders 
                recognized that many organizations struggled to adapt to the rapidly evolving 
                digital landscape.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of passionate technologists has grown into a 
                comprehensive consulting firm that helps businesses of all sizes navigate their 
                digital transformation journey. We believe that technology should empower people 
                and organizations, not complicate their lives.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve clients across various industries, delivering 
                innovative solutions that drive real business value and create lasting impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#42C3D6]/10 to-[#42C3D6]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Our Mission</h3>
              <p className="text-[#2C2C2C]/70 mb-6">
                To empower organizations with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Our Vision</h3>
              <p className="text-[#2C2C2C]/70">
                To be the trusted partner for businesses seeking to transform and thrive in an 
                increasingly digital world, known for our expertise, integrity, and commitment 
                to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones and achievements that mark our growth and success
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-[#42C3D6] rounded-full border-4 border-white shadow-md"></div>
                  <div className="ml-16 bg-white rounded-lg shadow-md p-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[#2C2C2C]">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-medium text-[#42C3D6] bg-[#42C3D6]/20 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-[#2C2C2C]/70">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-[#42C3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">BOT Consulting by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">3+</div>
                <div className="text-white/90">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/90">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-white/90">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-white/90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BOT Consulting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring a unique combination of expertise, innovation, and commitment to every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
                          <div className="w-16 h-16 bg-[#42C3D6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#42C3D6]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Expert Team</h3>
            <p className="text-[#2C2C2C]/70">
              Our team consists of experienced professionals with deep expertise in various 
              technologies and industries.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F16522]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-[#F16522]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Proven Results</h3>
            <p className="text-[#2C2C2C]/70">
              We have a track record of delivering successful projects that drive measurable 
              business outcomes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#42C3D6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-[#42C3D6]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Client-Focused</h3>
            <p className="text-[#2C2C2C]/70">
              We prioritize understanding your unique needs and building long-term partnerships 
              based on trust and results.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how BOT Consulting can help you achieve your digital transformation goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#42C3D6] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#42C3D6]/90 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2C2C2C] transition-colors">
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
            Transforming businesses through innovative technology solutions
          </p>
        </div>
      </footer>
    </main>
  )
}
