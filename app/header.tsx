'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiMusic,
  FiHeadphones,
} from 'react-icons/fi'
import { ScrollProgress } from '../components/ui/scroll-progress'

// Enhanced Logo component with music theme
function LogoIcon() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2"
    >
      <div className="relative">
        <FiMusic className="text-orange-500" size={24} />
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute -top-1 -right-1"
        >
          <FiHeadphones
            size={12}
            className="text-zinc-600 dark:text-zinc-400"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu if theme changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <>
      <ScrollProgress />
      {/* Header container: Sticky, background blur, border */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? 'border-zinc-200/90 bg-white/95 shadow-sm backdrop-blur-lg dark:border-zinc-800/90 dark:bg-zinc-950/95'
            : 'border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex h-16 items-center justify-between">
            {/* Site Title / Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Back to Homepage"
            >
              <LogoIcon />
              <span className="text-lg font-bold text-black transition-colors hover:text-orange-500 dark:text-white dark:hover:text-orange-400">
                Bedroom Producers
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden items-center md:flex">
              <ul className="flex items-center space-x-8">
                <li>
                  <button
                    onClick={() => scrollToSection('submit')}
                    className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-400"
                  >
                    Submit Track
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('content')}
                    className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-400"
                  >
                    Resources
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-400"
                  >
                    Blog
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('newsletter')}
                    className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-400"
                  >
                    Newsletter
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              </ul>
            </nav>

            {/* Right side controls: Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="rounded-lg p-2 text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-orange-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-orange-400"
              >
                {mounted ? (
                  theme === 'dark' ? (
                    <FiSun size={18} />
                  ) : (
                    <FiMoon size={18} />
                  )
                ) : (
                  <FiSun size={18} />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className="rounded-lg p-2 text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-orange-500 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-orange-400"
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
            aria-hidden={!isMobileMenuOpen}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl dark:bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between border-b border-zinc-200 p-6 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <LogoIcon />
                  <span className="font-bold text-black dark:text-white">
                    Menu
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMobileMenu}
                  aria-label="Close mobile menu"
                  className="rounded-lg p-2 text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-orange-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-orange-400"
                >
                  <FiX size={20} />
                </motion.button>
              </div>

              {/* Menu Content */}
              <nav className="p-6">
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <button
                      onClick={() => scrollToSection('submit')}
                      className="block w-full py-2 text-left text-lg font-medium text-zinc-700 transition-colors hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400"
                    >
                      🎧 Submit Track
                    </button>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <button
                      onClick={() => scrollToSection('content')}
                      className="block w-full py-2 text-left text-lg font-medium text-zinc-700 transition-colors hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400"
                    >
                      📦 Resources
                    </button>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <button
                      onClick={() => scrollToSection('newsletter')}
                      className="block w-full py-2 text-left text-lg font-medium text-zinc-700 transition-colors hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400"
                    >
                      📨 Newsletter
                    </button>
                  </motion.li>
                </motion.ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
