'use client'

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
  animation?: 'pulse' | 'wave' | 'none'
}

export function Skeleton({
  className = '',
  variant = 'rectangular',
  animation = 'pulse',
}: SkeletonProps) {
  const baseClasses = 'bg-zinc-200 dark:bg-zinc-700'

  const variantClasses = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
  }

  const animationVariants = {
    pulse: {
      animate: {
        opacity: [0.5, 1, 0.5],
      },
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    wave: {
      animate: {
        backgroundPosition: ['200% 0', '-200% 0'],
      },
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
      style: {
        background:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        backgroundSize: '200% 100%',
      },
    },
    none: {},
  }

  if (animation === 'none') {
    return (
      <div
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      />
    )
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...animationVariants[animation]}
    />
  )
}

// Pre-built skeleton components
export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 ${className}`}
    >
      <Skeleton className="mb-4 h-48 w-full" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="mb-4 h-4 w-1/2" />
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  )
}

export function SkeletonText({
  lines = 3,
  className = '',
}: {
  lines?: number
  className?: string
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={`h-4 ${index === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  )
}

export function SkeletonAvatar({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <Skeleton
      variant="circular"
      className={`${sizeClasses[size]} ${className}`}
    />
  )
}
