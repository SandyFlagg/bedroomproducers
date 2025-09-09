'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaSoundcloud, FaInstagram, FaTwitter, FaYoutube, FaSpotify } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gradient-to-br from-zinc-900 to-black text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Column 1: Branding & Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block text-2xl font-bold text-white mb-4 hover:text-orange-400 transition-colors">
                🎧 Bedroom Producers
              </Link>
              <p className="text-sm text-zinc-400 mb-6 max-w-md leading-relaxed">
                Built in bedrooms. Played in clubs. A gritty, no-BS home for underdog producers who want to finish more tracks and get real feedback.
              </p>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>© {currentYear} Bedroom Producers.</span>
                <span>All Rights Reserved.</span>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>🏠</span> Home
                </Link>
              </li>
              <li>
                <Link href="/#submit" className="text-sm text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>🎧</span> Submit Track
                </Link>
              </li>
              <li>
                <Link href="/#content" className="text-sm text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>📦</span> Resources
                </Link>
              </li>
              <li>
                <Link href="/#newsletter" className="text-sm text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>📨</span> Newsletter
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Connect / Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h5>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="SoundCloud" 
                className="text-zinc-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50"
              >
                <FaSoundcloud size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-zinc-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="text-zinc-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube" 
                className="text-zinc-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50"
              >
                <FaYoutube size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Spotify" 
                className="text-zinc-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50"
              >
                <FaSpotify size={20} />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  )
}
