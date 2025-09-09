'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'orange' | 'blue' | 'white'
  className?: string
}

export function LoadingSpinner({
  size = 'md',
  color = 'orange',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const colorClasses = {
    orange: 'border-orange-500',
    blue: 'border-blue-500',
    white: 'border-white',
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div
        className={`h-full w-full rounded-full border-2 border-transparent border-t-current`}
      />
    </motion.div>
  )
}

export function LoadingDots({ className = '' }: { className?: string }) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="h-2 w-2 rounded-full bg-orange-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  )
}

export function LoadingPulse({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`h-8 w-8 rounded-full bg-orange-500 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
