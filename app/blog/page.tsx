'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: '5 Ways to Escape Loop Hell',
    description:
      'Practical tips to break free from the 8-bar trap and actually finish your tracks.',
    slug: '5-ways-to-escape-loop-hell',
    category: 'Tutorial',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true,
    color: 'orange',
  },
  {
    title: 'Ableton Starter Template v2 - Complete Setup Guide',
    description:
      'Pre-configured routing, grouping, and FX setup to jumpstart your tracks.',
    slug: 'ableton-starter-template-guide',
    category: 'Template',
    date: '2024-01-10',
    readTime: '8 min read',
    featured: true,
    color: 'blue',
  },
  {
    title: 'Mixing Reset Checklist - Simplify Your Mix Decisions',
    description:
      'A practical PDF checklist to help you make better mixing decisions and avoid common pitfalls.',
    slug: 'mixing-reset-checklist',
    category: 'Resource',
    date: '2024-01-05',
    readTime: '6 min read',
    featured: true,
    color: 'green',
  },
  {
    title: 'Loop Slayer Challenge #01 - Flip This Groove',
    description:
      'Take this groove and make it your own. Submit your version and get feedback from the community.',
    slug: 'loop-slayer-challenge-01',
    category: 'Challenge',
    date: '2024-01-01',
    readTime: '4 min read',
    featured: true,
    color: 'red',
  },
  {
    title: 'Quick Tip: Sidechain Reverb',
    description:
      'Duck reverb tails for cleaner mixes and better separation between elements.',
    slug: 'quick-tip-sidechain-reverb',
    category: 'Quick Tip',
    date: '2024-01-20',
    readTime: '3 min read',
    featured: false,
    color: 'purple',
  },
  {
    title: 'Lo-Fi Drums Vol. 1',
    description:
      'Free pack of dusty drum one-shots with vintage character and analog warmth.',
    slug: 'lo-fi-drums-vol-1',
    category: 'Sample Pack',
    date: '2024-01-22',
    readTime: '5 min read',
    featured: false,
    color: 'green',
  },
]

const categoryColors = {
  orange:
    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  red: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  purple:
    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 p-4 shadow-lg"
            >
              <span className="text-3xl">📝</span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-black text-zinc-900 md:text-6xl dark:text-zinc-100">
              <span className="bg-gradient-to-r from-zinc-900 via-orange-600 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-orange-400 dark:to-zinc-100">
                Producer Blog
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Practical tips, templates, and insights to help you finish more
              tracks and level up your production game.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-500 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-orange-600 dark:hover:shadow-orange-500/20"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">
                        {post.category === 'Tutorial' && '🧠'}
                        {post.category === 'Template' && '📥'}
                        {post.category === 'Resource' && '✅'}
                        {post.category === 'Challenge' && '🔁'}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-4 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        FEATURED
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[post.color as keyof typeof categoryColors]}`}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h2 className="mb-3 text-xl font-bold text-zinc-900 transition-colors duration-300 group-hover:text-orange-600 dark:text-zinc-100 dark:group-hover:text-orange-400">
                      {post.title}
                    </h2>

                    <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-600 transition-all duration-300 group-hover:gap-3 dark:text-orange-400">
                      Read Article
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-orange-500"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Want More Content Like This?
            </h2>
            <p className="mb-8 text-lg text-orange-100">
              Subscribe to our newsletter for weekly production tips and
              exclusive resources.
            </p>
            <motion.a
              href="#newsletter"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-orange-600 shadow-2xl transition-all duration-300 hover:bg-orange-50"
            >
              <span>Subscribe Now</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
