'use client'

// import { motion } from 'framer-motion' // DEBUG: Temporarily commented out framer-motion
import Link from 'next/link'
// import Image from 'next/image' // Removed Image import as we are using <img> for placeholders now

// Import react-icons
import {
  FaHeadphones,
  FaBoxOpen,
  FaEnvelopeOpenText,
  FaCheckCircle, // Still used in one spot, can be removed if not needed
  FaBullseye,
  FaUpload,
  FaMusic,
  FaArrowRight,
  FaBook,
  FaDownload,
  FaQuoteLeft, // For testimonials
  FaUserCheck, // For testimonials
  FaPaperPlane, // How it works
  FaMicrophoneAlt, // How it works
  FaSyncAlt, // How it works
} from 'react-icons/fa'

// --- UI Component Imports ---
// Commented out Spotlight as a debugging step
// import { Spotlight } from '@/components/ui/spotlight'
// --- End UI Component Imports ---


// --- Animation Variants --- (Keep definitions for now, just not applying them)
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// --- Component Definition ---
export default function Home() {
  return (
    // DEBUG: Changed motion.main to main, removed animation props
    <main
      // variants={VARIANTS_CONTAINER}
      // initial="hidden"
      // animate="visible"
      className="overflow-x-hidden bg-white dark:bg-zinc-950" // Base background
    >
      {/* Hero Section */}
      {/* DEBUG: Changed motion.section to section, removed animation props */}
      <section
        // variants={VARIANTS_SECTION}
        className="relative overflow-hidden bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black py-24 md:py-40 min-h-[80vh] flex items-center"
      >
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-8">
            {/* DEBUG: Changed motion.h1 to h1, removed animation props */}
            <h1
              // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100"
            >
              Make Music. Finish More. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 via-black to-zinc-800 dark:from-zinc-400 dark:via-white dark:to-zinc-400">
                Stay Real.
              </span> 🎧
            </h1>

            {/* DEBUG: Changed motion.p to p, removed animation props */}
            <p
              // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl md:max-w-2xl leading-relaxed"
            >
              For producers who started in their bedroom and stuck with it. Submit
              tracks. Grab tools. Stay on track. No fluff, just focus.
            </p>

            {/* Quick Benefits List */}
            {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div
              // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-500 mt-2"
            >
              <span>✅ Get Honest Feedback</span>
              <span>✅ Download Free Tools</span>
              <span>✅ Stay Accountable</span>
            </div>

            {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div
              // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-4 mt-6"
            >
              {/* Primary Button - Refined Style */}
              <Link href="#submit" passHref>
                {/* DEBUG: Changed motion.button to button, removed animation props */}
                <button
                  // whileHover={{ scale: 1.03 }}
                  // whileTap={{ scale: 0.98 }}
                  className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-lg text-base font-semibold flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-98" // Added basic hover/active
                >
                  <FaHeadphones /> Submit Your Track
                </button>
              </Link>

              {/* Secondary Button - Refined Style */}
              <Link href="#content" passHref>
                 {/* DEBUG: Changed motion.button to button, removed animation props */}
                 <button
                  // whileHover={{ scale: 1.03 }}
                  // whileTap={{ scale: 0.98 }}
                  className="border border-zinc-400 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-7 py-3 rounded-lg text-base font-semibold flex items-center gap-2 bg-white/50 dark:bg-black/20 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-black dark:hover:border-zinc-500 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-98" // Added basic hover/active
                 >
                  <FaBoxOpen /> Browse Free Tools
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* DEBUG: Changed motion.section to section, removed animation props */}
      <section
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 text-center">
           {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
          <h2
             // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6"
          >
            🤔 Built For Bedroom Producers — By One
          </h2>
           {/* DEBUG: Changed motion.p to p, removed animation props */}
          <p
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4 max-w-3xl mx-auto"
          >
            This isn’t a course. It’s not a label selling you a dream. It’s a home for people still learning, still overthinking drops, still wondering if their kick is too loud. If you're still tweaking, still trying to finish the damn track, this place gets it.
          </p>
            {/* DEBUG: Changed motion.p to p, removed animation props */}
           <p
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto"
           >
            I’ve made music for years – some did numbers, some didn’t. I’m still here. Still learning. If you relate, this space is yours too. No gatekeeping, just shared progress.
          </p>
        </div>
      </section>

       {/* How It Works Section - NEW */}
       {/* DEBUG: Changed motion.section to section, removed animation props */}
       <section
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4">
           {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
          <h2
             // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          >
            ⚙️ Simple Process
          </h2>
           {/* DEBUG: Changed motion.div to div, removed animation props */}
          <div
             // variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
          >
            {/* Step 1 */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800">
              <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4">
                <FaPaperPlane className="text-2xl text-black dark:text-white"/>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">1. Submit Track</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Upload a link to your work-in-progress via the simple form.</p>
            </div>
            {/* Step 2 */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800">
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4">
                 <FaMicrophoneAlt className="text-2xl text-black dark:text-white"/>
               </div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">2. Get Feedback</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Receive honest, actionable notes on your mix, arrangement, or vibe.</p>
            </div>
            {/* Step 3 */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800">
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4">
                 <FaSyncAlt className="text-2xl text-black dark:text-white"/>
               </div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">3. Improve & Repeat</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Apply the feedback, finish more tracks, and keep growing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Using Emojis */}
      {/* DEBUG: Changed motion.section to section, removed animation props */}
      <section
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4">
           {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
          <h2
             // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          >
            ✨ What You’ll Find Inside
          </h2>
           {/* DEBUG: Changed motion.div to div, removed animation props */}
          <div
             // variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl" // Adjusted max-width
          >
            {/* Feature Items using ✅ */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Track Feedback</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Honest notes from someone who’s still in the trenches.</p>
              </div>
            </div>
             {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Free Resources</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Templates, sample packs, checklists – zero fluff.</p>
              </div>
            </div>
             {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Accountability Tools</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Keep track of what you’re working on, privately or publicly.</p>
              </div>
            </div>
             {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Monthly Newsletter</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Just 1 tip, 1 tool, and 1 community win. Once a month.</p>
              </div>
            </div>
             {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">No Guru Nonsense</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Real talk for real producers making music.</p>
              </div>
            </div>
             {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Community Wins</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Sharing progress and celebrating small victories together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Callout Section */}
      {/* DEBUG: Changed motion.section to section, removed animation props */}
      <section
        id="newsletter"
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-gradient-to-r from-zinc-800 to-black text-white" // Gradient dark bg
      >
        <div className="container mx-auto px-4 text-center">
            {/* DEBUG: Changed motion.div to div, removed animation props */}
           <div /* variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} */>
             <FaEnvelopeOpenText className="text-4xl text-zinc-400 mb-5 mx-auto" />
           </div>
           {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
          <h2
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            📬 One Email. Once a Month. That's It.
          </h2>
           {/* DEBUG: Changed motion.p to p, removed animation props */}
          <p
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Get one tip worth reading, one free resource worth using, and one
            small win from the Bedroom Producers crew. No spam, ever. Straight to your inbox.
          </p>
           {/* DEBUG: Changed motion.form to form, removed animation props */}
          <form
             // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@email.com"
              required
              className="w-full sm:w-auto flex-grow border border-zinc-600 bg-zinc-700 text-white px-4 py-3 rounded-lg placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-200"
            />
             {/* DEBUG: Changed motion.button to button, removed animation props */}
            <button
              // whileHover={{ scale: 1.03 }}
              // whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200 flex-shrink-0 active:scale-98" // Added basic active
            >
              Join the Newsletter
            </button>
          </form>
        </div>
      </section>

      {/* Accountability Section - Using Emojis */}
      {/* DEBUG: Changed motion.section to section, removed animation props */}
      <section
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 text-center">
            {/* DEBUG: Changed motion.div to div, removed animation props */}
           <div /* variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} */>
             <FaBullseye className="text-4xl text-black dark:text-white mb-5 mx-auto" />
           </div>
           {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
          <h2
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
          >
            🎯 Finished is Better Than Perfect.
          </h2>
           {/* DEBUG: Changed motion.p to p, removed animation props */}
          <p
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Momentum matters. Every week, challenge yourself to set one small, achievable goal using our simple tracker (coming soon!):
          </p>
           {/* DEBUG: Changed motion.div to div, removed animation props */}
          <div
             // variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
             className="space-y-4 text-left max-w-md mx-auto mb-10" // Increased spacing
          >
             {/* List items using ✅ */}
              {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <span className="text-xl">✅</span>
                <span className="text-zinc-800 dark:text-zinc-200">Finish a compelling 8-bar loop.</span>
             </div>
              {/* DEBUG: Changed motion.div to div, removed animation props */}
              <div /* variants={itemVariants} */ className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
                 <span className="text-xl">✅</span>
                <span className="text-zinc-800 dark:text-zinc-200">Structure out one full track idea.</span>
             </div>
              {/* DEBUG: Changed motion.div to div, removed animation props */}
              <div /* variants={itemVariants} */ className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
                 <span className="text-xl">✅</span>
                <span className="text-zinc-800 dark:text-zinc-200">Just open your DAW and export *something*.</span>
             </div>
          </div>
           {/* DEBUG: Changed motion.p to p, removed animation props */}
          <p
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Track your progress privately or share it for encouragement. Small steps add up — this space helps you take them.
          </p>
           {/* DEBUG: Changed motion.div to div, removed animation props */}
          <div /* variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} */>
             {/* DEBUG: Changed motion.button to button, removed animation props */}
             <button
                // whileHover={{ scale: 1.03 }}
                // whileTap={{ scale: 0.98 }}
                className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-lg text-base font-semibold flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 shadow-lg hover:shadow-xl transform mx-auto hover:scale-105 active:scale-98" // Added basic hover/active
              >
              <FaBullseye /> Set My Weekly Goal
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      {/* DEBUG: Changed motion.section to section, removed animation props */}
      <section
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4">
           {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
          <h2
             // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          >
            💬 From the Community
          </h2>
           {/* DEBUG: Changed motion.div to div, removed animation props */}
          <div
             // variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" // Wider max-width
          >
            {/* Testimonial Card 1 (Placeholder) */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800">
              <FaQuoteLeft className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4"/>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"Finally got feedback that actually made sense and helped me fix my muddy low-end. No generic advice here."</p>
              <div className="flex items-center gap-3">
                 <FaUserCheck className="text-zinc-400 dark:text-zinc-500"/>
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Alex P.</span>
              </div>
            </div>
            {/* Testimonial Card 2 (Placeholder) */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800">
               <FaQuoteLeft className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4"/>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"The free starter template saved me hours setting up my Ableton projects. Simple but effective stuff."</p>
              <div className="flex items-center gap-3">
                 <FaUserCheck className="text-zinc-400 dark:text-zinc-500"/>
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Samira K.</span>
              </div>
            </div>
             {/* Testimonial Card 3 (Placeholder) */}
              {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800">
               <FaQuoteLeft className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4"/>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"Just knowing others are grinding away on their tracks too keeps me motivated. Less lonely than staring at a screen alone."</p>
              <div className="flex items-center gap-3">
                 <FaUserCheck className="text-zinc-400 dark:text-zinc-500"/>
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Jordan T.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Submission Section */}
      {/* DEBUG: Changed motion.section to section, removed animation props */}
      <section
        id="submit"
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900" // Changed background
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} */>
               <FaUpload className="text-4xl text-black dark:text-white mb-5 mx-auto" />
             </div>
              {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
             <h2
               // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
              >
               🚀 Submit Your Track — Get Real Feedback
             </h2>
              {/* DEBUG: Changed motion.p to p, removed animation props */}
             <p
               // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto"
             >
               No gatekeeping. No waiting list. Just direct, clear feedback from someone who gets it. Upload your link, tell me what you need help with.
             </p>
          </div>

          {/* Form Styling - Adjusted for Dark Mode */}
           {/* DEBUG: Changed motion.form to form, removed animation props */}
          <form
             // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="space-y-6 bg-zinc-50 dark:bg-zinc-950 p-8 md:p-10 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-800 max-w-2xl mx-auto" // Centered form, more padding/shadow
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Name</label>
              <input type="text" id="name" placeholder="Your Name" required className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-500 dark:placeholder-zinc-400" />
            </div>
             <div>
               <label htmlFor="track-link" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Track Link</label>
              <input type="url" id="track-link" placeholder="SoundCloud / Dropbox / Google Drive Link" required className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-500 dark:placeholder-zinc-400" />
             </div>
             <div>
               <label htmlFor="feedback-type" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Type of Feedback Needed</label>
              {/* FIX: Added defaultValue to select, removed selected from option */}
              <select id="feedback-type" required defaultValue="" className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 appearance-none placeholder-zinc-500 dark:placeholder-zinc-400">
                <option value="" disabled className="text-zinc-500 dark:text-zinc-400">Select Feedback Focus...</option>
                <option value="mix">Mix / Master Clarity</option>
                <option value="arrangement">Arrangement / Structure</option>
                <option value="sound-design">Sound Design / Sample Choice</option>
                <option value="vocals">Vocals (if applicable)</option>
                <option value="general">General Impression / Vibe</option>
                <option value="stuck">I'm Stuck - Help!</option>
              </select>
             </div>
             <div>
               <label htmlFor="notes" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Specific Questions or Notes (Optional)</label>
               <textarea id="notes" placeholder="e.g., 'Is the kick too loud?', 'How can I improve the drop?'" rows={3} className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-500 dark:placeholder-zinc-400"></textarea>
            </div>
            <div className="flex items-start space-x-3 pt-2">
              <input type="checkbox" id="feature-ok" className="mt-1 h-4 w-4 text-black dark:text-white border-zinc-300 dark:border-zinc-600 rounded focus:ring-black dark:focus:ring-offset-zinc-950 dark:focus:ring-white bg-white dark:bg-zinc-800"/>
              <label htmlFor="feature-ok" className="text-sm text-zinc-700 dark:text-zinc-300">
                It's OK to potentially feature parts of this track/feedback (anonymously if preferred) as learning content for the community.
              </label>
            </div>
             {/* DEBUG: Changed motion.button to button, removed animation props */}
            <button
              // whileHover={{ scale: 1.03 }}
              // whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-lg bg-black dark:bg-white px-6 py-3.5 text-white dark:text-black font-semibold text-base hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 shadow-lg hover:shadow-xl transform flex items-center justify-center gap-2 hover:scale-105 active:scale-98" // Added basic hover/active
            >
              <FaUpload /> Submit Track for Feedback
            </button>
          </form>
        </div>
      </section>

      {/* Latest Content Section */}
       {/* DEBUG: Changed motion.section to section, removed animation props */}
       <section
        id="content"
        // variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950" // Changed background
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} */>
               <FaBook className="text-4xl text-black dark:text-white mb-5 mx-auto" />
             </div>
              {/* DEBUG: Changed motion.h2 to h2, removed animation props */}
             <h2
               // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
              >
               📚 New Stuff On the Site
             </h2>
              {/* DEBUG: Changed motion.p to p, removed animation props */}
             <p
               // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto"
             >
                Fresh resources and insights added regularly. Grab what you need.
             </p>
          </div>

          {/* Enhanced Grid for Content */}
           {/* DEBUG: Changed motion.div to div, removed animation props */}
          <div
             // variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" // Increased gap
          >
            {/* Card 1 - Using <img> */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
            <div /* variants={itemVariants} */ className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
              <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800"> {/* Taller image area */}
                  {/* FIX: Replaced next/image with standard img tag */}
                  <img
                    src="https://placehold.co/600x400/e2e8f0/475569?text=Blog+Post"
                    alt="Blog post illustration"
                    loading="lazy" // Add lazy loading
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">5 Ways to Escape Loop Hell</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Practical tips to break free from the 8-bar trap and actually finish tracks.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Read Post <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </Link>
              {/* <Spotlight color="rgba(200, 200, 255, 0.1)" size={400} className="group-hover:opacity-100 opacity-0" /> */} {/* Commented out Spotlight */}
            </div>
            {/* Card 2 - Using <img> */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
              <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   {/* FIX: Replaced next/image with standard img tag */}
                   <img
                    src="https://placehold.co/600x400/cbd5e1/334155?text=Template"
                    alt="Ableton template illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 mb-2"> <FaDownload className="text-zinc-700 dark:text-zinc-300" /> <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Free Download</span> </div>
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">Ableton Starter Template v2</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Updated template with common routing, grouping, and FX set up to speed your workflow.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Get Template <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </Link>
               {/* <Spotlight color="rgba(200, 255, 200, 0.1)" size={400} className="group-hover:opacity-100 opacity-0" /> */} {/* Commented out Spotlight */}
            </div>
            {/* Card 3 - Using <img> */}
             {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   {/* FIX: Replaced next/image with standard img tag */}
                   <img
                    src="https://placehold.co/600x400/e0f2fe/075985?text=Checklist"
                    alt="Checklist illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">Mixing Reset Checklist (PDF)</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">A printable checklist to simplify your mix decisions and avoid over-processing.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Download PDF <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </Link>
               {/* <Spotlight color="rgba(255, 200, 200, 0.1)" size={400} className="group-hover:opacity-100 opacity-0" /> */} {/* Commented out Spotlight */}
            </div>
             {/* Card 4 (Placeholder) - Using <img> */}
              {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   {/* FIX: Replaced next/image with standard img tag */}
                   <img
                    src="https://placehold.co/600x400/fecaca/991b1b?text=Challenge"
                    alt="Challenge illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">Loop Slayer Challenge #01</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Flip this drum groove with your own style and submit your take.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">View Challenge <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </Link>
               {/* <Spotlight color="rgba(255, 255, 200, 0.1)" size={400} className="group-hover:opacity-100 opacity-0" /> */} {/* Commented out Spotlight */}
            </div>
             {/* Card 5 (Placeholder) - Using <img> */}
              {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   {/* FIX: Replaced next/image with standard img tag */}
                   <img
                    src="https://placehold.co/600x400/a7f3d0/047857?text=Tip"
                    alt="Quick tip illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">Quick Tip: Sidechain Reverb</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Clean up your mix by ducking reverb tails away from your main elements.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Read Tip <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </Link>
               {/* <Spotlight color="rgba(200, 255, 255, 0.1)" size={400} className="group-hover:opacity-100 opacity-0" /> */} {/* Commented out Spotlight */}
            </div>
             {/* Card 6 (Placeholder) - Using <img> */}
              {/* DEBUG: Changed motion.div to div, removed animation props */}
             <div /* variants={itemVariants} */ className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   {/* FIX: Replaced next/image with standard img tag */}
                   <img
                    src="https://placehold.co/600x400/c7d2fe/4338ca?text=Sample+Pack"
                    alt="Sample pack illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 mb-2"> <FaDownload className="text-zinc-700 dark:text-zinc-300" /> <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Free Download</span> </div>
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">Lo-Fi Drums Vol. 1</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">A small pack of dusty, processed drum one-shots perfect for chill beats.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Download Pack <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </Link>
               {/* <Spotlight color="rgba(255, 200, 255, 0.1)" size={400} className="group-hover:opacity-100 opacity-0" /> */} {/* Commented out Spotlight */}
            </div>
          </div>

          {/* Links to main content areas */}
           {/* DEBUG: Changed motion.div to div, removed animation props */}
          <div
            // variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-6" // Increased margin
          >
            <Link href="#" className="text-base font-semibold text-black dark:text-white hover:underline underline-offset-4 flex items-center gap-2 transition-colors">
               <FaBook /> See All Posts & Guides
            </Link>
            <Link href="#" className="text-base font-semibold text-black dark:text-white hover:underline underline-offset-4 flex items-center gap-2 transition-colors">
              <FaDownload /> Browse All Free Resources
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
