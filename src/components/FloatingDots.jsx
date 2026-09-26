import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function FloatingDots() {
  const controls = useAnimation()
  useEffect(() => {
    controls.start({
      x: [0, window.innerWidth * 0.8, -window.innerWidth * 0.2, 0],
      y: [0, window.innerHeight * 0.6, -window.innerHeight * 0.2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      },
    })
  }, [controls])

  return (
    <div className="floating-dots" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            background: ['var(--blue)', '--cyan', '--lime', '--blue2', '--text'][i],
            borderRadius: '50%',
            opacity: 0.6,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px ${['var(--blue)', '--cyan', '--lime', '--blue2', '--text'][i]}`,
          }}
          animate={controls}
        />
      ))}
    </div>
  )
}