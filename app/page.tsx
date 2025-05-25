'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

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

// Text slider phrases from user's copy
const textSliderPhrases = [
  { text: "Finish more tracks. No more half-finished loops.", emoji: "✅" },
  { text: "Grab free tools that actually help.", emoji: "📦" },
  { text: "Feedback that isn’t “sounds good bro”", emoji: "💬" },
  { text: "Level up your sound. Rack up more listens.", emoji: "📈" },
  { text: "Get addicted to exporting, not tweaking", emoji: "🧠" },
  { text: "Actually enjoy the process again.", emoji: "😊" }
];

// --- Component Definition ---
export default function Home() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % textSliderPhrases.length);
    }, 3500); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.main
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
      className="overflow-x-hidden bg-white dark:bg-zinc-950 font-sans"
    >
      {/* 1. HERO SECTION */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-28 md:py-48 min-h-[75vh] md:min-h-[85vh] flex items-center justify-center text-center"
      >
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 max-w-4xl mx-auto leading-tight"
            >
              🎧 A Site for People Who Make Music in Their Rooms.
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-auto min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 via-black to-zinc-800 dark:from-zinc-400 dark:via-white dark:to-zinc-400">
                    {textSliderPhrases[currentPhraseIndex].text}
                  </span>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="text-zinc-700 dark:text-zinc-300"
                  >
                    {textSliderPhrases[currentPhraseIndex].emoji}
                  </motion.span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 max-w-xl md:max-w-2xl lg:max-w-3xl leading-relaxed mt-6 mb-8 mx-auto" // Increased font size, max-width, and added bottom margin
            >
              Tired of the usual online hype and actually want to <strong className="text-zinc-900 dark:text-white">finish more, better music?</strong>
              <br className="my-2 hidden sm:block" /> {/* Added a line break for larger screens */}
              That’s why Bedroom Producers exists. We're your stripped-back home for what <strong className="text-zinc-900 dark:text-white">actually moves the needle:</strong> brutally honest track feedback, no-BS tools designed to help you finish, and a <strong className="text-zinc-900 dark:text-white">real community</strong> of producers united in the grind, focused on making better music track by track, and achieving <strong className="text-orange-500 dark:text-orange-400">actual traction.</strong>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
            >
              <a href="#submit" className="block">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px -5px rgba(251, 146, 60, 0.4)" }} 
                  whileTap={{ scale: 0.98 }}
                  className="bg-orange-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold flex items-center gap-2.5 hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span role="img" aria-label="headphones emoji" className="mr-1">🎧</span> Submit a Track for Feedback
                </motion.button>
              </a>
              <a href="#content" className="block">
                 <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-zinc-800 dark:border-zinc-300 text-zinc-800 dark:text-zinc-100 px-8 py-3.5 rounded-lg text-base font-semibold flex items-center gap-2.5 bg-white dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200 shadow-md hover:shadow-lg"
                 >
                  <span role="img" aria-label="package emoji" className="mr-1">📦</span> Browse Free Tools and Templates
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* END OF HERO SECTION */}

      {/* 2. Track Submission Section (Main Interactive Form, id="submit") */}
      <motion.section
        id="submit" 
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950" 
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <motion.h2
               variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
              >
               Need feedback on a track? That is the main thing we do. <span role="img" aria-label="rocket emoji" className="ml-1">🚀</span>
             </motion.h2>
             <motion.p 
               variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-8"
             >
               Use the form below to send your track. No gatekeeping. No waiting list. Just direct, clear feedback from someone who gets it.
             </motion.p>
          </div>
          
          <motion.div className="mb-16">
            <motion.div
                variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
            >
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow">
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                    <span role="img" aria-label="paper plane" className="text-3xl">✈️</span> 
                </div>
                <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">1. Submit Your Track</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Use the form to upload a link to your work-in-progress and tell us what you need help with.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow">
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                    <span role="img" aria-label="microphone" className="text-3xl">🎤</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">2. Get Constructive Feedback</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Receive honest, actionable notes on your mix, arrangement, sound design, or overall vibe.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow">
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                    <span role="img" aria-label="arrows counterclockwise" className="text-3xl">🔄</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">3. Improve & Repeat</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Apply the insights, refine your track, finish more music, and keep growing as a producer.</p>
                </motion.div>
            </motion.div>
          </motion.div>

          <motion.form
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="space-y-6 bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 max-w-3xl mx-auto"
             onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Name</label>
              <input type="text" id="name" placeholder="Your Name" required className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-500 dark:placeholder-zinc-400" />
            </div>
             <div>
               <label htmlFor="track-link-main" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Track Link (SoundCloud/Dropbox/etc.)</label>
              <input type="url" id="track-link-main" placeholder="SoundCloud / Dropbox / Google Drive Link etc." required className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-500 dark:placeholder-zinc-400" />
             </div>
             <div>
               <label htmlFor="feedback-type-main" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Type of Feedback:</label>
              <select id="feedback-type-main" required defaultValue="" className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 appearance-none placeholder-zinc-500 dark:placeholder-zinc-400">
                <option value="" disabled className="text-zinc-500 dark:text-zinc-400">Mix, Arrangement, Sound Design, Vocals, General, Stuck</option>
                <option value="mix">Mix / Master Clarity</option>
                <option value="arrangement">Arrangement / Structure</option>
                <option value="sound-design">Sound Design / Sample Choice</option>
                <option value="vocals">Vocals (if applicable)</option>
                <option value="general">General Impression / Vibe</option>
                <option value="stuck">I'm Stuck - Help!</option>
              </select>
             </div>
             <div>
               <label htmlFor="notes-main" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Notes (Optional)</label>
               <textarea id="notes-main" placeholder="e.g., 'Is the kick too loud?', 'How can I improve the drop?'" rows={3} className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-500 dark:placeholder-zinc-400"></textarea>
            </div>
            <div className="flex items-start space-x-3 pt-2">
              <input type="checkbox" id="feature-ok-main" className="mt-1 h-4 w-4 text-orange-500 border-zinc-300 dark:border-zinc-600 rounded focus:ring-orange-500 dark:focus:ring-offset-zinc-900 bg-white dark:bg-zinc-800"/>
              <label htmlFor="feature-ok-main" className="text-sm text-zinc-700 dark:text-zinc-300">
                <span role="img" aria-label="check mark emoji" className="mr-1">✅</span> It's OK to potentially feature this track as learning content
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px -5px rgba(251, 146, 60, 0.4)" }} 
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-6 py-3.5 text-white font-semibold text-base hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform flex items-center justify-center gap-2"
            >
              <span role="img" aria-label="envelope with arrow emoji" className="mr-1">📨</span> Submit Track for Feedback
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
      {/* END OF Track Submission Section */}


      {/* 3. Core Belief Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900" 
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-10 max-w-3xl mx-auto flex items-center justify-center gap-3"
          >
            <span role="img" aria-label="light bulb" className="text-4xl">💡</span> Our Core Belief
          </motion.h2>
          <motion.div
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto space-y-6 text-center"
          >
            <p>In a world choked with "secret" sauce tutorials, overpriced courses, and endless gear debates, it’s easy to lose sight of what actually moves the needle. Everyone’s selling a shortcut, a magic plugin, or a complex strategy that promises the world but often just adds to the noise. We believe it's much simpler – and much more powerful – than all that.</p>
            <p className="mt-4">Our core belief boils down to this fundamental truth for the modern bedroom producer:</p>
          </motion.div>
            
          <motion.div 
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="my-12 p-8 sm:p-10 bg-gradient-to-br from-zinc-800 to-black dark:from-zinc-900 dark:to-zinc-950 rounded-xl shadow-2xl text-center max-w-2xl mx-auto space-y-4"
          >
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-zinc-100 tracking-tight">Consistent Creation</h3>
                <p className="text-lg text-zinc-300 dark:text-zinc-400">(Making music regularly)</p>
            </div>
            <div className="text-4xl font-light text-zinc-400 dark:text-zinc-500">+</div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-zinc-100 tracking-tight">Relentless Iteration</h3>
                <p className="text-lg text-zinc-300 dark:text-zinc-400">(Making Good Music)</p>
            </div>
            <div className="text-4xl font-light text-zinc-400 dark:text-zinc-500">=</div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-zinc-100 tracking-tight">Actual Traction</h3>
                <p className="text-lg text-zinc-300 dark:text-zinc-400">(success <span role="img" aria-label="money bag emoji">💰</span>)</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto space-y-6 text-center"
          >
            <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mt-8">Why This Simple Formula?</h3>
            <p>Because in this day and age, with the tools available to you, this direct approach is what truly builds skill, an audience, and a sustainable path forward. When your music is consistently good, and you're consistently putting it out there and improving, it starts to gain traction – more listens, genuine engagement, people seeking it out. While marketing, networking, and a hundred other things can play a role, they are all secondary to the fundamental power of good music, born from this process, finding its footing and building momentum.</p>
          </motion.div>
        </div>
      </motion.section>
      {/* END OF Core Belief Section */}

      {/* 4. "The Stuff You Wish Music School Actually Taught" Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950" 
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-10 max-w-4xl mx-auto flex items-center justify-center gap-3"
          >
            <span role="img" aria-label="thinking face emoji" className="text-4xl">🤔</span> The Stuff You Wish Music School Actually Taught <br className="hidden sm:block"/> — Without the $1200 Price Tag
          </motion.h2>
          
          <motion.div 
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} 
            className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-12 max-w-3xl mx-auto text-left space-y-6 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700"
          >
            <p>Let's be brutally honest: most "secret" courses <span role="img" aria-label="money with wings">💸</span> are overpriced, recycled info. Traditional music schools <span role="img" aria-label="graduation cap">🎓</span> often bury you in outdated theory. And the YouTube abyss <span role="img" aria-label="dizzy face">😵‍💫</span>? A clickbait haystack. After all that, the real skills—finishing tracks, building a workflow—are often ignored. So, what are we about? Simple: No ego, no gatekeeping, no guru nonsense. Just us, making slightly less shit music than we did yesterday. </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
             <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mt-12 mb-8">And here’s some of the practical stuff you’ll get access to:</p>
          </motion.div>

             <motion.div
                variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mx-auto max-w-6xl" 
            >
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-3xl mt-0.5" role="img" aria-label="check mark emoji">✅</span>
                    <div>
                        <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100 mb-1">Genuinely Free Resources</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Killer templates, curated sample packs, and no-BS checklists. All free, no upsells disguised as gifts.</p>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-3xl mt-0.5" role="img" aria-label="check mark emoji">✅</span>
                    <div>
                        <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100 mb-1">Simple Accountability Tools</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Keep your projects moving forward, whether you track your progress privately or share it with the community.</p>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-shadow">
                     <span className="text-3xl mt-0.5" role="img" aria-label="check mark emoji">✅</span>
                    <div>
                        <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100 mb-1">The One-Minute Monthly</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Our newsletter promises just 1 killer tip, 1 useful tool, and 1 community win. Once a month. No fluff, ever.</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
      </motion.section>
      {/* END OF "The Stuff You Wish Music School Actually Taught" Section */}

      {/* 5. "Set Your Goal" (Accountability) Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <span className="text-5xl mb-4 inline-block" role="img" aria-label="target emoji">🎯</span>
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
            className="bg-zinc-50 dark:bg-zinc-800/70 p-8 sm:p-10 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 max-w-xl mx-auto ring-1 ring-black/5 dark:ring-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="weekly-goal" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 text-left">
                  "Spill it. What's the one tiny demon you'll slay this week?"
                </label>
                <input
                  type="text"
                  id="weekly-goal"
                  placeholder="e.g., 'Actually export that cursed track', 'Finish one damn verse'"
                  className="w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition duration-200 placeholder-zinc-400 dark:placeholder-zinc-500"
                />
              </div>
              
              <div>
                <label htmlFor="goal-deadline" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 text-left  mt-4">
                  "Deadline":
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
                <span role="img" aria-label="check mark emoji" className="mr-1">✅</span> Commit (gentle nudge)
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
       {/* END OF "Set Your Goal" Section */}

      {/* 6. Newsletter Callout Section */}
      <motion.section
        id="newsletter"
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-gradient-to-r from-zinc-800 to-black text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
             <span role="img" aria-label="envelope with arrow emoji" className="text-4xl text-zinc-400 mb-5 mx-auto inline-block">📨</span>
           </motion.div>
          <motion.h2
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span role="img" aria-label="mailbox emoji" className="mr-2">📬</span> One Email. Once a Month. That's It.
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
             onSubmit={(e) => e.preventDefault()}
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
              <span role="img" aria-label="inbox tray emoji" className="mr-2">📥</span> Join the Newsletter
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
      {/* END OF Newsletter Callout Section */}

      {/* 7. Testimonials Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-white dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          >
            <span role="img" aria-label="speech bubble emoji" className="mr-2">💬</span> From the Community
          </motion.h2>
          <motion.div
             variants={VARIANTS_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow">
              <span role="img" aria-label="left quotation mark" className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4 inline-block">“</span>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"Finally got feedback that actually made sense and helped me fix my muddy low-end. No generic advice here."</p>
              <div className="flex items-center gap-3">
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">– Alex P.</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow">
               <span role="img" aria-label="left quotation mark" className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4 inline-block">“</span>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"The free starter template saved me hours setting up my Ableton projects. Simple but effective stuff."</p>
              <div className="flex items-center gap-3">
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">– Samira K.</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow">
               <span role="img" aria-label="left quotation mark" className="text-zinc-300 dark:text-zinc-700 text-3xl mb-4 inline-block">“</span>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">"Just knowing others are grinding away on their tracks too keeps me motivated. Less lonely than staring at a screen alone."</p>
              <div className="flex items-center gap-3">
                 <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">– Jordan T.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* END OF Testimonials Section */}


      {/* 8. Latest Content Section (id="content") */}
       <motion.section
        id="content" // ID for hero button link
        variants={VARIANTS_SECTION}
        className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
               <span role="img" aria-label="books emoji" className="text-4xl text-black dark:text-white mb-5 mx-auto inline-block">📚</span>
             </motion.div>
             <motion.h2
               variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
               className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
              >
               <span role="img" aria-label="books emoji" className="mr-2">📚</span> New Stuff On the Site
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
            <motion.div variants={itemVariants} className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/e2e8f0/475569?text=Blog+Post"
                    alt="Blog post illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white"><span role="img" aria-label="brain emoji" className="mr-1">🧠</span> 5 Ways to Escape Loop Hell</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Practical tips to break free from the 8-bar trap.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Read Post</span>
                </div>
              </a>
            </motion.div>
             <motion.div variants={itemVariants} className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   <img
                    src="https://placehold.co/600x400/cbd5e1/334155?text=Template"
                    alt="Ableton template illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 mb-2"> <span role="img" aria-label="download icon" className="text-zinc-700 dark:text-zinc-300">📥</span> <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Free Download</span> </div>
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white"><span role="img" aria-label="inbox tray emoji" className="mr-1">📥</span> Ableton Starter Template v2</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Routing, grouping, and FX setup.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Get Template</span>
                </div>
              </a>
            </motion.div>
             <motion.div variants={itemVariants} className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   <img
                    src="https://placehold.co/600x400/e0f2fe/075985?text=Checklist"
                    alt="Checklist illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 mb-2"> <span role="img" aria-label="download icon" className="text-zinc-700 dark:text-zinc-300">📥</span> <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Free Download</span> </div>
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white"><span role="img" aria-label="check mark emoji" className="mr-1">✅</span> Mixing Reset Checklist (PDF)</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Simplify your mix decisions.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Download PDF</span>
                </div>
              </a>
            </motion.div>
              <motion.div variants={itemVariants} className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   <img
                    src="https://placehold.co/600x400/fecaca/991b1b?text=Challenge"
                    alt="Challenge illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white"><span role="img" aria-label="repeat emoji" className="mr-1">🔁</span> Loop Slayer Challenge #01</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Flip this groove and submit your take.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">View Challenge</span>
                </div>
              </a>
            </motion.div>
              <motion.div variants={itemVariants} className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   <img
                    src="https://placehold.co/600x400/a7f3d0/047857?text=Tip"
                    alt="Quick tip illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white"><span role="img" aria-label="lightning emoji" className="mr-1">⚡</span> Quick Tip: Sidechain Reverb</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Duck reverb tails for cleaner mixes.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Read Tip</span>
                </div>
              </a>
            </motion.div>
              <motion.div variants={itemVariants} className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:border-black dark:hover:border-zinc-600 transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
               <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                   <img
                    src="https://placehold.co/600x400/c7d2fe/4338ca?text=Sample+Pack"
                    alt="Sample pack illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 mb-2"> <span role="img" aria-label="download icon" className="text-zinc-700 dark:text-zinc-300">📥</span> <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Free Download</span> </div>
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white"><span role="img" aria-label="drum emoji" className="mr-1">🥁</span> Lo-Fi Drums Vol. 1</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">Free pack of dusty drum one-shots.</p>
                  <span className="text-sm font-medium text-black dark:text-white flex items-center gap-1 group-hover:underline">Download Pack</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            <a href="#" className="text-base font-semibold text-black dark:text-white hover:underline underline-offset-4 flex items-center gap-2 transition-colors">
               <span role="img" aria-label="open book emoji" className="mr-1">📖</span> See All Posts & Guides
            </a>
            <a href="#" className="text-base font-semibold text-black dark:text-white hover:underline underline-offset-4 flex items-center gap-2 transition-colors">
              <span role="img" aria-label="package emoji" className="mr-1">📦</span> Browse All Free Resources
            </a>
          </motion.div>
        </div>
      </motion.section>
      {/* END OF Latest Content Section */}

    </motion.main>
  )
}
