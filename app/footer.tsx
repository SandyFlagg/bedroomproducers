'use client'

import Link from 'next/link'
// Import necessary icons from react-icons
import { FaSoundcloud, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa' // Added YouTube as an example

export function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-zinc-900 dark:bg-black text-zinc-300 pt-12 pb-8">
      {/* Dark background, lighter text, more padding */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24"> {/* Match layout padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Column 1: Branding & Info */}
          <div className="lg:col-span-2"> {/* Give more space on larger screens */}
            <Link href="/" className="inline-block text-xl font-semibold text-white mb-3 hover:text-zinc-200 transition-colors">
              Bedroom Producers
            </Link>
            <p className="text-sm text-zinc-400 mb-4 max-w-sm">
              Built in bedrooms. Played in clubs. A gritty, no-BS home for underdog producers.
            </p>
            <p className="text-xs text-zinc-500">
              © {currentYear} Bedroom Producers. All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#submit" className="text-sm text-zinc-400 hover:text-white transition-colors">Submit Track</Link></li>
              <li><Link href="/#content" className="text-sm text-zinc-400 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/#newsletter" className="text-sm text-zinc-400 hover:text-white transition-colors">Newsletter</Link></li>
              {/* Add other relevant links */}
            </ul>
          </div>

          {/* Column 3: Connect / Social */}
          <div>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Connect</h5>
            <div className="flex space-x-4">
              {/* Replace "#" with your actual social media profile URLs */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud" className="text-zinc-400 hover:text-white transition-colors">
                <FaSoundcloud size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-zinc-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-zinc-400 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
              {/* Add other social links */}
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
