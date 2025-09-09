'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMusic,
  FiDownload,
  FiMessageCircle,
  FiChevronUp,
} from 'react-icons/fi'

export function FloatingAction() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: FiMusic,
      label: 'Submit Track',
      href: '#submit',
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      icon: FiDownload,
      label: 'Free Tools',
      href: '#content',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: FiMessageCircle,
      label: 'Contact',
      href: '#contact',
      color: 'bg-green-500 hover:bg-green-600',
    },
  ]

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3 rounded-full ${action.color} px-4 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                onClick={() => setIsOpen(false)}
              >
                <action.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FiChevronUp className="h-6 w-6 text-white" />
          ) : (
            <FiMusic className="h-6 w-6 text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
