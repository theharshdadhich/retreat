'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Mail, Phone, MapPin, Calendar, Users, Clock, Send, Download } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interestedIn: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        interestedIn: 'general'
      })
    }, 3000)
  }

  // Add download function
  const handleDownloadItinerary = () => {
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = '/docs/bot-retreat-itinerary.pdf'
    link.download = 'BOT_Retreat_Itinerary_2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const contactInfo = [
    {
      icon: <Mail className="text-[#42C3D6]" size={24} />,
      title: 'Email',
      details: ['annualretreat@botconsulting.io']
    },
    {
      icon: <Phone className="text-[#F16522]" size={24} />,
      title: 'Phone',
      details: ['+91 9256768903', '+91 8551960354']
    },
    {
      icon: <MapPin className="text-[#2C2C2C]" size={24} />,
      title: 'Office',
      details: ['IT-A-017 Mahindra World City', 'Multi-product SEZ, Kalwara', '302037']
    }
  ]

  const retreatDetails = [
    {
      icon: <Calendar className="text-[#42C3D6]" size={24} />,
      title: 'Dates',
      details: ['October 24-26, 2025']
    },
    {
      icon: <MapPin className="text-[#F16522]" size={24} />,
      title: 'Venue',
      details: ['Rajasthali Resort & Spa Jaipur']
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions about the retreat? We&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 mb-2">
                    <Send size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for your message. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#42C3D6] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#42C3D6]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* General Contact */}
              <div>
                <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-[#4A4A4A]">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retreat Details */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">Retreat Details</h2>
                <div className="space-y-6">
                  {retreatDetails.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {detail.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">{detail.title}</h3>
                        <div className="space-y-1">
                          {detail.details.map((info, infoIndex) => (
                            <p key={infoIndex} className="text-[#4A4A4A]">{info}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              Find answers to common questions about the retreat
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Which expenses will BOT cover during the retreat, and how should travel be arranged?</h3>
                <p className="text-[#4A4A4A]">
                  BOT will cover your accommodation, meals, retreat activities, and all official events. For participants traveling from outside Jaipur, you are requested to book your own tickets. The cost of these tickets will be reimbursed by BOT in line with company policy.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Can I bring my family, and will there be activities for them?</h3>
                <p className="text-[#4A4A4A]">
                Yes! You&apos;re welcome to bring your spouse and kids. We&apos;ve planned family-friendly activities such as cultural evenings, Diwali celebrations, and sports, so everyone can enjoy the retreat together.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">What items should I prepare to bring?</h3>
                <p className="text-[#4A4A4A]">
                It is advisable to bring comfortable attire, a laptop for the hackathon, business casual clothing for meetings, and any personal essentials you may require.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Is transportation provided?</h3>
                <p className="text-[#4A4A4A]">
                  Transportation to and from the resort will be arranged. Details will be provided upon registration.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">What if I have dietary restrictions?</h3>
                <p className="text-[#4A4A4A]">
                  Please let us know in advance, and we&apos;ll ensure all dietary requirements are accommodated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF914D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on this incredible opportunity to connect, innovate, and celebrate with the BOT family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDownloadItinerary}
              className="bg-white text-[#F16522] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto"
            >
              <Download className="mr-2" size={20} />
              Download Itinerary
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">BOT Consulting</h3>
          <p className="text-white/70 mb-6">
            Annual Company Retreat 2025 • October 24-26
          </p>
        </div>
      </footer>
    </main>
  )
}