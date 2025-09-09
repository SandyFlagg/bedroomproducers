'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaSoundcloud,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSpotify,
} from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear() // Get the current year dynamically

  return (
    <footer className="border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-black pt-16 pb-8 text-zinc-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Column 1: Branding & Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="mb-4 inline-block text-2xl font-bold text-white transition-colors hover:text-orange-400"
              >
                🎧 Bedroom Producers
              </Link>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-zinc-400">
                Built in bedrooms. Played in clubs. A gritty, no-BS home for
                underdog producers who want to finish more tracks and get real
                feedback.
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
            <h5 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-orange-400"
                >
                  <span>🏠</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#submit"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-orange-400"
                >
                  <span>🎧</span> Submit Track
                </Link>
              </li>
              <li>
                <Link
                  href="/#content"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-orange-400"
                >
                  <span>📦</span> Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/#newsletter"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-orange-400"
                >
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
            <h5 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Connect
            </h5>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoundCloud"
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-orange-400"
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
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-orange-400"
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
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-orange-400"
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
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-orange-400"
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
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-orange-400"
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
