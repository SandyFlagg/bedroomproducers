// app/page.js
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

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
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

// Updated itemVariants for smoother, more deliberate animation
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeInOut' }, // Adjusted duration and easing
  },
}

// Text slider phrases
const textSliderPhrases = [
  { text: 'Finish more tracks. No more half-finished loops.', emoji: '✅' },
  { text: 'Grab free tools that actually help.', emoji: '📦' },
  { text: 'Feedback that isn’t “sounds good bro”', emoji: '💬' },
  { text: 'Level up your sound. Rack up more listens.', emoji: '📈' },
  { text: 'Get addicted to exporting, not tweaking', emoji: '🧠' },
  { text: 'Actually enjoy the process again.', emoji: '😊' },
]

// --- Component Definition for the Page ---
export default function HomePage() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex(
        (prevIndex) => (prevIndex + 1) % textSliderPhrases.length,
      )
    }, 3500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <motion.div
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
      className="overflow-x-hidden font-sans"
    >
      {/* 1. HERO SECTION with IMAGE BACKGROUND - Polished */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="relative flex min-h-[75vh] items-center justify-center overflow-hidden py-28 text-center md:min-h-[85vh] md:py-48"
      >
        <Image
          src="/hero_good.jpg"
          alt="Bedroom music producer setup with vibrant lighting"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        {/* Strengthened Overlay for "faded" effect */}
        <div className="absolute top-0 left-0 z-[1] h-full w-full bg-black/[.70]"></div>{' '}
        {/* Approx 70% opacity black overlay */}
        <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <motion.h1
              variants={itemVariants}
              // Added subtle text shadow for better definition
              className="mx-auto max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] filter sm:text-4xl md:text-5xl lg:text-6xl dark:text-zinc-100 dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]"
            >
              A Site for People Who Make Music in Their Rooms. 🎧
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-3 flex h-auto min-h-[3rem] items-center justify-center text-2xl font-semibold md:mt-4 md:min-h-[3.5rem] md:text-3xl lg:min-h-[4rem] lg:text-4xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} // Kept this distinct animation
                  // Added subtle text shadow to animated text
                  className="flex items-center justify-center gap-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] filter dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
                >
                  <span className="bg-gradient-to-r from-zinc-300 via-white to-zinc-200 bg-clip-text text-transparent dark:from-zinc-400 dark:via-white dark:to-zinc-400">
                    {textSliderPhrases[currentPhraseIndex].text}
                  </span>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="text-zinc-200 dark:text-zinc-300"
                  >
                    {textSliderPhrases[currentPhraseIndex].emoji}
                  </motion.span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              // Added subtle text shadow for paragraph
              className="mx-auto mt-6 mb-8 max-w-xl text-base leading-relaxed text-zinc-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] filter md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl dark:text-zinc-300 dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            >
              Tired of the usual online hype and actually want to{' '}
              <strong className="text-white dark:text-white">
                finish more, better music?
              </strong>
              <br className="my-2 hidden sm:block" />
              That’s why Bedroom Producers exists. We're your stripped-back home
              for what{' '}
              <strong className="text-white dark:text-white">
                actually moves the needle:
              </strong>{' '}
              brutally honest track feedback, no-BS tools designed to help you
              finish, and a{' '}
              <strong className="text-white dark:text-white">
                real community
              </strong>{' '}
              of producers united in the grind, focused on making better music
              track by track, and achieving{' '}
              <strong className="text-orange-400 dark:text-orange-400">
                actual traction.
              </strong>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a href="#submit" className="block">
                <motion.button
                  // Enhanced hover state
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow: '0px 12px 25px -8px rgba(251, 146, 60, 0.5)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 rounded-lg bg-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:shadow-xl"
                >
                  <span
                    role="img"
                    aria-label="headphones emoji"
                    className="mr-1"
                  >
                    🎧
                  </span>{' '}
                  Submit a Track for Feedback
                </motion.button>
              </a>
              <a href="#content" className="block">
                <motion.button
                  // Enhanced hover state
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow: '0px 12px 25px -8px rgba(255,255,255,0.15)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 rounded-lg border border-zinc-300 bg-white/10 px-8 py-3.5 text-base font-semibold text-zinc-100 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:shadow-lg dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <span role="img" aria-label="package emoji" className="mr-1">
                    📦
                  </span>{' '}
                  Browse Free Tools and Templates
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* END OF HERO SECTION */}

      {/* 2. Track Submission Section */}
      <motion.section
        id="submit"
        variants={VARIANTS_SECTION}
        className="bg-zinc-50 py-20 md:py-28 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.h2
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-100"
            >
              Need feedback on a track? That is the main thing we do.{' '}
              <span role="img" aria-label="rocket emoji" className="ml-1">
                🚀
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-400"
            >
              Use the form below to send your track. No gatekeeping. No waiting
              list. Just direct, clear feedback from someone who gets it.
            </motion.p>
          </div>

          <motion.div className="mb-16">
            <motion.div
              variants={VARIANTS_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center rounded-xl border border-zinc-100 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 p-4 dark:bg-zinc-800">
                  <span
                    role="img"
                    aria-label="paper plane"
                    className="text-3xl"
                  >
                    ✈️
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  1. Submit Your Track
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Use the form to upload a link to your work-in-progress and
                  tell us what you need help with.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center rounded-xl border border-zinc-100 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 p-4 dark:bg-zinc-800">
                  <span role="img" aria-label="microphone" className="text-3xl">
                    🎤
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  2. Get Constructive Feedback
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Receive honest, actionable notes on your mix, arrangement,
                  sound design, or overall vibe.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center rounded-xl border border-zinc-100 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 p-4 dark:bg-zinc-800">
                  <span
                    role="img"
                    aria-label="arrows counterclockwise"
                    className="text-3xl"
                  >
                    🔄
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  3. Improve & Repeat
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Apply the insights, refine your track, finish more music, and
                  keep growing as a producer.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.form
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto max-w-3xl space-y-6 rounded-xl border border-zinc-200 bg-white p-8 shadow-2xl md:p-10 dark:border-zinc-800 dark:bg-zinc-900"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-500 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white"
              />
            </div>
            <div>
              <label
                htmlFor="track-link-main"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Track Link (SoundCloud/Dropbox/etc.)
              </label>
              <input
                type="url"
                id="track-link-main"
                placeholder="SoundCloud / Dropbox / Google Drive Link etc."
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-500 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white"
              />
            </div>
            <div>
              <label
                htmlFor="feedback-type-main"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Type of Feedback:
              </label>
              <select
                id="feedback-type-main"
                required
                defaultValue=""
                className="w-full appearance-none rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-500 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white"
              >
                <option
                  value=""
                  disabled
                  className="text-zinc-500 dark:text-zinc-400"
                >
                  Mix, Arrangement, Sound Design, Vocals, General, Stuck
                </option>
                <option value="mix">Mix / Master Clarity</option>
                <option value="arrangement">Arrangement / Structure</option>
                <option value="sound-design">
                  Sound Design / Sample Choice
                </option>
                <option value="vocals">Vocals (if applicable)</option>
                <option value="general">General Impression / Vibe</option>
                <option value="stuck">I'm Stuck - Help!</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="notes-main"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Notes (Optional)
              </label>
              <textarea
                id="notes-main"
                placeholder="e.g., 'Is the kick too loud?', 'How can I improve the drop?'"
                rows={3}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-500 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white"
              ></textarea>
            </div>
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                id="feature-ok-main"
                className="mt-1 h-4 w-4 rounded border-zinc-300 bg-white text-orange-500 focus:ring-orange-500 dark:border-zinc-600 dark:bg-zinc-800 dark:focus:ring-offset-zinc-900"
              />
              <label
                htmlFor="feature-ok-main"
                className="text-sm text-zinc-700 dark:text-zinc-300"
              >
                <span role="img" aria-label="check mark emoji" className="mr-1">
                  ✅
                </span>{' '}
                It's OK to potentially feature this track as learning content
              </label>
            </div>
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: '0px 10px 20px -5px rgba(251, 146, 60, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex w-full transform items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-orange-600 hover:shadow-xl"
            >
              <span
                role="img"
                aria-label="envelope with arrow emoji"
                className="mr-1"
              >
                📨
              </span>{' '}
              Submit Track for Feedback
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
      {/* END OF Track Submission Section */}

      {/* 3. "The Stuff You Wish Music School Actually Taught" Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="bg-zinc-50 py-20 md:py-28 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mb-10 flex max-w-4xl items-center justify-center gap-3 text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-100"
          >
            <span
              role="img"
              aria-label="thinking face emoji"
              className="text-4xl"
            >
              🤔
            </span>{' '}
            The Stuff You Wish Music School Actually Taught{' '}
            <br className="hidden sm:block" /> — Without the $1200 Price Tag
          </motion.h2>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mt-12 mb-8 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
              And here’s some of the practical stuff you’ll get access to:
            </p>
          </motion.div>

          <motion.div
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span
                className="mt-0.5 text-3xl"
                role="img"
                aria-label="check mark emoji"
              >
                ✅
              </span>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Actionable DAW Templates
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Jumpstart your tracks with pre-routed Ableton, Logic & FL
                  Studio project files. No more blank canvas paralysis.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span
                className="mt-0.5 text-3xl"
                role="img"
                aria-label="check mark emoji"
              >
                ✅
              </span>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  "Finish Faster" Checklists
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Step-by-step guides for mixing, arrangement, and mastering, so
                  you always know the next practical step.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span
                className="mt-0.5 text-3xl"
                role="img"
                aria-label="check mark emoji"
              >
                ✅
              </span>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  The 60-Second Gear Guide
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Cut through the hype: quick, practical advice on essential
                  gear that actually improves your sound.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span
                className="mt-0.5 text-3xl"
                role="img"
                aria-label="check mark emoji"
              >
                ✅
              </span>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Feedback That Fixes Problems
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Submit your tracks and get specific, actionable advice on what
                  to improve, not just "sounds good."
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span
                className="mt-0.5 text-3xl"
                role="img"
                aria-label="check mark emoji"
              >
                ✅
              </span>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  No-Nonsense Sample Packs
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Curated, high-quality sounds you'll actually use, without
                  wading through gigabytes of filler.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span
                className="mt-0.5 text-3xl"
                role="img"
                aria-label="check mark emoji"
              >
                ✅
              </span>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Monthly "Finish It" Challenges
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Gentle prompts and support to complete one track
                  start-to-finish each month. Victory laps encouraged.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* END OF "The Stuff You Wish Music School Actually Taught" Section */}

      {/* 4. Core Belief Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="bg-white py-20 md:py-28 dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mb-10 flex max-w-3xl items-center justify-center gap-3 text-center text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-100"
          >
            <span role="img" aria-label="light bulb" className="text-4xl">
              💡
            </span>{' '}
            Our Core Belief
          </motion.h2>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-zinc-700 dark:text-zinc-400"
          >
            <p>
              In a world choked with "secret" sauce tutorials, overpriced
              courses, and endless gear debates, it’s easy to lose sight of what
              actually moves the needle. Everyone’s selling a shortcut, a magic
              plugin, or a complex strategy that promises the world but often
              just adds to the noise. We believe it's much simpler – and much
              more powerful – than all that.
            </p>
            <p className="mt-4">
              Our core belief boils down to this fundamental truth for the
              modern bedroom producer:
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto my-12 max-w-2xl space-y-4 rounded-xl bg-gradient-to-br from-zinc-800 to-black p-8 text-center shadow-2xl sm:p-10 dark:from-zinc-900 dark:to-zinc-950"
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl dark:text-zinc-100">
                Consistent Creation
              </h3>
              <p className="text-lg text-zinc-300 dark:text-zinc-400">
                (Making music regularly)
              </p>
            </div>
            <div className="text-4xl font-light text-zinc-400 dark:text-zinc-500">
              +
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl dark:text-zinc-100">
                Relentless Iteration
              </h3>
              <p className="text-lg text-zinc-300 dark:text-zinc-400">
                (Making Good Music)
              </p>
            </div>
            <div className="text-4xl font-light text-zinc-400 dark:text-zinc-500">
              =
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl dark:text-zinc-100">
                Actual Traction
              </h3>
              <p className="text-lg text-zinc-300 dark:text-zinc-400">
                (success{' '}
                <span role="img" aria-label="money bag emoji">
                  💰
                </span>
                )
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-zinc-700 dark:text-zinc-400"
          >
            <h3 className="mt-8 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
              Why This Simple Formula?
            </h3>
            <p>
              Because in this day and age, with the tools available to you, this
              direct approach is what truly builds skill, an audience, and a
              sustainable path forward. When your music is consistently good,
              and you're consistently putting it out there and improving, it
              starts to gain traction – more listens, genuine engagement, people
              seeking it out. While marketing, networking, and a hundred other
              things can play a role, they are all secondary to the fundamental
              power of good music, born from this process, finding its footing
              and building momentum.
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* END OF Core Belief Section */}

      {/* 5. "Set Your Goal" Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="bg-white py-20 md:py-28 dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span
              className="mb-4 inline-block text-5xl"
              role="img"
              aria-label="target emoji"
            >
              🎯
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mb-3 max-w-4xl text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-100"
          >
            Your Weekly Hitlist: One Tiny Goal.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-400"
          >
            Stop staring at that 8-bar loop like it owes you money. Pick ONE
            thing. Just one. We'll (gently) nudge you. Or not. Whatever.
          </motion.p>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-500"
          >
            This ain't about perfection. It's about momentum. Small wins beat
            big plans that never happen.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto max-w-xl rounded-xl border border-zinc-200 bg-zinc-50 p-8 ring-1 shadow-2xl ring-black/5 sm:p-10 dark:border-zinc-700 dark:bg-zinc-800/70 dark:ring-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="weekly-goal"
                  className="mb-1.5 block text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  "Spill it. What's the one tiny demon you'll slay this week?"
                </label>
                <input
                  type="text"
                  id="weekly-goal"
                  placeholder="e.g., 'Actually export that cursed track', 'Finish one damn verse'"
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-400 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:ring-white"
                />
              </div>

              <div>
                <label
                  htmlFor="goal-deadline"
                  className="mt-4 mb-1.5 block text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  "Deadline":
                </label>
                <select
                  id="goal-deadline"
                  className="w-full appearance-none rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-black transition duration-200 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white"
                  defaultValue="end-of-week"
                >
                  <option value="next-48-hours">Next 48hrs (You psycho)</option>
                  <option value="end-of-week">
                    By Sunday (Classic procrastinator)
                  </option>
                  <option value="eventually">Eventually™ (No shame)</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-zinc-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                <span role="img" aria-label="check mark emoji" className="mr-1">
                  ✅
                </span>{' '}
                Commit (gentle nudge)
              </motion.button>
            </form>
          </motion.div>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-600"
          >
            (P.S. This is mostly for you. Full nagging-as-a-service coming
            soon... maybe.)
          </motion.p>
        </div>
      </motion.section>
      {/* END OF "Set Your Goal" Section */}

      {/* 6. Newsletter Callout Section */}
      <motion.section
        id="newsletter"
        variants={VARIANTS_SECTION}
        className="bg-gradient-to-r from-zinc-800 to-black py-20 text-white md:py-28"
      >
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span
              role="img"
              aria-label="envelope with arrow emoji"
              className="mx-auto mb-5 inline-block text-4xl text-zinc-400"
            >
              📨
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            <span role="img" aria-label="mailbox emoji" className="mr-2">
              📬
            </span>{' '}
            One Email. Once a Month. That's It.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-zinc-300"
          >
            Get one tip worth reading, one free resource worth using, and one
            small win from the Bedroom Producers crew. No spam, ever. Straight
            to your inbox.
          </motion.p>

          <motion.form
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@email.com"
              required
              className="w-full flex-grow rounded-lg border border-zinc-600 bg-zinc-700 px-4 py-3 text-white placeholder-zinc-400 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none sm:w-auto"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex-shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-zinc-200 sm:w-auto"
            >
              <span role="img" aria-label="inbox tray emoji" className="mr-2">
                📥
              </span>{' '}
              Join the Newsletter
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
      {/* END OF Newsletter Callout Section */}

      {/* 7. Testimonials Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        className="bg-white py-20 md:py-28 dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-12 text-center text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-100"
          >
            <span role="img" aria-label="speech bubble emoji" className="mr-2">
              💬
            </span>{' '}
            From the Community
          </motion.h2>

          <motion.div
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800/70"
            >
              <div
                className="mb-3 text-lg text-yellow-400"
                role="img"
                aria-label="5 out of 5 stars"
              >
                ⭐⭐⭐⭐⭐
              </div>
              <p className="mb-4 flex-grow leading-relaxed text-zinc-700 italic dark:text-zinc-300">
                "Finally got feedback that actually made sense and helped me fix
                my muddy low-end. No generic advice here."
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-zinc-200 pt-3 dark:border-zinc-700">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  – Alex P.
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800/70"
            >
              <div
                className="mb-3 text-lg text-yellow-400"
                role="img"
                aria-label="5 out of 5 stars"
              >
                ⭐⭐⭐⭐⭐
              </div>
              <p className="mb-4 flex-grow leading-relaxed text-zinc-700 italic dark:text-zinc-300">
                "The free starter template saved me hours setting up my Ableton
                projects. Simple but effective stuff."
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-zinc-200 pt-3 dark:border-zinc-700">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  – Samira K.
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800/70"
            >
              <div
                className="mb-3 text-lg text-yellow-400"
                role="img"
                aria-label="5 out of 5 stars"
              >
                ⭐⭐⭐⭐⭐
              </div>
              <p className="mb-4 flex-grow leading-relaxed text-zinc-700 italic dark:text-zinc-300">
                "Just knowing others are grinding away on their tracks too keeps
                me motivated. Less lonely than staring at a screen alone."
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-zinc-200 pt-3 dark:border-zinc-700">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  – Jordan T.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* END OF Testimonials Section */}

      {/* 8. Latest Content Section (id="content") */}
      <motion.section
        id="content"
        variants={VARIANTS_SECTION}
        className="bg-zinc-50 py-20 md:py-28 dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <span
                role="img"
                aria-label="newspaper emoji"
                className="mx-auto mb-5 inline-block text-4xl text-black dark:text-white"
              >
                📰
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-100"
            >
              <span role="img" aria-label="newspaper emoji" className="mr-2">
                📰
              </span>{' '}
              New Stuff On the Site
            </motion.h2>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-400"
            >
              Fresh resources and insights added regularly. Grab what you need.
            </motion.p>
          </div>

          <motion.div
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div
              variants={itemVariants}
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-black hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
            >
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/e2e8f0/475569?text=Blog+Post"
                    alt="Blog post illustration"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
                    <span role="img" aria-label="brain emoji" className="mr-1">
                      🧠
                    </span>{' '}
                    5 Ways to Escape Loop Hell
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Practical tips to break free from the 8-bar trap.
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-black group-hover:underline dark:text-white">
                    Read Post
                  </span>
                </div>
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-black hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
            >
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/cbd5e1/334155?text=Template"
                    alt="Ableton template illustration"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    {' '}
                    <span
                      role="img"
                      aria-label="download icon"
                      className="text-zinc-700 dark:text-zinc-300"
                    >
                      📥
                    </span>{' '}
                    <span className="text-xs font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                      Free Download
                    </span>{' '}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
                    <span
                      role="img"
                      aria-label="inbox tray emoji"
                      className="mr-1"
                    >
                      📥
                    </span>{' '}
                    Ableton Starter Template v2
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Routing, grouping, and FX setup.
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-black group-hover:underline dark:text-white">
                    Get Template
                  </span>
                </div>
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-black hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
            >
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/e0f2fe/075985?text=Checklist"
                    alt="Checklist illustration"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    {' '}
                    <span
                      role="img"
                      aria-label="download icon"
                      className="text-zinc-700 dark:text-zinc-300"
                    >
                      📥
                    </span>{' '}
                    <span className="text-xs font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                      Free Download
                    </span>{' '}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
                    <span
                      role="img"
                      aria-label="check mark emoji"
                      className="mr-1"
                    >
                      ✅
                    </span>{' '}
                    Mixing Reset Checklist (PDF)
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Simplify your mix decisions.
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-black group-hover:underline dark:text-white">
                    Download PDF
                  </span>
                </div>
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-black hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
            >
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/fecaca/991b1b?text=Challenge"
                    alt="Challenge illustration"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
                    <span role="img" aria-label="repeat emoji" className="mr-1">
                      🔁
                    </span>{' '}
                    Loop Slayer Challenge #01
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Flip this groove and submit your take.
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-black group-hover:underline dark:text-white">
                    View Challenge
                  </span>
                </div>
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-black hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
            >
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/a7f3d0/047857?text=Tip"
                    alt="Quick tip illustration"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
                    <span
                      role="img"
                      aria-label="lightning emoji"
                      className="mr-1"
                    >
                      ⚡
                    </span>{' '}
                    Quick Tip: Sidechain Reverb
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Duck reverb tails for cleaner mixes.
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-black group-hover:underline dark:text-white">
                    Read Tip
                  </span>
                </div>
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-black hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
            >
              <a href="#" className="block">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="https://placehold.co/600x400/c7d2fe/4338ca?text=Sample+Pack"
                    alt="Sample pack illustration"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    {' '}
                    <span
                      role="img"
                      aria-label="download icon"
                      className="text-zinc-700 dark:text-zinc-300"
                    >
                      📥
                    </span>{' '}
                    <span className="text-xs font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                      Free Download
                    </span>{' '}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
                    <span role="img" aria-label="drum emoji" className="mr-1">
                      🥁
                    </span>{' '}
                    Lo-Fi Drums Vol. 1
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Free pack of dusty drum one-shots.
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-black group-hover:underline dark:text-white">
                    Download Pack
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            <a
              href="#"
              className="flex items-center gap-2 text-base font-semibold text-black underline-offset-4 transition-colors hover:underline dark:text-white"
            >
              <span role="img" aria-label="open book emoji" className="mr-1">
                📖
              </span>{' '}
              See All Posts & Guides
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-base font-semibold text-black underline-offset-4 transition-colors hover:underline dark:text-white"
            >
              <span role="img" aria-label="package emoji" className="mr-1">
                📦
              </span>{' '}
              Browse All Free Resources
            </a>
          </motion.div>
        </div>
      </motion.section>
      {/* END OF Latest Content Section */}
    </motion.div>
  )
}
