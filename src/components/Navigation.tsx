'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  const baseLinkClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const inactiveClasses = 'text-amber-800 hover:text-amber-900 hover:bg-amber-50'
  const activeClasses = 'text-white bg-amber-600'

  const linkClass = (href: string) =>
    `${baseLinkClasses} ${pathname === href ? activeClasses : inactiveClasses}`

  const mobileLinkClass = (href: string) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      pathname === href ? 'text-white bg-amber-600' : 'text-amber-800 hover:text-amber-900 hover:bg-amber-50'
    }`

  const isExperiencesActive = ['/hackathon', '/cultural-night', '/sports'].some((p) => pathname.startsWith(p))

  return (
    <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md fixed w-full z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/Asset 8@4x.png"
                alt="BOT Consulting"
                width={180}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - explicit order */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/itinerary" className={linkClass('/itinerary')}>Itinerary</Link>
            <Link href="/attendees" className={linkClass('/attendees')}>Attendees</Link>

            {/* Experiences Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((v) => !v)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className={`${baseLinkClasses} ${isExperiencesActive ? activeClasses : inactiveClasses}`}
              >
                Experiences ▼
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-amber-100 rounded-md shadow-lg py-2">
                  <Link href="/hackathon" className={`block px-4 py-2 text-sm ${pathname === '/hackathon' ? 'text-white bg-amber-600' : 'text-amber-800 hover:bg-amber-50'}`}>Hackathon</Link>
                  <Link href="/cultural-night" className={`block px-4 py-2 text-sm ${pathname === '/cultural-night' ? 'text-white bg-amber-600' : 'text-amber-800 hover:bg-amber-50'}`}>Cultural Night</Link>
                  <Link href="/sports" className={`block px-4 py-2 text-sm ${pathname === '/sports' ? 'text-white bg-amber-600' : 'text-amber-800 hover:bg-amber-50'}`}>Sports Activity</Link>
                </div>
              )}
            </div>

            <Link href="/about" className={linkClass('/about')}>About BOT</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-800 hover:text-amber-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - explicit order */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur border-b border-amber-100 shadow-lg">
            <Link href="/" className={mobileLinkClass('/')} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/itinerary" className={mobileLinkClass('/itinerary')} onClick={() => setIsOpen(false)}>Itinerary</Link>
            <Link href="/attendees" className={mobileLinkClass('/attendees')} onClick={() => setIsOpen(false)}>Attendees</Link>

            <div className="border-t border-amber-100 mt-2 pt-2">
              <p className="px-3 pb-1 text-xs uppercase tracking-wider text-amber-700">Experiences</p>
              <Link href="/hackathon" className={mobileLinkClass('/hackathon')} onClick={() => setIsOpen(false)}>
                Hackathon
              </Link>
              <Link href="/cultural-night" className={mobileLinkClass('/cultural-night')} onClick={() => setIsOpen(false)}>
                Cultural Night
              </Link>
              <Link href="/sports" className={mobileLinkClass('/sports')} onClick={() => setIsOpen(false)}>
                Sports Activity
              </Link>
            </div>

            <Link href="/about" className={mobileLinkClass('/about')} onClick={() => setIsOpen(false)}>About BOT</Link>
            <Link href="/contact" className={mobileLinkClass('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
