'use client'

import { motion, AnimatePresence } from 'framer-motion' // Added AnimatePresence
import Link from 'next/link'
import { useState, useEffect } from 'react' // Added for text slider

// Import react-icons
import {
  FaHeadphones,
  FaBoxOpen,
  FaEnvelopeOpenText,
  FaCheckCircle,
  FaBullseye, // Used in the new Accountability section
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
  FaFolderOpen, // For "Browse Free Tools" button
  FaLightbulb, // For new "Like a course..." section
  FaUsers, // For new "Like a course..." section
  FaRegPaperPlane, // For the accountability button
} from 'react-icons/fa'


// --- Animation Variants ---
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
      ease: [0.23, 1, 0.32, 1], // easeOutQuint
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

// Updated text slider phrases: Now an array of objects
const textSliderPhrases = [
  { text: "Finish more tracks. No more half-finished loops.", emoji: "✅" },
  { text: "Grab free tools that actually help.", emoji: "📦" },
  { text: "Feedback that isn’t “sounds good bro”", emoji: "💬" },
  { text: "Level up your sound. Rack up more listens.", emoji: "📈" },
  { text: "Get addicted to exporting, not tweaking", emoji: "🧠" },
  { text: "Actually enjoy the process again.", emoji: "🎉" }
];

// --- Component Definition ---
export default function Home() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % textSliderPhrases.length);
    }, 3500); // Slightly longer to appreciate the animation

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  return (
    <motion.main
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
      className="overflow-x-hidden bg-white dark:bg-zinc-950"
    >
      {/* HERO SECTION - Enhanced rotating text */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-28 md:py-48 min-h-[75vh] md:min-h-[85vh] flex items-center justify-center text-center" // Adjusted min-height
      >
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Increased gap for better overall spacing in the hero content block */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 max-w-4xl mx-auto leading-tight"
            >
              Made by Bedroom Producers, <br className="hidden sm:block md:hidden"/>for Bedroom Producers. 🎧
            </motion.h1>

            {/* Dynamic Text Slider - Enhanced visibility and animation */}
            <motion.div
              variants={itemVariants}
              // Adjusted height, margin-top for more space, and text styling
              className="h-auto min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div // Changed to div to allow flex layout for text and emoji
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-center justify-center gap-2" // Flex layout for text and emoji
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 via-black to-zinc-800 dark:from-zinc-400 dark:via-white dark:to-zinc-400">
                    {textSliderPhrases[currentPhraseIndex].text}
                  </span>
                  {/* Animated emoji, not affected by gradient */}
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }} // Slight delay for emoji pop
                    className="text-zinc-700 dark:text-zinc-300" // Emoji inherits text color or can be styled separately
                  >
                    {textSliderPhrases[currentPhraseIndex].emoji}
                  </motion.span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              // Adjusted margin-top for more space
              className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl md:max-w-2xl leading-relaxed mt-5"
            >
              You’ve got 200 unfinished projects and zero idea how to name a track.
              Welcome — you’re one of us.
              This isn’t some overpriced masterclass with secrets behind a paywall.
              It’s a home for bedroom producers to learn, share what works, and actually finish music.
              Produce better. Finish more. Help each other grow.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
            >
              <Link href="#submit" passHref>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-lg text-base font-semibold flex items-center gap-2.5 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 shadow-lg"
                >
                  <FaHeadphones /> Submit Your Track
                </motion.button>
              </Link>
              <Link href="#content" passHref>
                 <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-zinc-800 dark:border-zinc-300 text-zinc-800 dark:text-zinc-100 px-8 py-3.5 rounded-lg text-base font-semibold flex items-center gap-2.5 bg-white dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200 shadow-md"
                 >
                  <FaFolderOpen /> Browse Free Tools
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* END OF HERO SECTION */}


      {/* "Like a course..." Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 max-w-4xl mx-auto"
          >
            Like a course. Minus the paywall. And the bullshit. 🖕
          </motion.h2>
          <motion.p
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4 max-w-4xl mx-auto"
          >
            Look, most "music production secrets" are just repackaged YouTube tutorials sold by dudes who peaked in 2012. This ain't that. We're not selling a dream of mainstage glory or a six-figure producer lifestyle. If that's your jam, cool, but this probably isn't your place.
          </motion.p>
           <motion.p
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-8 max-w-4xl mx-auto"
           >
            This is for the folks still figuring it out, the ones who get more excited by a new synth plugin than a new pair of shoes. It's about sharing what actually works, learning by doing (and sometimes failing), and making real, tangible progress on your tracks. No ego, no gatekeeping, just a bunch of us trying to make slightly less shit music than we did yesterday.
          </motion.p>
          <motion.div
            variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto text-left"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
              <FaLightbulb className="text-2xl text-black dark:text-white mt-1 flex-shrink-0"/>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Learn by Doing</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Real feedback, practical resources, and a focus on finishing.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
              <FaUsers className="text-2xl text-black dark:text-white mt-1 flex-shrink-0"/>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Community Focused</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Share your wins, get help on your struggles. We're in it together.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* "Set Your Goal" (Accountability) Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-100 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <span className="text-5xl mb-4 inline-block">🎯</span>
          </motion.div>
          <motion.h2
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 max-w-4xl mx-auto"
          >
            Your Weekly Hitlist: One Tiny Goal.
          </motion.h2>
          <motion.p
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-6 max-w-3xl mx-auto"
          >
            Stop staring at that 8-bar loop like it owes you money. Pick ONE thing. Just one. We'll (gently) nudge you. Or not. Whatever.
          </motion.p>
          <motion.p
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            This ain't about perfection. It's about momentum. Small wins beat big plans that never happen.
          </motion.p>

          <motion.div
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto ring-1 ring-black/5 dark:ring-white/10"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="weekly-goal" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 text-left">
                  Spill it. What's the one tiny demon you'll slay this week?
                </label>
                <input
                  type="text"
                  id="weekly-goal"
                  placeholder="e.g., 'Actually export that cursed track', 'Finish one damn verse'"
                  className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-400 dark:placeholder-zinc-500"
                />
              </div>
              <div>
                <label htmlFor="goal-deadline" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 text-left">
                  "Deadline" (be honest, champ):
                </label>
                <select
                  id="goal-deadline"
                  className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 appearance-none"
                  defaultValue="end-of-week"
                >
                  <option value="next-48-hours">Next 48hrs (You psycho)</option>
                  <option value="end-of-week">By Sunday (Classic procrastinator)</option>
                  <option value="eventually">Eventually™ (No shame)</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-lg bg-black dark:bg-white px-6 py-3.5 text-white dark:text-black font-semibold text-base hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FaRegPaperPlane /> Commit (gentle nudge)
              </motion.button>
            </form>
          </motion.div>
           <motion.p
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-xs text-zinc-500 dark:text-zinc-600 leading-relaxed mt-6 max-w-xl mx-auto"
          >
            (P.S. This is mostly for you. Full nagging-as-a-service coming soon... maybe.)
          </motion.p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900" 
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          >
            ✨ What You’ll Find Inside
          </motion.h2>
          <motion.div
             variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Track Feedback</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Honest notes from someone who’s still in the trenches.</p>
              </div>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Free Resources</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Templates, sample packs, checklists – zero fluff.</p>
              </div>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Accountability Tools</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Keep track of what you’re working on, privately or publicly.</p>
              </div>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Monthly Newsletter</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Just 1 tip, 1 tool, and 1 community win. Once a month.</p>
              </div>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">No Guru Nonsense</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Real talk for real producers making music.</p>
              </div>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-start gap-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <span className="text-xl mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">Community Wins</h3>
                <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">Sharing progress and celebrating small victories together.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Callout Section */}
      <motion.section
        id="newsletter"
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-gradient-to-r from-zinc-800 to-black text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
             <FaEnvelopeOpenText className="text-4xl text-zinc-400 mb-5 mx-auto" />
           </motion.div>
          <motion.h2
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            📬 One Email. Once a Month. That's It.
          </motion.h2>
          <motion.p
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Get one tip worth reading, one free resource worth using, and one
            small win from the Bedroom Producers crew. No spam, ever. Straight to your inbox.
          </motion.p>
          <motion.form
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
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
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200 flex-shrink-0"
            >
              Join the Newsletter
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          >
            💬 From the Community
          </motion.h2>
          <motion.div
             variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800">
              <FaQuoteLeft className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4"/>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"Finally got feedback that actually made sense and helped me fix my muddy low-end. No generic advice here."</p>
              <div className="flex items-center gap-3">
                 <FaUserCheck className="text-zinc-400 dark:text-zinc-500"/>
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Alex P.</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800">
               <FaQuoteLeft className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4"/>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"The free starter template saved me hours setting up my Ableton projects. Simple but effective stuff."</p>
              <div className="flex items-center gap-3">
                 <FaUserCheck className="text-zinc-400 dark:text-zinc-500"/>
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Samira K.</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800">
               <FaQuoteLeft className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4"/>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"Just knowing others are grinding away on their tracks too keeps me motivated. Less lonely than staring at a screen alone."</p>
              <div className="flex items-center gap-3">
                 <FaUserCheck className="text-zinc-400 dark:text-zinc-500"/>
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Jordan T.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Track Submission Section */}
      <motion.section
        id="submit"
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
               <FaUpload className="text-4xl text-black dark:text-white mb-5 mx-auto" />
             </motion.div>
             <motion.h2
               variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
              >
               🚀 Submit Your Track — Get Real Feedback
             </motion.h2>
             <motion.p
               variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto"
             >
               No gatekeeping. No waiting list. Just direct, clear feedback from someone who gets it. Upload your link, tell me what you need help with.
             </motion.p>
          </div>

          <motion.form
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="space-y-6 bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-800 max-w-3xl mx-auto"
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
              <input type="checkbox" id="feature-ok" className="mt-1 h-4 w-4 text-black dark:text-white border-zinc-300 dark:border-zinc-600 rounded focus:ring-black dark:focus:ring-offset-zinc-900 dark:focus:ring-white bg-white dark:bg-zinc-800"/>
              <label htmlFor="feature-ok" className="text-sm text-zinc-700 dark:text-zinc-300">
                It's OK to potentially feature parts of this track/feedback (anonymously if preferred) as learning content for the community.
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-lg bg-black dark:bg-white px-6 py-3.5 text-white dark:text-black font-semibold text-base hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 shadow-lg hover:shadow-xl transform flex items-center justify-center gap-2"
            >
              <FaUpload /> Submit Track for Feedback
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* How It Works Section - MOVED HERE */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          >
            ⚙️ Simple Process for Feedback
          </motion.h2>
          <motion.div
             variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800">
              <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4">
                <FaPaperPlane className="text-2xl text-black dark:text-white"/>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">1. Submit Track</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Upload a link to your work-in-progress via the simple form.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800">
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4">
                 <FaMicrophoneAlt className="text-2xl text-black dark:text-white"/>
               </div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">2. Get Feedback</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Receive honest, actionable notes on your mix, arrangement, or vibe.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800">
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4">
                 <FaSyncAlt className="text-2xl text-black dark:text-white"/>
               </div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">3. Improve & Repeat</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Apply the feedback, finish more tracks, and keep growing.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


      {/* Latest Content Section */}
       <motion.section
        id="content"
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
               <FaBook className="text-4xl text-black dark:text-white mb-5 mx-auto" />
             </motion.div>
             <motion.h2
               variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
              >
               📚 New Stuff On the Site
             </motion.h2>
             <motion.p
               variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto"
             >
                Fresh resources and insights added regularly. Grab what you need.
             </motion.p>
          </div>

          <motion.div
             variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <motion.div variants={itemVariants} className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
              <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/e2e8f0/475569?text=Blog+Post"
                    alt="Blog post illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">5 Ways to Escape Loop Hell</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Practical tips to break free from the 8-bar trap and actually finish tracks.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Read Post <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </motion.div>
             <motion.div variants={itemVariants} className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
              <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
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
            </motion.div>
             <motion.div variants={itemVariants} className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
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
            </motion.div>
              <motion.div variants={itemVariants} className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
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
            </motion.div>
              <motion.div variants={itemVariants} className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
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
            </motion.div>
              <motion.div variants={itemVariants} className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <Link href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
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
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            <Link href="#" className="text-base font-semibold text-black dark:text-white hover:underline underline-offset-4 flex items-center gap-2 transition-colors">
               <FaBook /> See All Posts & Guides
            </Link>
            <Link href="#" className="text-base font-semibold text-black dark:text-white hover:underline underline-offset-4 flex items-center gap-2 transition-colors">
              <FaDownload /> Browse All Free Resources
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </motion.main>
  )
}

