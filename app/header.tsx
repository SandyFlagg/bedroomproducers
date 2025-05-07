'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
// Using react-icons for consistency
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

// Simple SVG Logo component (example)
function LogoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white" // Use current text color
    >
      <path
        d="M4 18.5V14.5M12 18.5V10.5M20 18.5V5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11.5V5.5M12 7.5V5.5M20 2.5V5.5" // Adjusted top lines slightly
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6" // Make secondary lines slightly less prominent
      />
    </svg>
  )
}


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  // State to track mounted status for theme toggle (avoids hydration mismatch)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Close mobile menu if theme changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);


  return (
    <>
      {/* Header container: Sticky, background blur, border */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12 lg:px-24"> {/* Match layout padding */}
          <div className="flex h-16 items-center justify-between"> {/* Standard header height */}

            {/* Site Title / Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="Back to Homepage">
              <LogoIcon />
              <span className="font-semibold text-black dark:text-white text-lg hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                Bedroom Producers
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center space-x-6">
                <li><Link href="/#submit" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Submit</Link></li>
                <li><Link href="/#content" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="/#newsletter" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Newsletter</Link></li>
                {/* Add more links as needed */}
              </ul>
            </nav>

            {/* Right side controls: Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors"
              >
                {mounted ? (theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />) : <FiSun size={18} /> /* Render placeholder on server */}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors md:hidden" // Hide on medium screens and up
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden
          transition-opacity duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={toggleMobileMenu} // Close menu when clicking overlay
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className={`
            fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-zinc-900 shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
        >
          {/* Menu Content */}
          <div className="flex justify-end p-4 border-b border-zinc-200 dark:border-zinc-800">
             <button
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors"
              >
                <FiX size={20} />
              </button>
          </div>
          <nav className="p-6">
            <ul className="space-y-4">
              <li><Link href="/" onClick={toggleMobileMenu} className="block text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#submit" onClick={toggleMobileMenu} className="block text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Submit</Link></li>
              <li><Link href="/#content" onClick={toggleMobileMenu} className="block text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/#newsletter" onClick={toggleMobileMenu} className="block text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Newsletter</Link></li>
              {/* Add other links */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}