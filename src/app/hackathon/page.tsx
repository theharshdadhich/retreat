// import Navigation from '@/components/Navigation'
// import { Trophy, Users, Clock, Award, CheckCircle } from 'lucide-react'

// const hackathonThemes = [
//   {
//     id: 1,
//     title: 'Greenfield GDCs',
//     description: 'Setting up new Global Delivery Centers from scratch with focus on sustainability, innovation, digital-first solutions.',
//     category: 'Innovation',
//     difficulty: 'Advanced',
//     examples: ['Sustainability-First Bank GDC', 'AI-Healthcare GDC'],
//     teamRoles: ['Tech Specialists', 'Architect/PM', 'HR/People Ops', 'Support Engineer/Ops']
//   },
//   {
//     id: 2,
//     title: 'Brownfield GDCs',
//     description: 'Revamping or transforming existing GDCs facing challenges like attrition, culture gaps, cyber breaches.',
//     category: 'Transformation',
//     difficulty: 'Intermediate',
//     examples: ['Turnaround of a Failing FinTech GDC', 'Cyber-Resilient GDC'],
//     teamRoles: ['Tech Specialists', 'Architect/PM', 'HR/People Ops', 'Support Engineer/Ops']
//   }
// ]

// const hackathonRules = [
//   {
//     title: 'Team Formation',
//     rules: [
//       'Teams must consist of 5-6 members',
//       'Cross-functional teams with defined roles required',
//       '2 Tech Specialists (Data/AI/Software Development)',
//       '1 Architect/PM/Engagement Manager',
//       '1 HR/People Ops',
//       '1 Support Engineer/Ops'
//     ]
//   },
//   {
//     title: 'Event Format',
//     rules: [
//       'Day 1: 3 hours development + screening',
//       'Day 2: 1.5 hours presentations',
//       'Only 5-6 best teams advance to Day 2',
//       'Quick pitches on Day 1 for initial screening'
//     ]
//   },
//   {
//     title: 'Evaluation Criteria',
//     rules: [
//       'Strategic & Business Alignment (Market relevance, business impact)',
//       'Innovation & Technology (Technical creativity, feasibility)',
//       'People & Culture Impact (Human-centered design approach)',
//       'Creativity & Storytelling (Compelling narrative, presentation quality)'
//     ]
//   },
//   {
//     title: 'Submission Requirements',
//     rules: [
//       'Innovative GDC concept focusing on sustainability',
//       'Cutting-edge business solutions',
//       'Final presentation to judging panel',
//       'Comprehensive solution covering Technology + People + Operations'
//     ]
//   }
// ]

// const judgingPanel = [
//   {
//     name: 'Harit',
//     role: 'Expert Judge',
//     organization: 'BOT Consulting',
//     expertise: 'Strategic Evaluation',
//   },
//   {
//     name: 'Manpreet',
//     role: 'Expert Judge',
//     organization: 'BOT Consulting',
//     expertise: 'Innovation Assessment',
//   },
//   {
//     name: 'Erik',
//     role: 'Expert Judge',
//     organization: 'BOT Consulting',
//     expertise: 'Technical Evaluation',
//   },
//   {
//     name: 'Glenn',
//     role: 'Expert Judge',
//     organization: 'BOT Consulting',
//     expertise: 'Business Alignment',
//   }
// ]

// const timeline = [
//   {
//     time: 'Day 1',
//     event: 'Kickoff & Problem Statement Reveal',
//     description: 'Teams receive their challenge'
//   },
//   {
//     time: 'Day 1',
//     event: 'Solution Development',
//     description: 'Brainstorming, coding, and framework preparation'
//   },
//   {
//     time: 'Day 1',
//     event: 'Quick Pitches - L1 Screening',
//     description: 'Each team gives a short pitch of their problem statement'
//   },
//   {
//     time: 'Day 1',
//     event: 'Mentor Evaluation',
//     description: 'Judges score based on creativity, feasibility, alignment'
//   },
//   {
//     time: 'Day 1',
//     event: 'Top 5-6 Teams Shortlisted',
//     description: 'Selected teams advance to Day 2 finals'
//   },
//   {
//     time: 'Day 2',
//     event: 'Final Presentations',
//     description: 'Finalists present to the judging panel'
//   },
//   {
//     time: 'Day 2',
//     event: 'Judging & Deliberation',
//     description: 'Panel evaluates final presentations'
//   },
//   {
//     time: 'Day 2',
//     event: 'Awards & Celebration',
//     description: 'Winners announced and celebration'
//   }
// ]

// const benefits = [
//   {
//     category: 'For BOT Consulting',
//     items: [
//       'Breakthrough innovative GDC concepts',
//       'Enhanced cross-functional collaboration',
//       'Potential new business opportunities',
//       'Strengthened innovation culture',
//       'Team building across departments'
//     ]
//   },
//   {
//     category: 'For Participants',
//     items: [
//       'Skill development & technical growth',
//       'Leadership and presentation experience',
//       'Cross-team networking opportunities',
//       'Recognition from senior leadership',
//       'Innovation mindset development'
//     ]
//   }
// ]

// export default function Hackathon() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <Navigation />
      
//       {/* Header */}
//       <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//               BOT Consulting Office Retreat Hackathon
//             </h1>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               High-Level Event Flow & Requirements
//             </p>
//             <p className="text-lg text-white/80 mt-4">
//               Presented by: Volunteer Organizing Committee
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Hackathon Overview */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Hackathon Overview</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Teams will design and present innovative Global Delivery Center concepts 
//               focusing on sustainability and cutting-edge business solutions
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-6 rounded-lg bg-[#42C3D6]/10">
//               <div className="w-16 h-16 bg-[#42C3D6] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Clock className="text-white" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Duration</h3>
//               <p className="text-[#2C2C2C]/70">
//                 Day 1: 3 hours development<br />
//                 Day 2: 1.5 hours presentations
//               </p>
//             </div>
            
//             <div className="text-center p-6 rounded-lg bg-[#F16522]/10">
//               <div className="w-16 h-16 bg-[#F16522] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="text-white" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Participants</h3>
//               <p className="text-[#2C2C2C]/70">
//                 100 employees<br />
//                 (16-20 teams)
//               </p>
//             </div>
            
//             <div className="text-center p-6 rounded-lg bg-[#42C3D6]/10">
//               <div className="w-16 h-16 bg-[#42C3D6] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Trophy className="text-white" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Competition</h3>
//               <p className="text-[#2C2C2C]/70">
//                 Only 5-6 best teams<br />
//                 advance to Day 2
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Hackathon Themes */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Hackathon Problem Themes</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Focus on New GDC Innovation with two distinct approaches
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {hackathonThemes.map((theme) => (
//               <div key={theme.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-semibold text-gray-900">{theme.title}</h3>
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     theme.difficulty === 'Advanced' ? 'bg-[#F16522]/20 text-[#F16522]' :
//                     theme.difficulty === 'Intermediate' ? 'bg-[#42C3D6]/20 text-[#42C3D6]' :
//                     'bg-[#2C2C2C]/20 text-[#2C2C2C]'
//                   }`}>
//                     {theme.difficulty}
//                   </span>
//                 </div>
                
//                 <p className="text-gray-600 mb-4">{theme.description}</p>
                
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-[#2C2C2C] mb-2">Examples:</h4>
//                   <ul className="list-disc pl-5 text-[#2C2C2C]/70">
//                     {theme.examples.map((example, index) => (
//                       <li key={index}>{example}</li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-[#2C2C2C] mb-2">Required Team Roles:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {theme.teamRoles.map((role, index) => (
//                       <span key={index} className="px-2 py-1 bg-[#2C2C2C]/10 text-[#2C2C2C] rounded text-sm">
//                         {role}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Rules and Guidelines */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules & Guidelines</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Important information to ensure a fair and successful hackathon
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {hackathonRules.map((section, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-6">
//                 <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4 flex items-center">
//                   <CheckCircle className="text-[#42C3D6] mr-2" size={24} />
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {section.rules.map((rule, ruleIndex) => (
//                     <li key={ruleIndex} className="flex items-start">
//                       <div className="w-2 h-2 bg-[#42C3D6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                       <span className="text-[#2C2C2C]">{rule}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Judging Panel */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Judging Panel</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experts who will evaluate and guide your innovative solutions
//             </p>
//           </div>
          
//           <div className="mb-16">
//             <h3 className="text-2xl font-semibold text-center text-[#2C2C2C] mb-8"></h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {judgingPanel.map((judge, index) => (
//                 <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
//                   <div className="w-20 h-20 bg-[#42C3D6] rounded-full mx-auto mb-4 flex items-center justify-center">
//                     <Users className="text-white" size={40} />
//                   </div>
                  
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                     {judge.name}
//                   </h3>
                  
//                   <p className="text-[#F16522] font-medium mb-2">
//                     {judge.role}
//                   </p>
                  
//                   <p className="text-[#2C2C2C]/70 text-sm mb-3">
//                     {judge.organization}
//                   </p>
                  
//                   <div className="mb-3">
//                     <h4 className="font-semibold text-[#2C2C2C] text-sm mb-1">Expertise:</h4>
//                     <p className="text-[#2C2C2C]/70 text-sm">{judge.expertise}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Two-Day Competition Structure</h2>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-md p-8">
//             <div className="grid md:grid-cols-2 gap-12">
//               <div>
//                 <h3 className="text-2xl font-semibold text-[#F16522] mb-6 text-center">Day 1 - Development + Screening</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#42C3D6] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <CheckCircle size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Problem Statement Reveal – Teams receive their challenge</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#42C3D6] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <CheckCircle size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Solution Development – Brainstorming, coding, and framework prep</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#42C3D6] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <CheckCircle size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Quick Pitches – Each team gives a short pitch of their problem statement</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#42C3D6] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <CheckCircle size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Mentor Evaluation – Judges score based on creativity, feasibility, alignment</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#42C3D6] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <CheckCircle size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Top 5–6 Teams Shortlisted for Day 2 Finals</span>
//                   </li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-2xl font-semibold text-[#F16522] mb-6 text-center">Day 2 - Final Presentations + Results</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#F16522] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <Award size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Finalists present their final presentations to our panel</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#F16522] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <Award size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Judging & Deliberation</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#F16522] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <Award size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Winner will be announced</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-6 h-6 bg-[#F16522] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
//                       <Award size={14} className="text-white" />
//                     </div>
//                     <span className="text-[#2C2C2C]">Awards & Celebration</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Expected Impact & Benefits</h2>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="bg-gray-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4 flex items-center">
//                   <CheckCircle className="text-[#42C3D6] mr-2" size={24} />
//                   {benefit.category}
//                 </h3>
//                 <ul className="space-y-3">
//                   {benefit.items.map((item, itemIndex) => (
//                     <li key={itemIndex} className="flex items-start">
//                       <div className="w-2 h-2 bg-[#42C3D6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                       <span className="text-[#2C2C2C]">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Awards Section */}
//       <section className="py-16 bg-[#42C3D6]/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards Program</h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Celebrating innovation, collaboration, and technical excellence
//           </p>
          
//           <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
//             <div className="flex items-center justify-center mb-6">
//               <Trophy className="text-[#F16522] mr-3" size={32} />
//               <h3 className="text-2xl font-semibold text-[#2C2C2C]">Awards Include</h3>
//             </div>
            
//             <ul className="space-y-4 text-lg text-[#2C2C2C]">
//               <li className="flex items-center justify-center">
//                 <Award className="text-[#F16522] mr-2" size={20} />
//                 Winner recognition
//               </li>
//               <li className="flex items-center justify-center">
//                 <Award className="text-[#42C3D6] mr-2" size={20} />
//                 Runner-up acknowledgment
//               </li>
//               <li className="flex items-center justify-center">
//                 <Award className="text-[#2C2C2C] mr-2" size={20} />
//                 Special category awards
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-[#F16522]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-4">Ready to Innovate?</h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Join us for this exciting hackathon to design the future of Global Delivery Centers!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-[#F16522] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
//               Register Your Team
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#F16522] transition-colors">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#4A4A4A] text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h3 className="text-2xl font-bold mb-4">BOT Consulting</h3>
//           <p className="text-white/70">
//             Annual Company Retreat • October 24-26
//           </p>
//         </div>
//       </footer>
//     </main>
//   )
// }

import Navigation from '@/components/Navigation'
import { Trophy, Users, Clock, Award, CheckCircle } from 'lucide-react'

const hackathonThemes = [
  {
    id: 1,
    title: 'Greenfield GDCs',
    description: 'Setting up new Global Delivery Centers from scratch with focus on sustainability, innovation, digital-first solutions.',
    category: 'Innovation',
    difficulty: 'Advanced',
    examples: ['Sustainability-First Bank GDC', 'AI-Healthcare GDC'],
    teamRoles: ['Tech Specialists', 'Architect/PM', 'HR/People Ops', 'Support Engineer/Ops']
  },
  {
    id: 2,
    title: 'Brownfield GDCs',
    description: 'Revamping or transforming existing GDCs facing challenges like attrition, culture gaps, cyber breaches.',
    category: 'Transformation',
    difficulty: 'Intermediate',
    examples: ['Turnaround of a Failing FinTech GDC', 'Cyber-Resilient GDC'],
    teamRoles: ['Tech Specialists', 'Architect/PM', 'HR/People Ops', 'Support Engineer/Ops']
  }
]

const hackathonRules = [
  {
    title: 'Team Formation',
    rules: [
      'Teams must consist of 5-6 members',
      'Cross-functional teams with defined roles required',
      '2 Tech Specialists (Data/AI/Software Development)',
      '1 Architect/PM/Engagement Manager',
      '1 HR/People Ops',
      '1 Support Engineer/Ops'
    ]
  },
  {
    title: 'Event Format',
    rules: [
      'Day 1: 3 hours development + screening',
      'Day 2: 1.5 hours presentations',
      'Only 5-6 best teams advance to Day 2',
      'Quick pitches on Day 1 for initial screening'
    ]
  },
  {
    title: 'Evaluation Criteria',
    rules: [
      'Strategic & Business Alignment (Market relevance, business impact)',
      'Innovation & Technology (Technical creativity, feasibility)',
      'People & Culture Impact (Human-centered design approach)',
      'Creativity & Storytelling (Compelling narrative, presentation quality)'
    ]
  },
  {
    title: 'Submission Requirements',
    rules: [
      'Innovative GDC concept focusing on sustainability',
      'Cutting-edge business solutions',
      'Final presentation to judging panel',
      'Comprehensive solution covering Technology + People + Operations'
    ]
  }
]

const judgingPanel = [
  {
    name: 'Harit',
    role: 'Expert Judge',
    organization: 'BOT Consulting',
    expertise: 'Strategic Evaluation',
  },
  {
    name: 'Manpreet',
    role: 'Expert Judge',
    organization: 'BOT Consulting',
    expertise: 'Innovation Assessment',
  },
  {
    name: 'Erik',
    role: 'Expert Judge',
    organization: 'BOT Consulting',
    expertise: 'Technical Evaluation',
  },
  {
    name: 'Glenn',
    role: 'Expert Judge',
    organization: 'BOT Consulting',
    expertise: 'Business Alignment',
  }
]

const timeline = [
  {
    time: 'Day 1',
    event: 'Kickoff & Problem Statement Reveal',
    description: 'Teams receive their challenge'
  },
  {
    time: 'Day 1',
    event: 'Solution Development',
    description: 'Brainstorming, coding, and framework preparation'
  },
  {
    time: 'Day 1',
    event: 'Quick Pitches - L1 Screening',
    description: 'Each team gives a short pitch of their problem statement'
  },
  {
    time: 'Day 1',
    event: 'Mentor Evaluation',
    description: 'Judges score based on creativity, feasibility, alignment'
  },
  {
    time: 'Day 1',
    event: 'Top 5-6 Teams Shortlisted',
    description: 'Selected teams advance to Day 2 finals'
  },
  {
    time: 'Day 2',
    event: 'Final Presentations',
    description: 'Finalists present to the judging panel'
  },
  {
    time: 'Day 2',
    event: 'Judging & Deliberation',
    description: 'Panel evaluates final presentations'
  },
  {
    time: 'Day 2',
    event: 'Awards & Celebration',
    description: 'Winners announced and celebration'
  }
]

const benefits = [
  {
    category: 'For BOT Consulting',
    items: [
      'Breakthrough innovative GDC concepts',
      'Enhanced cross-functional collaboration',
      'Potential new business opportunities',
      'Strengthened innovation culture',
      'Team building across departments'
    ]
  },
  {
    category: 'For Participants',
    items: [
      'Skill development & technical growth',
      'Leadership and presentation experience',
      'Cross-team networking opportunities',
      'Recognition from senior leadership',
      'Innovation mindset development'
    ]
  }
]

export default function Hackathon() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-16 bg-gradient-to-r from-[#FFD9A3] to-[#F87315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              GDC Hackathon
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the BOT Retreat Hackathon
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto w-48 h-48 bg-gradient-to-r from-[#FFD9A3] to-[#F87315] rounded-full flex items-center justify-center mb-8">
              <svg 
                className="w-24 h-24 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              More Info Coming Soon
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're putting together all the exciting details for the BOT Consulting Hackathon. 
              Check back later for complete information about themes, rules, and registration!
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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